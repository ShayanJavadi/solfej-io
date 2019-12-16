import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/is-betapage-worth-it/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import Image0 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image0";
import Image1 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image1";
import Image2 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image2";
import Image3 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image3";
import ImageContainer from '../../components/ImageContainer/index';

export const blogData = {
    title: "Is Betapage Worth It?",
    description: "$100 price tag that may be worth it.",
    authorName: "Shayan Javadi",
    date: "Dec 15",
    timeToRead: "5 min",
    route: "is-betapage-worth-it",
    image: "/images/blog-post-hero-2.png"
}

export default () => {
    const { title } = blogData;





    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <h1>{title}</h1>
            <p>It’s been a couple of weeks since Solfej has started accepting early access beta users <a href="https://shayanjavadi.typeform.com/to/wO59zz">(click here to join the 700+ people signed up to try the app 😉)</a>.</p>
            <p>As a first time founder It’s also been the same amount of time since I’ve started seriously marketing the app. For a music theory app, the distribution channels haven’t exactly been obvious.</p>
            <p>This where <a href="https://betapage.co/">Betapage</a> comes in. Betapage is an aggregator for startups that are in beta/early access. To get your startup featured, you need to submit it to betapage and wait around a month for it to get featured. Alternatively you could also pay a pretty penny and skip the wait.</p>
            
            <h2>The Numbers</h2>
            <p>I paid $119 for Solfej to be featured on Betapage for a total of 2 days. Here’s the breakdown of what I got (shamelessly copying this format from Pine.io <a href="https://pine.io/blog/should-i-publish-to-betalist/">go check out their blog post on Betalist</a>)</p>
            <ul>
                <li>👥430 unique visitors</li>
                <li>🙋120 signups</li>
                <li>💰$119</li>
            </ul>
            <p>That comes down to around $1 per sign up. That’s pretty damn good!</p> 
            <p>To compare, here are the average CPCs (cost per clicks) for popular ad networks:</p>
            <ul>
                <li>Google Ads: ~$2.00</li>
                <li>Facebook Ads: ~$1.86</li>
                <li>Instagram Ads: ~$.80</li>
            </ul>
            <h2>So Is Betapage Worth It?</h2>
            <p>I’ve committed to getting as much user feedback as possible on my music theory app. Betapage helped me do just that at a pretty reasonable price point.</p>
            <p>I ended up receiving lots of great detailed feedback from the users that came from Betapage. My assumption is that people that frequent Betapage are more likely to share feedback with you.</p>
            <p>I also received a couple of very sweet emails from folks telling me how they’re excited for the app and how they’ve been struggling with traditional ways of learning music theory and they see Solfej helping them get over that hurdle.</p>
            <p>What really surprised me is the number of people that would be interested in a ear training/music theory app that would also be on Betapage, but that’s besides the point of this post.</p>
            <h2>The Bottom Line</h2>
            <p>Bottom line is that Betapage helped me get Solfej in front of a lot of eyes for a pretty reasonable price. 120 sign ups may not seem like a lot, but it really is when you put it in the perspective of a newly launched product made by one person (me).</p>
            <p>
                Obviously there's tons of free ways you can spread the word about your up and coming project, but if you can spare the ~$100 price point <b>I’d definitely recommend it</b>. 
            </p>
            <p>I also recommend taking a look at Betalist. It’s the same process as Betapage. Check out the blog page on <a href="https://pine.io/">Pine.io’s blog</a> if you want to see an anecdote for Betalist similar to this post.</p>
            <p>👋 <a href="https://shayanjavadi.typeform.com/to/wO59zz">Make sure to  sign up for the Solfej beta</a> if you're interested in learning music theory and training your ears.</p>
        </BlogPostLayout>
    )
}
