/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const chords = require("./chords");
const scales = require("./scales")
const path = require(`path`)
const { isEmpty } = require('lodash')
const { LOCALES, SUNO_SLUGS, getTranslation } = require('./src/i18n')

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

    // Create translated Suno blog pages
    const sunoBlogTemplate = path.resolve(`src/templates/SunoBlogPost.js`)

    Object.keys(LOCALES).forEach(locale => {
        SUNO_SLUGS.forEach(slug => {
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
