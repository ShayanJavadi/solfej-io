import React from "react"
import { Link } from "gatsby"
import loadable from '@loadable/component'
import Layout from "../components/layout"
import HeroImage from "../components/HeroImage"
import MockImageOne from "../components/MockImageOne"
import SEO from "../components/seo"
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
import BlogPostHeroSix from "../components/blogImages/the-4-best-ear-training-apps-for-2019/Thumbnail"
import BlogPostHeroSeven from "../components/blogImages/cadences/Thumbnail"
import BlogPostHeroNine from "../components/blogImages/how-to-learn-music-theory/Thumbnail"
import { blogData as blogData1 } from "./blog/what's-new-in-solfej-v-1.3"
import { blogData as blogData2 } from "./blog/is-betapage-worth-it"
import { blogData as blogData3 } from "./blog/5-beautiful-color-palette-generators-for-your-next-design-project";
import { blogData as blogData4 } from "./blog/7-reasons-why-you-should-learn-music-theory";
import { blogData as blogData5 } from "./blog/dont-give-up-on-music-theory";
import { blogData as blogData6 } from "./blog/the-4-best-ear-training-apps-for-2019";
import { blogData as blogData7 } from "./blog/cadences";
import BlogPostHeroEight from '../components/blogImages/how-to-find-new-music/Thumbnail';
import { blogData as blogData8 } from "./blog/how-to-find-new-music";
import { blogData as blogData9 } from "./blog/how-to-learn-music-theory";

import ShayanJavadi from "../components/ShayanJavadi"
import TempTwo from "../components/Temp2"
import TempThree from "../components/Temp3"
import JP from "../components/JP"
import Henry from "../components/Henry"
import MobileStoreButton from 'react-mobile-store-button';
import { APP_STORE_URL, PLAY_STORE_URL } from "../common/consts/outBoundLinks";
import getPlatform, { DESKTOP, IOS, ANDROID } from "../common/utils/getPlatform";
import getBrowser, { SAFARI } from "../common/utils/getBrowser";
import classNames from "classnames";
import appStoreLinkClicked from "../common/utils/analytics/appStoreLinkClicked";

const typeFormUrl = "https://shayanjavadi.typeform.com/to/wO59zz";
const platform = getPlatform();
const browser = getBrowser();
const renderAppStoreButtons = () => {
    if (platform === DESKTOP) {
        return (
            <>
                <MobileStoreButton
                    store="ios"
                    url={APP_STORE_URL}
                    width={200}
                />
                <MobileStoreButton
                    store="android"
                    url={PLAY_STORE_URL}
                    height={90}
                    width={230}
                />
            </> 
        )
    }

    if (platform === IOS) {
        return (
            <MobileStoreButton
                store="ios"
                url={APP_STORE_URL}
                width={200}
            />
        )
    }

    if (platform === ANDROID) {
        return (
            <MobileStoreButton
                store="android"
                url={PLAY_STORE_URL}
                height={90}
                width={230}
            />
        )
    }
}

const IndexPage = () => (
  <Layout title="Solfej">
    <div className="hero-container">
        <div className="copy-container">
            <h1>Want To Become A Better Musician?</h1>
            <p>Solfej is the best ear training & music theory app. Learn music theory and train your ears with confidence.</p>
            <div className={classNames("app-store-links", browser === SAFARI && "add-bottom-padding")} onClick={() => appStoreLinkClicked(1)}>
                {renderAppStoreButtons()}
            </div>
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
            <h2>Master Music Theory, Ear Training, & Rhythm</h2>
            <p>Practical lesson paths to help you reach your musical goals. No more Wikipedia/YouTube rabbit holes. </p>
        </div>
    </div>
    <div className="marketing-content-container reverse">
        <div className="copy-container small">
            <h2>Interactive Excercises</h2>
            <p>Do you want to recognize intervals? Learn how to play polyrhythms? Know what note is a major 7th above another?</p>
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
            <p>Tired of dry music theory lessons? Solfej's music theory lessons are designed for humans.</p>
        </div>
    </div>
        <Section title="Featured Stories">
            <BlogPostsContainer>
                <BlogPostThumbnail
                    {...blogData9}
                    authorImage={<ShayanJavadi />}
                    image={<BlogPostHeroNine />}
                /> 
                <BlogPostThumbnail
                    {...blogData8}
                    authorImage={<Henry />}
                    image={<BlogPostHeroEight />}
                /> 
              
                <BlogPostThumbnail
                    {...blogData7}
                    authorImage={<Alvin />}
                    image={<BlogPostHeroSeven />}
                /> 

                <BlogPostThumbnail
                    {...blogData6}
                    authorImage={<ShayanJavadi />}
                    image={<BlogPostHeroSix />}
                /> 

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
            </BlogPostsContainer>
        </Section>
  </Layout>
)

export default IndexPage
