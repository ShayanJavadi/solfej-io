/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const chords = require("./chords");
const scales = require("./scales")
const path = require(`path`)
const fs = require('fs')
const { isEmpty } = require('lodash')
const { LOCALES, ALL_BLOG_SLUGS, getTranslation, getTranslatedStrings, getPageContent, translateName } = require('./src/i18n')
const chordsMinified = require("./chordsMinified.json")
const scalesMinified = require("./scalesMinified.json")

function extractRootAndType(displayName) {
    const match = displayName.match(/^([A-G][#b]?)\s*(.*)$/)
    if (!match) return { rootNote: displayName, typeName: "" }
    return { rootNote: match[1], typeName: match[2] }
}

exports.onPreBootstrap = () => {
    const searchDataDir = path.resolve('static/searchData')
    if (!fs.existsSync(searchDataDir)) {
        fs.mkdirSync(searchDataDir, { recursive: true })
    }

    const isDev = process.env.NODE_ENV === 'development'
    const locales = isDev ? ['zh'] : Object.keys(LOCALES)

    locales.forEach(locale => {
        const ui = getTranslatedStrings(locale) || {}
        const chordNames = ui.chordNames || {}
        const scaleNames = ui.scaleNames || {}

        // Generate translated chords search data
        const translatedChords = chordsMinified.map(entry => {
            const { rootNote, typeName } = extractRootAndType(entry.a)
            const translatedName = translateName(entry.a, typeName, rootNote, chordNames)
            const result = { ...entry, e: translatedName }
            return result
        })
        fs.writeFileSync(
            path.join(searchDataDir, `chords.${locale}.json`),
            JSON.stringify(translatedChords)
        )

        // Generate translated scales search data
        const translatedScales = scalesMinified.map(entry => {
            const { rootNote, typeName } = extractRootAndType(entry.a)
            const translatedName = translateName(entry.a, typeName, rootNote, scaleNames)
            const result = { ...entry, e: translatedName }
            return result
        })
        fs.writeFileSync(
            path.join(searchDataDir, `scales.${locale}.json`),
            JSON.stringify(translatedScales)
        )
    })
}

exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        createPage(page)
    }
}

exports.onCreateWebpackConfig = ({ stage, actions, loaders, getConfig }) => {
    const config = getConfig()
    const appDir = path.resolve(__dirname, 'app')

    // Exclude app/ from Gatsby's default url-loader rules for audio/font files
    // to prevent double-processing (file-loader + url-loader conflict)
    config.module.rules.forEach(rule => {
        if (rule.test instanceof RegExp) {
            if (rule.test.test('.mp3') || rule.test.test('.wav') || rule.test.test('.ogg') ||
                rule.test.test('.otf') || rule.test.test('.ttf') || rule.test.test('.woff')) {
                rule.exclude = rule.exclude
                    ? [].concat(rule.exclude, appDir)
                    : [appDir]
            }
        }
        if (rule.oneOf) {
            rule.oneOf.forEach(r => {
                if (r.test instanceof RegExp) {
                    if (r.test.test('.mp3') || r.test.test('.wav') || r.test.test('.ogg') ||
                        r.test.test('.otf') || r.test.test('.ttf') || r.test.test('.woff')) {
                        r.exclude = r.exclude
                            ? [].concat(r.exclude, appDir)
                            : [appDir]
                    }
                }
            })
        }
    })
    actions.replaceWebpackConfig(config)

    // Deduplicate React — prevent multiple instances when app/ imports React
    const reactPath = path.resolve(__dirname, 'node_modules', 'react')
    const reactDomPath = path.resolve(__dirname, 'node_modules', 'react-dom')

    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@solfej-app': appDir,
                'react': reactPath,
                'react-dom': reactDomPath,
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: /node_modules\/@svgdotjs/,
                    use: [loaders.js()],
                },
                {
                    test: /\.js$/,
                    include: appDir,
                    use: [loaders.js()],
                },
                {
                    test: /\.(mp3|wav|ogg)$/,
                    include: appDir,
                    use: [{ loader: 'file-loader' }],
                },
                {
                    test: /\.(otf|ttf|woff|woff2)$/,
                    include: appDir,
                    use: [{ loader: 'file-loader' }],
                },
            ],
        },
    })

    // Null-load Capacitor/Ionic modules during SSR to avoid Node errors
    if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /(@capacitor|@ionic|capacitor-|@ionic-native)/,
                        use: [loaders.null()],
                    },
                ],
            },
        })
    }
}

