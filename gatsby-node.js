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
    console.log(emptyScales)
    createPage({
        path: "/scales/all",
        component: allScalesPage,
        context: { scales: emptyScales },
    })
}
