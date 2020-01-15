import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../ChordPage/ChordPage.scss";

export default function AllChordsPage({ data }) {
    const { scales } = data.allSitePage.edges[0].node.context;

    return (
        <Layout
            title="All the scales imaginable"
            description={`This is a page with links to every single scale in the universe`}
            image="/images/chords.png"
        >
            <div className="chord-page-template md-styles">
                <h1>Scales Directory</h1>
                <p>Weird scales go here</p>
                <div>
                    {
                        scales.map(scale => <p style={{ display: "inline" }}><a href={scale.path}>{scale.displayName}</a> - </p>)
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
                scales {
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