exports.onPostBuild = async ({ graphql }) => {
    const SITE_URL = 'https://www.solfej.io'
    const URLS_PER_SITEMAP = 5000

    const result = await graphql(`
        {
            allSitePage {
                nodes {
                    path
                }
            }
        }
    `)

    const allPaths = result.data.allSitePage.nodes.map(node => node.path)

    // Split into chunks
    const chunks = []
    for (let i = 0; i < allPaths.length; i += URLS_PER_SITEMAP) {
        chunks.push(allPaths.slice(i, i + URLS_PER_SITEMAP))
    }

    // Ensure output directory exists
    const sitemapDir = path.join(__dirname, 'public', 'sitemap')
    if (!fs.existsSync(sitemapDir)) {
        fs.mkdirSync(sitemapDir, { recursive: true })
    }

    // Generate individual sitemap files
    chunks.forEach((chunk, index) => {
        const urls = chunk.map(p =>
            `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.7</priority>\n  </url>`
        ).join('\n')

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

        fs.writeFileSync(path.join(sitemapDir, `sitemap-${index}.xml`), sitemap)
    })

    // Generate sitemap index
    const sitemapEntries = chunks.map((_, index) =>
        `  <sitemap>\n    <loc>${SITE_URL}/sitemap/sitemap-${index}.xml</loc>\n  </sitemap>`
    ).join('\n')

    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`

    fs.writeFileSync(path.join(sitemapDir, 'sitemap-index-1.xml'), sitemapIndex)

    // Also remove the old single sitemap.xml if it exists
    const oldSitemap = path.join(__dirname, 'public', 'sitemap.xml')
    if (fs.existsSync(oldSitemap)) {
        fs.unlinkSync(oldSitemap)
    }

    console.log(`Generated ${chunks.length} sitemaps with ${allPaths.length} total URLs`)
}

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const chordTemplate = path.resolve(`src/templates/ChordPage/ChordPage.js`)
    const scaleTemplate = path.resolve(`src/templates/ScalePage/ScalePage.js`)
    const homepageTemplate = path.resolve(`src/templates/HomepageTranslated.js`)
    const chordSearchTemplate = path.resolve(`src/templates/ChordSearchTranslated.js`)
    const scaleSearchTemplate = path.resolve(`src/templates/ScaleSearchTranslated.js`)
    const blogIndexTemplate = path.resolve(`src/templates/BlogIndexTranslated.js`)
    const sunoBlogTemplate = path.resolve(`src/templates/SunoBlogPost.js`)

    // === English pages (unchanged) ===
    scales.forEach(scale => {
        createPage({
            path: scale.path,
            component: scaleTemplate,
            context: { scale },
        })
    })

    chords.forEach(chord => {
        createPage({
            path: chord.path,
            component: chordTemplate,
            context: { chord },
        })
    })

    const emptyScales = scales.filter(scale => isEmpty(scale.chords))

    // === Translated pages ===
    // In dev mode, only build one locale to avoid V8 array size limits
    const isDev = process.env.NODE_ENV === 'development'
    const locales = isDev ? ['zh'] : Object.keys(LOCALES)

    locales.forEach(locale => {
        const translatedStrings = getTranslatedStrings(locale)

        // Chord pages: /{locale}/chords/{chord}
        chords.forEach(chord => {
            createPage({
                path: `/${locale}${chord.path}`,
                component: chordTemplate,
                context: { chord, locale, translatedStrings },
            })
        })

        // Scale pages: /{locale}/scales/{scale}
        scales.forEach(scale => {
            createPage({
                path: `/${locale}${scale.path}`,
                component: scaleTemplate,
                context: { scale, locale, translatedStrings },
            })
        })

        // Homepage: /{locale}/
        createPage({
            path: `/${locale}/`,
            component: homepageTemplate,
            context: { locale, translatedStrings, pageContent: getPageContent(locale, 'homepage') },
        })

        // Chord search: /{locale}/chords
        createPage({
            path: `/${locale}/chords`,
            component: chordSearchTemplate,
            context: { locale, translatedStrings, pageContent: getPageContent(locale, 'chordSearchPage') },
        })

        // Scale search: /{locale}/scales
        createPage({
            path: `/${locale}/scales`,
            component: scaleSearchTemplate,
            context: { locale, translatedStrings, pageContent: getPageContent(locale, 'scaleSearchPage') },
        })

        // Blog index: /{locale}/blog
        const blogTranslations = {}
        ALL_BLOG_SLUGS.forEach(slug => {
            const t = getTranslation(locale, slug)
            if (t) {
                blogTranslations[slug] = { title: t.title, description: t.description }
            }
        })
        createPage({
            path: `/${locale}/blog`,
            component: blogIndexTemplate,
            context: { locale, translatedStrings, pageContent: getPageContent(locale, 'blogIndex'), blogTranslations },
        })

        // All blog posts
        ALL_BLOG_SLUGS.forEach(slug => {
            const translation = getTranslation(locale, slug)
            if (translation) {
                createPage({
                    path: `/${locale}/blog/${slug}`,
                    component: sunoBlogTemplate,
                    context: { locale, slug, translation },
                })
            }
        })
    })
}
