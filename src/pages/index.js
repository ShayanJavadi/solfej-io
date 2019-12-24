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
import BlogPostsContainer from "../components/BlogPostsContainer"
import Section from "../components/Section"
import BlogPostThumbnail from "../components/BlogPostThumbnail"
import Alvin from "../components/Alvin"
import BlogPostHeroOne from "../components/BlogPostHeroOne"
import BlogPostHeroTwo from "../components/blogImages/is-betapage-worth-it/Thumbnail"
import BlogPostHeroThree from "../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/Thumbnail"
import BlogPostHeroFour from "../components/blogImages/5-reasons-why-you-should-learn-music-theory/Thumbnail"
import BlogPostHeroFive from "../components/blogImages/dont-give-up-on-music-theory/Thumbnail"
import { blogData as blogData1 } from "./blog/what's-new-in-solfej-v-1.3"
import { blogData as blogData2 } from "./blog/is-betapage-worth-it"
import { blogData as blogData3 } from "./blog/5-beautiful-color-palette-generators-for-your-next-design-project";
import { blogData as blogData4 } from "./blog/7-reasons-why-you-should-learn-music-theory";
import { blogData as blogData5 } from "./blog/dont-give-up-on-music-theory";

import ShayanJavadi from "../components/ShayanJavadi"
import TempTwo from "../components/Temp2"
import TempThree from "../components/Temp3"
import JP from "../components/JP"


const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";

const IndexPage = () => (
  <Layout title="Solfej">
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
        <Section title="Featured Stories" h1Header>
            <BlogPostsContainer>
                <BlogPostThumbnail
                    {...blogData5}
                    authorImage={<JP />}
                    image={<BlogPostHeroFive />}
                />
                <BlogPostThumbnail
                    {...blogData4}
                    authorImage={<Alvin />}
                    image={<BlogPostHeroFour />}
                />

                <BlogPostThumbnail
                    title="The Definitive Guide To Musical Cadences"
                    description="Coming Soon! Subscribe to the Newsletter to be notified."
                    authorName="Shayan Javadi"
                    timeToRead=""
                    authorImage={<ShayanJavadi />}
                    image={<TempThree />}
                    isUnavailable
                />
   
            </BlogPostsContainer>
        </Section>
  </Layout>
)

export default IndexPage
