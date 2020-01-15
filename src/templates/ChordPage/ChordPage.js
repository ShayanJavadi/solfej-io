import { graphql } from "gatsby";
import React from "react";
import chords from "../../../chordsMinified.json";
import getChordDisplayName from "../../common/utils/chords/getChordDisplayName";
import Layout from "../../components/layout";
import MdHeader from "../../components/MdHeader/MdHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import AliasOverline from "../partials/AliasOverline/AliasOverline";
import ChordGuitarDiagram from "./ChordGuitarDiagram/ChordGuitarDiagram";
import ChordInformation from "./ChordInformation/ChordInformation";
import "./ChordPage.scss";

const renderHeader = ({ chord }) => {
    const chordName = getChordDisplayName(chord)

    return (
        <div className="header-container">
            <AliasOverline aliases={chord.aliases} />
            <MdHeader subText="Below you can find chord diagrams, piano fingerings, guitar fingering, notes, intervals">
                {chordName} Chord
            </MdHeader>
        </div>
    )
}

export default function ChordPage({ data }) {
    const { chord } = data.allSitePage.edges[0].node.context;
    const { displayName } = chord;

    return (
        <Layout
            title={`How to play ${displayName} on guitar and piano? What notes are in ${displayName}`}
            description={`How to play a ${displayName} chord on piano and guitar? What notes and intervals are in ${displayName}? Find out how and search through 1000s of chords.`}
            image="/images/chords.png"
        >
            <div className="chord-page-template md-styles">
                <SearchBar searchData={chords} searchResultPostFix={"chord"} />
                {renderHeader({ chord })}
                <ChordGuitarDiagram chord={chord} />
                <ChordInformation chord={chord} />
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