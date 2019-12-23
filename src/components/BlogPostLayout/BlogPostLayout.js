
import React from 'react';
import "./BlogPostLayout.scss";
import Layout from '../../components/layout';
import CenteredGraySection from '../../components/CenteredGraySection/index';
import MailingListImage from '../../components/MailingListImage';

export default function BlogPostLayout(props) {
    const { blogData: { title, description, image, seoTitle }, hero = () => null, } = props;

    return (
        <Layout {...{ title: seoTitle, description, image }} className="blog-post-layout">
           {hero}  
           <div className="content-container">
               <div className="content">
                    {props.children}
               </div>
           </div>
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