import React from "react"
import "../styles/mdStyles.scss"
import "../pages/scales/scales.scss"
import scales from "../../scalesMinified.json"
import Layout from "../components/layout"
import SearchBar from "../components/SearchBar/SearchBar"
import MarketingOne from "../components/scales1"
import MarketingThree from "../components/scales3"
import MarketingFive from "../components/scales5"
import MarketingSix from "../components/scales6"
import MarketingSeven from "../components/scales7"
import { Link } from "gatsby"

export default function ScaleSearchTranslated({ pageContext }) {
    const { locale, translatedStrings, pageContent } = pageContext
    const prefix = `/${locale}`
    const content = pageContent || {}
    const ui = translatedStrings || {}

    return (
        <Layout
            title={content.seoTitle || "Free scale search. Search through 1000s of scales."}
            image="/images/scales.png"
            description={content.seoDescription || "Solfej's free scale search tool helps you search through 1000s of scales."}
            translatedStrings={translatedStrings}
            locale={locale}
        >
            <div className="scales-page-index md-styles">
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-copy">
                            <h1>{content.heroTitle || "🔍 Scale Search 🎼"}</h1>
                            <p>{content.heroDescription || "Want to learn about a scale? Scale Search shows you audible examples, notes, intervals, chords, formula, and guitar/piano fingerings that go along with each scale. Just type in a scale name or notes to get started."}</p>
                        </div>
                        <div className="hint flex-centered">
                            <sub><b>{ui.scaleTip || "💡Tip: You can find a scale by typing in its notes seperated by commas e.g. (C, E, G)"}</b></sub>
                        </div>
                        <SearchBar searchData={scales} searchResultPostFix={"scale"} placeholder={ui.searchScalePlaceholder} locale={locale} />
                        <div className="suggestion flex-centered">
                            <sub><b>{ui.lookingForChord || "Looking For a Chord?"} <Link to={`${prefix}/chords`}>{ui.tryChordSearch || "Try: Chord Search"}</Link></b></sub>
                        </div>
                    </div>
                </div>
                {content.introText && <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem 2rem" }}><p>{content.introText}</p></div>}
                <div className="marketing-content-container reverse copy-on-left">
                    <div className="image-container">
                        <div className="mock-container">
                            <MarketingFive />
                        </div>
                    </div>
                    <div className="copy-container small">
                        <h2>{content.masterTitle || "Master Every Scale Imaginable"}</h2>
                        <p>{content.masterDesc || "Search through 1000s of scales. Learn each scale's fingerings (guitar and piano), notes, intervals, formula, and chords that go along with it."}</p>
                    </div>
                </div>
                <div className="divider" />
                <div className="marketing-content-container copy-on-left">
                    <div className="copy-container small">
                        <h2>{content.hearTitle || "Hear Examples Of Each Scale"}</h2>
                        <p>{content.hearDesc || "Hear what each scale sounds like through interactive examples"}</p>
                    </div>
                    <div className="image-container">
                        <div className="mock-container">
                            <MarketingSeven />
                        </div>
                    </div>
                </div>
                <div className="divider" />
                <div className="marketing-content-container reverse copy-on-right">
                    <div className="image-container">
                        <div className="mock-container">
                            <MarketingOne />
                        </div>
                    </div>
                    <div className="copy-container small">
                        <h2>{content.guitarTitle || "Guitar Scale Diagrams"}</h2>
                        <p>{content.guitarDesc || "Learn how to play each scale on the guitar through simple fingering diagrams."}</p>
                    </div>
                </div>
                <div className="divider" />
                <div className="marketing-content-container copy-on-left">
                    <div className="copy-container small">
                        <h2>{content.pianoTitle || "Piano Scale Fingerings"}</h2>
                        <p>{content.pianoDesc || "Learn how to play each scale on the piano through simple fingering diagrams."}</p>
                    </div>
                    <div className="image-container">
                        <div className="mock-container">
                            <MarketingSix />
                        </div>
                    </div>
                </div>
                <div className="divider" />
                <div className="marketing-content-container reverse copy-on-right">
                    <div className="image-container">
                        <div className="mock-container">
                            <MarketingThree />
                        </div>
                    </div>
                    <div className="copy-container small">
                        <h2>{content.moreTitle || "Notes, Intervals, And More!"}</h2>
                        <p>{content.moreDesc || "Go deep on each scale's building blocks. Learn each scale's notes, intervals, chords, and more."}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
