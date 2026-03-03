import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeroImage from "../components/HeroImage"
import MockImageOne from "../components/MockImageOne"
import MockImageThree from "../components/MockImageThree"
import MockImageTwo from "../components/MockImageTwo"
import IllustrationOne from "../components/IllustrationOne"
import IllustrationThree from "../components/IllustrationThree"
import IllustrationTwo from "../components/IllustrationTwo"
import BlogPostsContainer from "../components/BlogPostsContainer"
import Section from "../components/Section"
import BlogPostThumbnail from "../components/BlogPostThumbnail"
import Alvin from "../components/Alvin"
import BlogPostHeroNine from "../components/blogImages/how-to-learn-music-theory/Thumbnail"
import BlogPostHeroEight from "../components/blogImages/how-to-find-new-music/Thumbnail"
import BlogPostHeroSeven from "../components/blogImages/cadences/Thumbnail"
import BlogPostHeroSix from "../components/blogImages/the-4-best-ear-training-apps-for-2019/Thumbnail"
import BlogPostHeroFive from "../components/blogImages/dont-give-up-on-music-theory/Thumbnail"
import BlogPostHeroFour from "../components/blogImages/5-reasons-why-you-should-learn-music-theory/Thumbnail"
import { blogData as blogData4 } from "../pages/blog/7-reasons-why-you-should-learn-music-theory"
import { blogData as blogData5 } from "../pages/blog/dont-give-up-on-music-theory"
import { blogData as blogData6 } from "../pages/blog/the-4-best-ear-training-apps-for-2019"
import { blogData as blogData7 } from "../pages/blog/cadences"
import { blogData as blogData8 } from "../pages/blog/how-to-find-new-music"
import { blogData as blogData9 } from "../pages/blog/how-to-learn-music-theory"
import ShayanJavadi from "../components/ShayanJavadi"
import JP from "../components/JP"
import Henry from "../components/Henry"
import MobileStoreButton from "react-mobile-store-button"
import { APP_STORE_URL, PLAY_STORE_URL } from "../common/consts/outBoundLinks"
import getPlatform, { DESKTOP, IOS, ANDROID } from "../common/utils/getPlatform"
import getBrowser, { SAFARI } from "../common/utils/getBrowser"
import classNames from "classnames"
import appStoreLinkClicked from "../common/utils/analytics/appStoreLinkClicked"

const platform = getPlatform()
const browser = getBrowser()

const renderAppStoreButtons = () => {
    if (platform === DESKTOP) {
        return (
            <>
                <MobileStoreButton store="ios" url={APP_STORE_URL} width={200} />
                <MobileStoreButton store="android" url={PLAY_STORE_URL} height={90} width={230} />
            </>
        )
    }
    if (platform === IOS) {
        return <MobileStoreButton store="ios" url={APP_STORE_URL} width={200} />
    }
    if (platform === ANDROID) {
        return <MobileStoreButton store="android" url={PLAY_STORE_URL} height={90} width={230} />
    }
}

export default function HomepageTranslated({ pageContext }) {
    const { locale, translatedStrings, pageContent } = pageContext
    const content = pageContent || {}

    return (
        <Layout
            title={content.seoTitle || "Solfej"}
            translatedStrings={translatedStrings}
            locale={locale}
        >
            <div className="hero-container">
                <div className="copy-container">
                    <h1>{content.heroTitle || "Become A Better Musician"}</h1>
                    <p>{content.heroDescription || "Solfej is the best ear training & music theory app. Learn music theory and train your ears with confidence."}</p>
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
                    <h2>{content.masterTitle || "Master Music Theory, Ear Training, & Rhythm"}</h2>
                    <p>{content.masterDesc || "Practical lesson paths to help you reach your musical goals. No more Wikipedia/YouTube rabbit holes."}</p>
                </div>
            </div>
            <div className="marketing-content-container reverse">
                <div className="copy-container small">
                    <h2>{content.interactiveTitle || "Interactive Excercises"}</h2>
                    <p>{content.interactiveDesc || "Do you want to recognize intervals? Learn how to play polyrhythms? Know what note is a major 7th above another?"}</p>
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
                    <h2>{content.simpleTitle || "Simple Language"}</h2>
                    <p>{content.simpleDesc || "Tired of dry music theory lessons? Solfej's music theory lessons are designed for humans."}</p>
                </div>
            </div>
            <Section title={content.featuredStories || "Featured Stories"}>
                <BlogPostsContainer>
                    <BlogPostThumbnail {...blogData9} authorImage={<ShayanJavadi />} image={<BlogPostHeroNine />} />
                    <BlogPostThumbnail {...blogData8} authorImage={<Henry />} image={<BlogPostHeroEight />} />
                    <BlogPostThumbnail {...blogData7} authorImage={<Alvin />} image={<BlogPostHeroSeven />} />
                    <BlogPostThumbnail {...blogData6} authorImage={<ShayanJavadi />} image={<BlogPostHeroSix />} />
                    <BlogPostThumbnail {...blogData5} authorImage={<JP />} image={<BlogPostHeroFive />} />
                    <BlogPostThumbnail {...blogData4} authorImage={<Alvin />} image={<BlogPostHeroFour />} />
                </BlogPostsContainer>
            </Section>
        </Layout>
    )
}
