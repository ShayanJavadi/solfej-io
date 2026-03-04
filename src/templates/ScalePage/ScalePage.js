
import React from 'react';
import scales from "../../../scalesMinified.json"
import { translateName } from '../../i18n/translateName';
import Layout from '../../components/layout';
import MdHeader from '../../components/MdHeader/MdHeader';
import Page from '../../components/Page/Page';
import AliasOverline from '../partials/AliasOverline';
import ScaleInformation from './ScaleInformation/ScaleInformation';
import ScaleInstrumentDiagrams from './ScaleInstrumentDiagrams/ScaleInstrumentDiagrams';
import "./ScalePage.scss";
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link } from 'gatsby';

const renderHeader = (scale, ui, translatedScaleName, translatedStrings) => {
    return (
        <div className="header-container flex-column-center">
            <AliasOverline aliases={scale.aliases} translatedStrings={translatedStrings} />
            <MdHeader subText={ui.scalePageSubText || "Below you can find guitar and piano scale diagrams, notes, intervals, formulas, and chords"}>
                {translatedScaleName} {ui.scaleSuffix}
            </MdHeader>
        </div>
    )
}

export default function ScalePage({ data, pageContext }) {
    const { scale } = data.allSitePage.edges[0].node.context;
    const { displayName } = scale;
    const { translatedStrings, locale } = pageContext || {};
    const prefix = locale ? `/${locale}` : "";
    const ui = translatedStrings || {
        scaleSuffix: "Scale",
        scaleSeoTitle: "How to play %s scale on guitar and piano? What notes are in %s",
        scaleSeoDescription: "How to play a %s scale on piano and guitar? What notes and intervals are in %s? Find out how and search through 1000s of scales.",
        lookingForChord: "Looking For a Chord?",
        tryChordSearch: "Try: Chord Search",
        scaleTip: "💡Tip: You can find a scale by typing in its notes seperated by commas e.g. (C, E, G)",
        searchScalePlaceholder: null,
    };

    const translatedScaleName = translateName(displayName, scale.name, scale.rootNote, ui.scaleNames);
    const seoTitle = ui.scaleSeoTitle ? ui.scaleSeoTitle.replace(/%s/g, translatedScaleName) : `How to play ${displayName} scale on guitar and piano?`;
    const seoDescription = ui.scaleSeoDescription ? ui.scaleSeoDescription.replace(/%s/g, translatedScaleName) : `How to play a ${displayName} scale on piano and guitar?`;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": (ui.whatNotesInScale || "What notes are in the %s scale").replace(/%s/g, translatedScaleName), "acceptedAnswer": { "@type": "Answer", "text": scale.notes ? scale.notes.join(", ") : displayName } },
            { "@type": "Question", "name": (ui.whatIntervalsInScale || "What intervals are in the %s scale").replace(/%s/g, translatedScaleName), "acceptedAnswer": { "@type": "Answer", "text": scale.intervals ? scale.intervals.join(", ") : displayName } },
            { "@type": "Question", "name": (ui.whatFormulaOfScale || "What is the formula for the %s scale").replace(/%s/g, translatedScaleName), "acceptedAnswer": { "@type": "Answer", "text": scale.intervals ? scale.intervals.join(", ") : displayName } },
            { "@type": "Question", "name": (ui.howPlayScaleGuitar || "How do you play the %s scale on the guitar?").replace(/%s/g, translatedScaleName), "acceptedAnswer": { "@type": "Answer", "text": `${translatedScaleName}: ${scale.notes ? scale.notes.join(", ") : displayName}` } },
        ]
    }

    return (
        <Layout
            title={seoTitle}
            description={seoDescription}
            image="/images/chords.png"
            translatedStrings={translatedStrings}
            locale={locale}
            pagePath={scale.path}
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Page className="scale-page md-styles">
                <div className="suggestion flex" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                    <sub><b>{ui.lookingForChord} <Link to={`${prefix}/chords`}>{ui.tryChordSearch}</Link></b></sub>
                </div>

                <SearchBar searchData={scales} searchResultPostFix={"scale"} placeholder={ui.searchScalePlaceholder} locale={locale} />
                <div className="hint" >
                    <sub style={{ textAlign: "left" }}><b>{ui.scaleTip}</b></sub>
                </div>
                {renderHeader(scale, ui, translatedScaleName, translatedStrings)}
                <ScaleInstrumentDiagrams scale={scale} translatedStrings={translatedStrings} />
                <ScaleInformation scale={scale} translatedStrings={translatedStrings} locale={locale} />
            </Page>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
            context {
                scale {
                    name,
                    intervals,
                    aliases {
                        name,
                        url
                    },
                    notes,
                    displayName,
                    rootNote,
                    path,
                    chords {
                        name,
                        path,
                        rootNote,
                        inversion
                    },
                }   
            }
        }
      }
    }
  }
`