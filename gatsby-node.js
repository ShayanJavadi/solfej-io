/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const chords = require("./chords");
const path = require(`path`)



exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const chordTemplate = path.resolve(`src/templates/chordPageTemplate.js`)
    const allTemplate = path.resolve(`src/templates/all.js`)

    chords.forEach(chord => {
        createPage({
            path: chord.path,
            component: chordTemplate,
            context: { chord }, // additional data can be passed via context
        })
    })

    createPage({
        path: "/chords/all",
        component: allTemplate,
        context: { chords }, // additional data can be passed via context
    })
}
