
import React from 'react';
import "./BlogPostLayout.scss";
import Layout from '../../components/layout';
import CenteredGraySection from '../../components/CenteredGraySection/index';
import MailingListImage from '../../components/MailingListImage';
import FacebookIcon from "../../images/facebook.svg"
import TwitterIcon from "../../images/twitter.svg";
import Author from '../Author';

export default function BlogPostLayout(props) {
    const { blogData: { title, description, image, seoTitle, route, ...author }, hero = () => null, } = props;

    return (
        <Layout {...{ title: seoTitle, description, image }} className="blog-post-layout">
           {hero} 
           <div className="content-container">
               <div className="content">
                    <h1>{title}</h1>
                    <div className="author-social-container">
                        <Author 
                            {...author}
                        />
                        <div className="social-links">

                            <a href={`https://twitter.com/intent/tweet/?text=Check this out&url=https://www.solfej.io/blog/${route}`}>
                                <img src={TwitterIcon} alt="twitter share" width="1.5rem" />
                            </a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.solfej.io/blog/${route}`}>
                                <img src={FacebookIcon} alt="facebook share" width="1.5rem" />
                            </a>
         
                        </div>
                    </div>
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