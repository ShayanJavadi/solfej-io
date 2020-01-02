import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/dont-give-up-on-music-theory/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import One from "../../components/blogImages/dont-give-up-on-music-theory/One";
import Two from "../../components/blogImages/dont-give-up-on-music-theory/Two";
import Three from "../../components/blogImages/dont-give-up-on-music-theory/Three";
import Four from "../../components/blogImages/dont-give-up-on-music-theory/Four";
import Five from "../../components/blogImages/dont-give-up-on-music-theory/Five";
// import Six from "../../components/blogImages/dont-give-up-on-music-theory/Six";
// import Seven from "../../components/blogImages/dont-give-up-on-music-theory/Seven";

import ImageContainer from '../../components/ImageContainer/index';
import Author from '../../components/Author';
import JP from '../../components/JP';

export const blogData = {
    title: "Is Music Theory Hard?",
    description: "Why learning music theory is worth it",
    authorName: "JP Hwang",
    date: "Dec 23",
    timeToRead: "10 min",
    route: "dont-give-up-on-music-theory",
    image: "/images/blog-post-hero-5.png",
    seoTitle: "Is Learning Music Theory Worth it? Why should you bother learning music theory?",
    authorImage: <JP />
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <p><i>This is a guest post by JP Hwang - JP is a recently reformed patent attorney who has given up his fancy suits and office in Sydney, Australia for many pairs of shorts, a laptop and a suitcase in SE Asia. He calls himself an online ‘maker’ and would like to mean it himself one day. You can find his blog on <b><a href="https://medium.com/@_jphwang">Medium</a></b> or on twitter <b> <a href="https://twitter.com/_jphwang">@_jphwang</a></b>.</i></p>
            <h2>Is Music Theory Hard?</h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <One />
            </ImageContainer>
            <p>If you are reading this post, you and I probably share at least one significant gap in our knowledge base. There is a huge number of us who carry with us this same burden of ignorance. It relates to something so universal that it seems like it shouldn’t be that difficult. And yet, I’d wager that there are far more of us ignorants than those who are knowledgeable in this area. </p>
            <p>Being asked about it can also invoke a seemingly unreasonable amount of shame in us. Subsequent questions about whether we have tried learning it (or why we didn’t stick with it) might spark internal consternation in similar doses, if not higher.</p>
            <p>In this, we are forced to confront our history of having failed at something that seems like it should be second nature, given that we really seem to enjoy other aspects of it. Playing it, listening to it, and passionately following many creators of this beautiful art form. </p>
            <p>“It”, is, of course, <b>music theory</b>.</p>
            <h2>Music theory seems hard (to me)</h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <Two />
            </ImageContainer>

            <p>When I say that I’m ignorant in music theory, I really mean it. I have no domain expertise at all in music theory, or even just music. But like most of us, I do appreciate it very much. I’ve even tried to learn to play an instrument or two before (who hasn’t?!). I didn’t get very far, but could play a few songs here and there. </p>
            <p>I’ve received and read some advice on how to best learn to play the guitar or the piano, but not many people advised me to learn music theory. The few times that I did come across such advice, <b>I found the accompanying material so unfriendly and difficult that it put me into a state of bewilderment</b>. So much so that I was borderline convinced it was designed by a guild of musicians trying to keep new people from entering their field. </p>
            <p>All this is to say that music theory and I haven’t been the best of friends; and it never seemed to me that we would be anything more than aware of each other’s existence. I guess it is easy to get frustrated when we do not make visible progress at learning anything, especially as adults. </p>
            <h2>Music Theory IS Hard</h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <Three />
            </ImageContainer>

            <p>Does this seem familiar? I don’t know about you specifically of course, and won’t be so presumptuous to assume that you have found it as difficult as I have. It would be a lot to assume for sure. But my Internet searches suggest that it is certainly very common to feel this way. A casual browse through Reddit, Quora or any number of other forums throw up statements like these from people looking for help:</p>
            <ul>
                <li>“Why is music theory so hard to learn?”</li>
                <li>“I tried to learn music theory 6 (six) times and quit in frustration every time.”</li>
                <li>"I feel like my brain is not wired to understand music theory.”</li>
                <li>“I’m 48. Music theory bullied me since I was seven and has just now run away with my fiancé in my retirement savings.” (Okay, this one I just made up.)</li>
            </ul>
            <p>Some of these quotes or similar come from musicians of varying experience levels, not just beginners or the uninitiated like myself.</p>
            <p>We even found a Ph.D. thesis from 2018 written specifically about improving student performance in music theory classes for students in undergraduate music programs, because too many of the students found it too difficult. Really. </p>
            <p>Learning music theory is indeed difficult for many of us. But you didn’t need me to tell you that. You knew that already. </p>
            <h2>But It Doesn’t Have To Be </h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <Four />
            </ImageContainer>

            <p>What we really wanted to tell you, and something that is also confirmed by many other people’s experiences is this: <b>learning music theory is not impossible; far from it</b>. </p>
            <p>Many of the above questions about the difficulty of learning music theory end up with answers, or happy endings. In some cases, people talk about their own experiences of struggling with music theory but ultimately prevailing, and in others people are led to a series of useful resources or tips. </p>
            <p>Those who have made it through are also passionate about the benefits of understanding music theory. They talk glowingly about the positive impact that it’s had on their performances, improvisation, learning new pieces and communicating or collaborating with others. Not many of them would say that it was not worth it.</p>
            <p>In most cases, the stories of success in effective music theory learning stress the importance of finding the right ways to learn, that work for you.</p>
            <h2>The Right Tools To Learn Music Theory</h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <Five />
            </ImageContainer>

            <p>It is said to be the very definition of insanity to try the exact same thing and expect a different result. Learning music theory is no different. It is well documented that people learn in different ways to each other. If a particular method of learning music theory doesn’t work for somebody, there’s little to no point in continuing to try the same method over and over again. </p>
            <p>By finding the right tools for you and your music goals, we think that the right results will follow more likely than not. </p>
            <p>Here at Solfej, we don’t pretend to be the one music theory learning tool for everybody. That would be great, but unlikely. Everyone is different. But we do think that we can be the right tool for some - hopefully many - of you. <a href="https://shayanjavadi.typeform.com/to/wO59zz"><b> So give us a go!</b></a> And it’s ok if we are not your thing. Hopefully trying us out help you to figure out what works and doesn’t work for you. It’s all a part of the journey. </p>
            <p>It can be done, it has been done by many of us, and trust the process by finding the right help.</p>
            <p><b>Don’t give up on music theory. 🎸🎹🎷❤️</b></p>
        </BlogPostLayout>
    )
}
