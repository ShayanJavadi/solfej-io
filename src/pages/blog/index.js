import React from 'react'
import Layout from '../../components/layout'
import PhotoHero from '../../components/PhotoHero'
import BlogHero from '../../components/BlogHeroImage'
import Section from '../../components/Section/index'
import BlogPostThumbnail from '../../components/BlogPostThumbnail/index'
import ShayanJavadi from '../../components/ShayanJavadi'
import BlogPostHeroOne from '../../components/BlogPostHeroOne'
import CenteredGraySection from '../../components/CenteredGraySection/index'
import BlogPostsContainer from "../../components/BlogPostsContainer";
import MailingListImage from '../../components/MailingListImage'
import TempOne from '../../components/Temp1'
import TempTwo from '../../components/Temp2'
import TempThree from '../../components/Temp3'

import { blogData } from "../blog/what's-new-in-solfej-v-1.3"

export default function tos() {
    return (
        <Layout title="Blog">
            <PhotoHero>
                <BlogHero alt="musician girl reading blog posts" />
            </PhotoHero>
            <Section title="Featured Stories">
                <BlogPostsContainer>
                    <BlogPostThumbnail
                        {...blogData}
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
                    <BlogPostThumbnail
                        title="Does music theory hinder your creativity?"
                        description="Coming Soon! Subscribe to the Newsletter to be notified."
                        authorName="Shayan Javadi"
                        timeToRead=""
                        authorImage={<ShayanJavadi />}
                        image={<TempOne />}
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
