import React from 'react'
import Layout from '../../components/layout'
import PhotoHero from '../../components/PhotoHero'
import BlogHero from '../../components/BlogHeroImage'
import Section from '../../components/Section/index'
import BlogPostThumbnail from '../../components/BlogPostThumbnail/index'
import ShayanJavadi from '../../components/ShayanJavadi'
import Alvin from '../../components/Alvin'
import JP from '../../components/JP'
import BlogPostHeroOne from '../../components/BlogPostHeroOne'
import BlogPostHeroTwo from '../../components/blogImages/is-betapage-worth-it/Thumbnail'
import BlogPostHeroThree from '../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/Thumbnail'
import BlogPostHeroFour from '../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Thumbnail';
import BlogPostHeroFive from '../../components/blogImages/dont-give-up-on-music-theory/Thumbnail';
import BlogPostHeroSix from '../../components/blogImages/the-4-best-ear-training-apps-for-2019/Thumbnail';
import BlogPostHeroSeven from '../../components/blogImages/cadences/Thumbnail';

import CenteredGraySection from '../../components/CenteredGraySection/index'
import BlogPostsContainer from "../../components/BlogPostsContainer";
import MailingListImage from '../../components/MailingListImage'
import TempOne from '../../components/Temp1'
import TempTwo from '../../components/Temp2'
import TempThree from '../../components/Temp3'

import { blogData as blogData1 } from "../blog/what's-new-in-solfej-v-1.3"
import { blogData as blogData2 } from "../blog/is-betapage-worth-it"
import { blogData as blogData3 } from "../blog/5-beautiful-color-palette-generators-for-your-next-design-project";
import { blogData as blogData4 } from "./7-reasons-why-you-should-learn-music-theory";
import { blogData as blogData5 } from "./dont-give-up-on-music-theory";
import { blogData as blogData6 } from "./the-4-best-ear-training-apps-for-2019";
import { blogData as blogData7 } from "./cadences";

export default function tos() {
    return (
        <Layout title="Blog - Solfej" description="Solfej, a music theory and ear training, app's blog">
            <PhotoHero>
                <BlogHero alt="musician girl reading blog posts" />
            </PhotoHero>

            <Section title="Featured Stories" h1Header>
                <BlogPostsContainer>
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
                    <BlogPostThumbnail
                        {...blogData3}
                        authorImage={<ShayanJavadi />}
                        image={<BlogPostHeroThree />}
                    />
                    <BlogPostThumbnail
                        {...blogData2}
                        authorImage={<ShayanJavadi />}
                        image={<BlogPostHeroTwo />}
                    />
                    <BlogPostThumbnail
                        {...blogData1}
                        authorImage={<ShayanJavadi />}
                        image={<BlogPostHeroOne />}
                    />
                    <BlogPostThumbnail
                        title="How I went from 0 to 400+ beta sign ups in 3 days"
                        description="Coming Soon! Subscribe to the Newsletter to be notified."
                        authorName="Shayan Javadi"
                        timeToRead=""
                        authorImage={<ShayanJavadi />}
                        image={<TempThree />}
                        isUnavailable
                    />
                    <BlogPostThumbnail
                        title="10 amazing tools to help you get your MVP out the door faster"
                        description="Coming Soon! Subscribe to the Newsletter to be notified."
                        authorName="Shayan Javadi"
                        timeToRead=""
                        authorImage={<ShayanJavadi />}
                        image={<TempTwo />}
                        isUnavailable
                    />

                </BlogPostsContainer>
            </Section>
            <CenteredGraySection>
                <h2>Get our latest stories</h2>
                <div className="image-container">
                    <MailingListImage />
                </div>
                <a href="https://mailchi.mp/a64190eaf494/solfej-newsletter">
                    <button className="cta-button primary">Join the Newsletter</button>
                </a>
            </CenteredGraySection>
        </Layout>
    )
}
