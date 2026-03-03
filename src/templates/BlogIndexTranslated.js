import React from "react"
import Layout from "../components/layout"
import PhotoHero from "../components/PhotoHero"
import BlogHero from "../components/BlogHeroImage"
import Section from "../components/Section/index"
import BlogPostThumbnail from "../components/BlogPostThumbnail/index"
import ShayanJavadi from "../components/ShayanJavadi"
import Alvin from "../components/Alvin"
import JP from "../components/JP"
import Henry from "../components/Henry"

import BlogPostHeroOne from "../components/BlogPostHeroOne"
import BlogPostHeroTwo from "../components/blogImages/is-betapage-worth-it/Thumbnail"
import BlogPostHeroThree from "../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/Thumbnail"
import BlogPostHeroFour from "../components/blogImages/5-reasons-why-you-should-learn-music-theory/Thumbnail"
import BlogPostHeroFive from "../components/blogImages/dont-give-up-on-music-theory/Thumbnail"
import BlogPostHeroSix from "../components/blogImages/the-4-best-ear-training-apps-for-2019/Thumbnail"
import BlogPostHeroSeven from "../components/blogImages/cadences/Thumbnail"
import BlogPostHeroEight from "../components/blogImages/how-to-find-new-music/Thumbnail"
import BlogPostHeroNine from "../components/blogImages/how-to-learn-music-theory/Thumbnail"
import BlogPostHeroSunoChords from "../components/blogImages/suno-ai-chord-progressions/Thumbnail"
import BlogPostHeroSunoPrompts from "../components/blogImages/suno-ai-prompt-guide/Thumbnail"
import BlogPostHeroSunoVsUdio from "../components/blogImages/suno-vs-udio/Thumbnail"
import BlogPostHeroSunoTips from "../components/blogImages/suno-ai-tips/Thumbnail"

import CenteredGraySection from "../components/CenteredGraySection/index"
import BlogPostsContainer from "../components/BlogPostsContainer"
import MailingListImage from "../components/MailingListImage"
import TempTwo from "../components/Temp2"
import TempThree from "../components/Temp3"

import { blogData as blogData1 } from "../pages/blog/what's-new-in-solfej-v-1.3"
import { blogData as blogData2 } from "../pages/blog/is-betapage-worth-it"
import { blogData as blogData3 } from "../pages/blog/5-beautiful-color-palette-generators-for-your-next-design-project"
import { blogData as blogData4 } from "../pages/blog/7-reasons-why-you-should-learn-music-theory"
import { blogData as blogData5 } from "../pages/blog/dont-give-up-on-music-theory"
import { blogData as blogData6 } from "../pages/blog/the-4-best-ear-training-apps-for-2019"
import { blogData as blogData7 } from "../pages/blog/cadences"
import { blogData as blogData8 } from "../pages/blog/how-to-find-new-music"
import { blogData as blogData9 } from "../pages/blog/how-to-learn-music-theory"
import { blogData as blogData10 } from "../pages/blog/suno-ai-chord-progressions"
import { blogData as blogData11 } from "../pages/blog/suno-ai-prompt-guide"
import { blogData as blogData12 } from "../pages/blog/suno-vs-udio"
import { blogData as blogData13 } from "../pages/blog/suno-ai-tips"

export default function BlogIndexTranslated({ pageContext }) {
    const { locale, translatedStrings, pageContent } = pageContext
    const content = pageContent || {}
    const ui = translatedStrings || {}

    return (
        <Layout
            title={content.seoTitle || "Blog - Solfej"}
            description={content.seoDescription || "Solfej, a music theory and ear training, app's blog"}
            translatedStrings={translatedStrings}
            locale={locale}
        >
            <PhotoHero>
                <BlogHero alt="musician girl reading blog posts" />
            </PhotoHero>

            <Section title={content.featuredStories || "Featured Stories"} h1Header>
                <BlogPostsContainer>
                    <BlogPostThumbnail {...blogData10} authorImage={<ShayanJavadi />} image={<BlogPostHeroSunoChords />} />
                    <BlogPostThumbnail {...blogData11} authorImage={<ShayanJavadi />} image={<BlogPostHeroSunoPrompts />} />
                    <BlogPostThumbnail {...blogData12} authorImage={<ShayanJavadi />} image={<BlogPostHeroSunoVsUdio />} />
                    <BlogPostThumbnail {...blogData13} authorImage={<ShayanJavadi />} image={<BlogPostHeroSunoTips />} />
                    <BlogPostThumbnail {...blogData9} authorImage={<ShayanJavadi />} image={<BlogPostHeroNine />} />
                    <BlogPostThumbnail {...blogData8} authorImage={<Henry />} image={<BlogPostHeroEight />} />
                    <BlogPostThumbnail {...blogData7} authorImage={<Alvin />} image={<BlogPostHeroSeven />} />
                    <BlogPostThumbnail {...blogData6} authorImage={<ShayanJavadi />} image={<BlogPostHeroSix />} />
                    <BlogPostThumbnail {...blogData5} authorImage={<JP />} image={<BlogPostHeroFive />} />
                    <BlogPostThumbnail {...blogData4} authorImage={<Alvin />} image={<BlogPostHeroFour />} />
                    <BlogPostThumbnail {...blogData3} authorImage={<ShayanJavadi />} image={<BlogPostHeroThree />} />
                    <BlogPostThumbnail {...blogData2} authorImage={<ShayanJavadi />} image={<BlogPostHeroTwo />} />
                    <BlogPostThumbnail {...blogData1} authorImage={<ShayanJavadi />} image={<BlogPostHeroOne />} />
                </BlogPostsContainer>
            </Section>
            <CenteredGraySection>
                <h2>{ui.getLatestStories || "Get our latest stories"}</h2>
                <div className="image-container">
                    <MailingListImage />
                </div>
                <a href="https://mailchi.mp/a64190eaf494/solfej-newsletter">
                    <button className="cta-button primary">{ui.joinNewsletter || "Join the Newsletter"}</button>
                </a>
            </CenteredGraySection>
        </Layout>
    )
}
