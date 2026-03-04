import { graphql, Link } from "gatsby";
import React from "react";
import chords from "../../../chordsMinified.json";
import getChordDisplayName from "../../common/utils/chords/getChordDisplayName";
import { translateName } from "../../i18n/translateName";
import Layout from "../../components/layout";
import MdHeader from "../../components/MdHeader/MdHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import AliasOverline from "../partials/AliasOverline/AliasOverline";
import ChordGuitarDiagram from "./ChordGuitarDiagram/ChordGuitarDiagram";
import ChordInformation from "./ChordInformation/ChordInformation";
import "./ChordPage.scss";

const renderHeader = ({ chord, ui, translatedChordName, translatedStrings }) => {
    return (
        <div className="header-container">
            <AliasOverline aliases={chord.aliases} translatedStrings={translatedStrings} />
            <MdHeader subText={ui.chordPageSubText || "Below you can find chord diagrams, piano fingerings, guitar fingering, notes, intervals, scales, and arpeggios."}>
                {translatedChordName} {ui.chordSuffix}
            </MdHeader>
        </div>
    )
}

export default function ChordPage({ data, pageContext }) {
    const { chord } = data.allSitePage.edges[0].node.context;
    const { displayName } = chord;
    const { translatedStrings, locale } = pageContext || {};
    const prefix = locale ? `/${locale}` : "";
    const ui = translatedStrings || {
        chordSuffix: "Chord",
        chordSeoTitle: "How to play %s on guitar and piano? What notes are in %s",
        chordSeoDescription: "How to play a %s chord on piano and guitar? What notes and intervals are in %s? Find out how and search through 1000s of chords.",
        lookingForScale: "Looking For a Scale?",
        tryScaleSearch: "Try: Scale Search",
        chordTip: "💡Tip: You can find a chord by typing in its notes seperated by commas e.g. (C, E, G)",
        searchChordPlaceholder: null,
    };

    const translatedChordName = translateName(displayName, chord.name, chord.rootNote, ui.chordNames);
    const seoTitle = ui.chordSeoTitle ? ui.chordSeoTitle.replace(/%s/g, translatedChordName) : `How to play ${displayName} on guitar and piano?`;
    const seoDescription = ui.chordSeoDescription ? ui.chordSeoDescription.replace(/%s/g, translatedChordName) : `How to play a ${displayName} chord on piano and guitar?`;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": (ui.whatNotesInChord || "What notes are in a %s chord?").replace(/%s/g, translatedChordName), "acceptedAnswer": { "@type": "Answer", "text": chord.notes ? chord.notes.join(", ") : displayName } },
            { "@type": "Question", "name": (ui.whatIntervalsInChord || "What intervals are in a %s chord?").replace(/%s/g, translatedChordName), "acceptedAnswer": { "@type": "Answer", "text": chord.intervals ? chord.intervals.join(", ") : displayName } },
            { "@type": "Question", "name": (ui.howPlayChordPiano || "How do you play a %s chord on the piano?").replace(/%s/g, translatedChordName), "acceptedAnswer": { "@type": "Answer", "text": `${translatedChordName}: ${chord.notes ? chord.notes.join(", ") : displayName}` } },
            { "@type": "Question", "name": (ui.howPlayChordGuitar || "How do you play a %s chord on the guitar?").replace(/%s/g, translatedChordName), "acceptedAnswer": { "@type": "Answer", "text": `${translatedChordName}: ${chord.notes ? chord.notes.join(", ") : displayName}` } },
        ]
    }

    return (
        <Layout
            title={seoTitle}
            description={seoDescription}
            image="/images/chords.png"
            translatedStrings={translatedStrings}
            locale={locale}
            pagePath={chord.path}
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="chord-page-template md-styles">
                <div className="suggestion flex" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                    <sub><b>{ui.lookingForScale} <Link to={`${prefix}/scales`}>{ui.tryScaleSearch}</Link></b></sub>
                </div>

                <SearchBar searchData={chords} searchResultPostFix={"chord"} placeholder={ui.searchChordPlaceholder} locale={locale} />

                <div className="hint" >
                    <sub style={{ textAlign: "left" }}><b>{ui.chordTip}</b></sub>
                </div>
                {renderHeader({ chord, ui, translatedChordName, translatedStrings })}
                <ChordGuitarDiagram chord={chord} translatedStrings={translatedStrings} />
                <ChordInformation chord={chord} translatedStrings={translatedStrings} locale={locale} />
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
                chord {
                    displayName,
                    quality,
                    intervals,
                    name,
                    rootNote,
                    inversions {
                        name,
                        path,
                        inversion
                    },
                    parentScales {
                  
                        C {
                            name,
                            path,
                            rootNote,
                        },
                        Csharp {
                            name,
                            path,
                            rootNote,
                        },
                        Db {
                            name,
                            path,
                            rootNote
                        },
                        D {
                            name,
                            path,
                            rootNote
                        },
                        Dsharp {
                            name,
                            path,
                            rootNote
                        },
                        Eb {
                            name,
                            path,
                            rootNote
                        },
                        E {
                            name,
                            path,
                            rootNote
                        },
                        F {
                            name,
                            path,
                            rootNote
                        },
                        Fsharp {
                            name,
                            path,
                            rootNote
                        },
                        Gb {
                            name,
                            path,
                            rootNote
                        },
                        G {
                            name,
                            path,
                            rootNote
                        },
                        Gsharp {
                            name,
                            path,
                            rootNote
                        },
                        Ab {
                            name,
                            path,
                            rootNote
                        },
                        A {
                            name,
                            path,
                            rootNote
                        },
                        Asharp {
                            name,
                            path,
                            rootNote
                        },
                        Bb {
                            name,
                            path,
                            rootNote
                        },
                        B {
                            name,
                            path,
                            rootNote
                        },
                    },
                    aliases {
                        name,
                        url
                    },
                    notes,
                    fingering {
                      strings,
                      fingering,

                    },
                    path
                }
            }
        }
      }
    }
  }
`