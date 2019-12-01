import React from 'react'
import Layout from '../../components/layout'
import PhotoHero from '../../components/PhotoHero'
import BlogHero from '../../components/BlogHeroImage'
import Section from '../../components/Section/index'
import BlogPostThumbnail from '../../components/BlogPostThumbnail/index'
import ShayanJavadi from '../../components/ShayanJavadi'
import BlogPostHeroOne from '../../components/BlogPostHeroOne'
import CenteredGraySection from '../../components/CenteredGraySection/index'
import BlogPostContainer from '../../components/BlogPostContainer/index'
import MailingListImage from '../../components/MailingListImage'
import TempOne from '../../components/Temp1'
import TempTwo from '../../components/Temp2'

export default function tos() {
    return (
        <Layout>
            <PhotoHero>
                <BlogHero alt="musician girl reading blog posts" />
            </PhotoHero>
            <Section title="Featured Stories">
                <BlogPostContainer>
                    <BlogPostThumbnail
                        title="How I got 450+ beta users in 3 days"
                        description="A compensation explanation else. Slept of when the a then one shoulders morning be and of volume."
                        authorName="Shayan Javadi"
                        date="Nov 30"
                        timeToRead="5 min"
                        authorImage={<ShayanJavadi />}
                        image={<BlogPostHeroOne />}
                    />
                    <BlogPostThumbnail
                        title="10 amazing tools to help you get your MVP out the door faster"
                        description="Into but would the subordinates of a quickly a rest someone gone thousand."
                        authorName="Shayan Javadi"
                        date="Nov 30"
                        timeToRead="7 min"
                        authorImage={<ShayanJavadi />}
                        image={<TempTwo />}

                    />
                    <BlogPostThumbnail
                        title="Does music theory hinder your creativty?"
                        description="Back aggressively and each the I parents be orthographic and may that he children why written expecting distribution."
                        authorName="Shayan Javadi"
                        date="Nov 30"
                        timeToRead="10 min"
                        authorImage={<ShayanJavadi />}
                        image={<TempOne />}

                    />
                </BlogPostContainer>
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
