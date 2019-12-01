import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeroImage from "../components/HeroImage"
import MockImageOne from "../components/MockImageOne"
import SEO from "../components/seo"
import "./index.scss";
import MockImageThree from "../components/MockImageThree"
import MockImageTwo from "../components/MockImageTwo"
import IllustrationOne from "../components/IllustrationOne";
import IllustrationThree from "../components/IllustrationThree";
import IllustrationTwo from "../components/IllustrationTwo"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";

const IndexPage = () => (
  <Layout>

    <div className="hero-container">
        <div className="copy-container">
            <h1>The Best New Way To Learn Music Theory</h1>
            <p>Learn music theory & train your ears regardless of <br /> your musical experience.</p>
            <OutboundLink href={typeFormUrl}>
                <button className="cta-button primary">Get Early Access</button>
            </OutboundLink>
        </div>
        <div className="image-container">
            <HeroImage />
        </div>
    </div>
    <div className="marketing-content-container gray">
        <div className="image-container">
            <div className="illustration-container girl">
                <IllustrationOne />
            </div>
            <div className="mock-container">
                <MockImageOne />
            </div>
        </div>
        <div className="copy-container small">
            <h2>Your Guide to Music Theory, Ear Training, & Rhythm</h2>
            <p>Practical lesson paths. No more Wikipedia/YouTube rabbit holes. New lessons added every month.</p>
            <OutboundLink href={typeFormUrl}>
                <button className="cta-button green">Get Early Access</button>
            </OutboundLink>
        </div>
    </div>
    <div className="marketing-content-container reverse">
        <div className="copy-container small">
            <h2>Interactive & Practical Excercises</h2>
            <p>Interactive ear training and rhythm exercises to help you internalize complex topics.</p>
            <OutboundLink href={typeFormUrl}>
                <button className="cta-button yellow">Get Early Access</button>
            </OutboundLink>
        </div>
        <div className="image-container">
            <div className="mock-container">
                <MockImageThree />
            </div>
            <div className="illustration-container guitar-guy">
                <IllustrationTwo />
            </div>
        </div>
    </div>
    <div className="marketing-content-container gray">
        <div className="image-container">
            <div className="illustration-container confused-guy">
                <IllustrationThree />
            </div>
            <div className="mock-container">
                <MockImageTwo />
            </div>
        </div>
        <div className="copy-container small">
            <h2>Simple Language</h2>
            <p>Delightful music theory lessons designed for humans. New lessons added every month.</p>
            <OutboundLink href={typeFormUrl}>
                <button className="cta-button secondary">Get Early Access</button>
            </OutboundLink>
        </div>
    </div>
  </Layout>
)

export default IndexPage
