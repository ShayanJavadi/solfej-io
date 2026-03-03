import { graphql } from "gatsby";
import React from "react";
import { translateName } from "../../i18n/translateName";
import Layout from "../../components/layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./ChordPage.scss";

export default function AllChordsPage({ data, pageContext }) {
    const { chords } = data.allSitePage.edges[0].node.context;
    const { translatedStrings, locale, pageContent } = pageContext || {};
    const prefix = locale ? `/${locale}` : "";
    const content = pageContent || {
        title: "All Chords",
        seoTitle: "All the chords imaginable",
        description: "This is a page with links to every single chord in the universe",
    };

    return (
        <Layout
            title={content.seoTitle}
            description={content.description}
            image="/images/chords.png"
            translatedStrings={translatedStrings}
            locale={locale}
        >
            <div className="chord-page-template md-styles">
                <h1>{content.title}</h1>
                <div>
                    {
                        chords.map(chord => {
                            const chordNames = (translatedStrings || {}).chordNames;
                            const translated = translateName(chord.displayName, chord.name, chord.rootNote, chordNames);
                            return <p style={{ display: "inline" }}><a href={`${prefix}${chord.path}`}>{translated}</a> - </p>;
                        })
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
                        rootNote,
                        path
                } 
            }
        }
      }
    }
  }
`