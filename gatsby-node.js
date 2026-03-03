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

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: /node_modules\/@svgdotjs/,
                    use: [loaders.js()],
                },
            ],
        },
    })
}

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const chordTemplate = path.resolve(`src/templates/ChordPage/ChordPage.js`)
    const scaleTemplate = path.resolve(`src/templates/ScalePage/ScalePage.js`)
    const allChordsPage = path.resolve(`src/templates/ChordPage/AllChordsPage.js`)
    const allScalesPage = path.resolve(`src/templates/ScalePage/AllScalesPage.js`)
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

    createPage({
        path: "/chords/all",
        component: allChordsPage,
        context: { chords },
    })

    const emptyScales = scales.filter(scale => isEmpty(scale.chords))

    createPage({
        path: "/scales/all",
        component: allScalesPage,
        context: { scales: emptyScales },
    })

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

        // All chords: /{locale}/chords/all
        createPage({
            path: `/${locale}/chords/all`,
            component: allChordsPage,
            context: { chords, locale, translatedStrings, pageContent: getPageContent(locale, 'allChordsPage') },
        })

        // All scales: /{locale}/scales/all
        createPage({
            path: `/${locale}/scales/all`,
            component: allScalesPage,
            context: { scales: emptyScales, locale, translatedStrings, pageContent: getPageContent(locale, 'allScalesPage') },
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
        createPage({
            path: `/${locale}/blog`,
            component: blogIndexTemplate,
            context: { locale, translatedStrings, pageContent: getPageContent(locale, 'blogIndex') },
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
