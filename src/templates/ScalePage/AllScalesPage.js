import { graphql } from "gatsby";
import React from "react";
import { translateName } from "../../i18n/translateName";
import Layout from "../../components/layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../ChordPage/ChordPage.scss";

export default function AllScalesPage({ data, pageContext }) {
    const { scales } = data.allSitePage.edges[0].node.context;
    const { translatedStrings, locale, pageContent } = pageContext || {};
    const prefix = locale ? `/${locale}` : "";
    const content = pageContent || {
        title: "Scales Directory",
        seoTitle: "All the scales imaginable",
        description: "This is a page with links to every single scale in the universe",
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
                        scales.map(scale => {
                            const scaleNames = (translatedStrings || {}).scaleNames;
                            const translated = translateName(scale.displayName, scale.name, scale.rootNote, scaleNames);
                            return <p style={{ display: "inline" }}><a href={`${prefix}${scale.path}`}>{translated}</a> - </p>;
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
                scales {
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