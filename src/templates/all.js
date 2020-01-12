import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SearchBar from "../components/SearchBar/SearchBar";
import "./chordPageTemplate.scss";

export default function Template({ data }) {
    const { chords } = data.allSitePage.edges[0].node.context;

    return (
        <Layout
            title="All the chords imaginable"
            description={`This is a page with links to every single chord in the universe`}
            image="/images/chords.png"
        >
            <div className="chord-page-template md-styles">
                <h1>All Chords</h1>
                <div>
                    {
                        chords.map(chord => <p style={{ display: "inline" }}><a href={chord.path}>{chord.displayName}</a> - </p>)
                    }
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
            context {
                chords {
                        displayName,
                        name,
                        path
                } 
            }
        }
      }
    }
  }
`