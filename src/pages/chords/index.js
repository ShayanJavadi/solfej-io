import React from 'react'
import "../../styles/mdStyles.scss"
import "./chords.scss"
import chords from "../../../chordsMinified.json"
import Layout from '../../components/layout'
import SearchBar from '../../components/SearchBar/SearchBar'
import MarketingOne from '../../components/Marketing1'
import MarketingTwo from '../../components/Marketing2'
import MarketingThree from '../../components/Marketing3'
import MarketingFour from '../../components/Marketing4'

export default function index() {
    return (
        <Layout
            title="Free chord search. Search through 1000s of chords."
            image="/images/chords.png"
            description="Solfej's free chord search tool helps you search through 1000s of chords. With Solfej's free chord search tool you can find guitar chord diagrams, piano fingering diagrams, and notes and intervals for chords."
        >
            <div className="chords-page-index md-styles">
                <div className="hero">
                    <div className="hero-content">
                        <div className="hero-copy">

                            <h1>🔍 Chord Search 🎹</h1>

                            <p>Want to learn about a chord? Chord Search shows you notes, intervals, guitar and piano fingerings that go along with each chord. Just type in a chord name to get started.</p>

                        </div>
                        <SearchBar searchData={chords} searchResultPostFix={"chord"} />
                    </div>
                </div>
            <div className="marketing-content-container reverse copy-on-left">
                <div className="image-container">
                    <div className="mock-container">
                        <MarketingOne />
                    </div>
                </div>
                <div className="copy-container small">
                    <h2>Master Every Chord Imaginable</h2>
                    <p>Search through 1000s of chords. Learn each chord's fingerings (guitar and piano), notes, intervals, and aliases. </p>
                  
                </div>
            </div>
            <div className="divider" />
            <div className="marketing-content-container copy-on-left">
                <div className="copy-container small">
                    <h2>Piano Chord Diagrams</h2>
                    <p>Learn how to play each chord on the piano through simple fingering diagrams.</p>

                </div>
                <div className="image-container">
                    <div className="mock-container">
                        <MarketingTwo />
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
                    <h2>Guitar Chord Diagrams</h2>
                    <p>Learn how to play each chord on the guitar through simple fingering diagrams.</p>

                </div>
            </div>
            <div className="divider" />
            <div className="marketing-content-container copy-on-right">
                <div className="copy-container small">
                    <h2>Notes, Intervals, And More!</h2>
                    <p>Go deep on each chord's building blocks. Learn each chord's notes, intervals, scales, and more.</p>

                </div>
                <div className="image-container">
                    <div className="mock-container">
                        <MarketingFour />
                    </div>
                </div>
            </div>
            </div>

        </Layout>
      
    )
}
