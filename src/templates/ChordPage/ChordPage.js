import { graphql, Link, navigate } from "gatsby";
import React, { useEffect, useState, useCallback } from "react";
import chords from "../../../chordsMinified.json";
import getChordDisplayName from "../../common/utils/chords/getChordDisplayName";
import { translateName } from "../../i18n/translateName";
import Layout from "../../components/layout";
import MdHeader from "../../components/MdHeader/MdHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import Coachmark from "../../components/Coachmark";
import AliasOverline from "../partials/AliasOverline/AliasOverline";
import ChordGuitarDiagram from "./ChordGuitarDiagram/ChordGuitarDiagram";
import ChordInformation from "./ChordInformation/ChordInformation";
import { trackContentView, trackCrossLinkClick, trackRandomClick } from "../../common/utils/analytics";
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
    const [searchQuery, setSearchQuery] = useState("");
    const { chord } = data.allSitePage.edges[0].node.context;
    const { displayName } = chord;
    const { translatedStrings, locale } = pageContext || {};
    const prefix = locale ? `/${locale}` : "";
    const ui = translatedStrings || {
        chordSuffix: "Chord",
        chordSeoTitle: "%s Chord - Notes, Intervals & Diagrams | Solfej",
        chordSeoDescription: "Free %s chord diagrams for guitar & piano. Interactive fingering charts, notes, intervals, and related scales.",
        lookingForScale: "Looking For a Scale?",
        tryScaleSearch: "Try: Scale Search",
        chordTip: "💡Tip: You can find a chord by typing in its notes seperated by commas e.g. (C, E, G)",
        searchChordPlaceholder: null,
        coachmarkChordTitle: "Search for chords",
        coachmarkChordText: "Find any chord by name or notes",
        randomChord: "🎲 Random Chord",
        coachmarkChordCta: "Try: C Major",
    };

    const translatedChordName = translateName(displayName, chord.name, chord.rootNote, ui.chordNames);

    useEffect(() => { trackContentView("Chord", translatedChordName); }, []);

    const handleRandomChord = useCallback(() => {
        trackRandomClick("chord");
        const random = chords[Math.floor(Math.random() * chords.length)];
        navigate(`${prefix}${random.b}`);
    }, [prefix]);

    const seoTitle = ui.chordSeoTitle ? ui.chordSeoTitle.replace(/%s/g, translatedChordName) : `${displayName} Chord - Notes, Intervals & Diagrams | Solfej`;
    const seoDescription = ui.chordSeoDescription ? ui.chordSeoDescription.replace(/%s/g, translatedChordName) : `Free ${displayName} chord diagrams for guitar & piano. Interactive fingering charts, notes, intervals, and related scales.`;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": ui.home || "Home", "item": "https://www.solfej.io" + prefix + "/" },
            { "@type": "ListItem", "position": 2, "name": ui.chordSearch || "Chords", "item": "https://www.solfej.io" + prefix + "/chords" },
            { "@type": "ListItem", "position": 3, "name": translatedChordName + " " + ui.chordSuffix }
        ]
    };

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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="chord-page-template md-styles">
                <div className="suggestion flex" style={{ marginTop: "2rem", marginBottom: "1rem", alignItems: "center", justifyContent: "space-between" }}>
                    <sub><b>{ui.lookingForScale} <Link to={`${prefix}/scales`} onClick={() => trackCrossLinkClick("Chord→Scale")}>{ui.tryScaleSearch}</Link></b></sub>
                    <button className="random-btn" onClick={handleRandomChord}>{ui.randomChord}</button>
                </div>

                <Coachmark
                    id="chord-search-tip"
                    title={ui.coachmarkChordTitle}
                    text={ui.coachmarkChordText}
                    position="bottom"
                    offset={0}
                    buttons={[{
                        label: ui.coachmarkChordCta,
                        onClick: () => setSearchQuery("C major")
                    }]}
                >
                    <SearchBar searchData={chords} searchResultPostFix={"chord"} placeholder={ui.searchChordPlaceholder} locale={locale} initialQuery={searchQuery} />
                </Coachmark>

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