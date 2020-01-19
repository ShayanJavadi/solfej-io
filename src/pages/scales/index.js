import React from 'react'
import "../../styles/mdStyles.scss"
import "./scales.scss"
import scales from "../../../scalesMinified.json"
import Layout from '../../components/layout'
import SearchBar from '../../components/SearchBar/SearchBar'
import MarketingOne from '../../components/scales1'
import MarketingTwo from '../../components/scales2'
import MarketingThree from '../../components/scales3'
import MarketingFour from '../../components/scales4'
import MarketingFive from '../../components/scales5'
import MarketingSix from '../../components/scales6'
import { Link } from 'gatsby'

export default function index() {
    return (
        <Layout
            title="Free scale search. Search through 1000s of scales."
            image="/images/scales.png"
            description="Solfej's free scale search tool helps you search through 1000s of scales. With Solfej's free scale search tool you can find guitar scale diagrams, piano fingering diagrams, and notes and intervals for scales."
        >
            <div className="scales-page-index md-styles">
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-copy">

                            <h1>🔍 Scale Search 🎼</h1>

                            <p>Want to learn about a scale? Scale Search shows you notes, intervals, chords, formula, and guitar/piano fingerings that go along with each scale. Just type in a scale name or notes to get started.</p>

                        </div>

                        <div className="hint flex-centered">
                            <sub><b>💡Tip: You can find a scale by typing in its notes seperated by commas e.g. (C, E, G)</b></sub>
                        </div>
                        <SearchBar searchData={scales} searchResultPostFix={"scale"} />
                        <div className="suggestion flex-centered">
                            <sub><b>Looking For a Chord? Try: <Link to="/chords">Chord Search</Link></b></sub>
                        </div>
                    </div>
                </div>
            <div className="marketing-content-container reverse copy-on-left">
                <div className="image-container">
                    <div className="mock-container">
                        <MarketingFive />
                    </div>
                </div>
                <div className="copy-container small">
                    <h2>Master Every Scale Imaginable</h2>
                    <p>Search through 1000s of scales. Learn each scale's fingerings (guitar and piano), notes, intervals, formula, and chords that go along with it. </p>
                  
                </div>
            </div>
            <div className="divider" />
            <div className="marketing-content-container copy-on-left">
                <div className="copy-container small">
                    <h2>Piano Scale Fingerings</h2>
                    <p>Learn how to play each scale on the piano through simple fingering diagrams.</p>

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
                        <MarketingOne />
                    </div>
                </div>
                <div className="copy-container small">
                    <h2>Guitar Scale Diagrams</h2>
                    <p>Learn how to play each scale on the guitar through simple fingering diagrams.</p>

                </div>
            </div>
            <div className="divider" />
            <div className="marketing-content-container copy-on-right">
                <div className="copy-container small">
                    <h2>Notes, Intervals, And More!</h2>
                    <p>Go deep on each scale's building blocks. Learn each scale's notes, intervals, chords, and more.</p>

                </div>
                <div className="image-container">
                    <div className="mock-container">
                        <MarketingThree />
                    </div>
                </div>
            </div>
            </div>

        </Layout>
      
    )
}
