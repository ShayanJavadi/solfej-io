import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import One from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/One";
import Two from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Two";
import Three from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Three";
import Four from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Four";
import Five from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Five";
import Six from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Six";
import Seven from "../../components/blogImages/5-reasons-why-you-should-learn-music-theory/Seven";

import ImageContainer from '../../components/ImageContainer/index';

export const blogData = {
    title: "7 Reasons Why You Should Learn Music Theory",
    description: "Does music theory hinder your creativity?",
    authorName: "Alvin",
    date: "Dec 21",
    timeToRead: "6 min",
    route: "7-reasons-why-you-should-learn-music-theory",
    image: "/images/blog-post-hero-4.png",
    seoTitle: "Do you need music theory? Does music theory hinder my creativity? Find out 7 reason why you need theory."
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <h1>{title}</h1>
            <p>Believe me, I get it. I didn’t think that being able to build and name complex chords, to find relationships between scales and chords, and to work in weird time signatures would help me as a musician at all.</p>
            <p>But because of Music Theory, my creative abilities have never felt more under my control. Improvisation feels limitless. Songwriting possibilities are endless. Letting loose has never felt as comfortable. I even made a <a href="https://www.solfej.io/">music theory app 🎵</a>!</p>
            <p>I’m afraid that I’ve made the mistake of underestimating music theory in the past, but because of that, I won’t let my fellow musicians in Strats make the same one. Let me help you see theory as the ultimate hack to total creative control.</p>
            <p>Here’s why 👇</p>
            <h2>1. Music Theory Will Make You A Better Musician</h2>
            <ImageContainer bottomMarginOnly>
                <One />
            </ImageContainer>

            <p>You can be a good musician without music theory, you can even be an amazing one. However, with music theory, you start to understand all the moving parts of music</p>
            <p>Understanding the theoretical reasons why things sound good together will do magic for your playing. Even with just a bit of music theory knowledge, you can express your ideas and feelings much easier.</p>
            <h2>2. Music Theory Helps You Communicate With Other Musicians</h2>
            <ImageContainer bottomMarginOnly fullWidth>
                <Two />
            </ImageContainer>
            <p>Music theory is the common language between you and everyone else that knows it. Imagine explaining the color red to your friend without using the word red.</p>
            <p>Once you attach names to musical concepts and organize them in groups, you can convey your musical ideas to other musicians with ease. “Go two frets up and play the weird sounding chord again” becomes “Play the B diminished chord again”.</p>
            <h2>3. Music Theory Will Develop Your Ear</h2>
            <ImageContainer bottomMarginOnly fullWidth>
                <Three />
            </ImageContainer>
            <p>Music theory will help you translate the sounds you hear in your head onto your instrument.</p>
            <p>Your ear will be so exposed to so many different sounds that music will quickly become second nature through disciplined focus.</p>
            <p>Sooner than later you won’t be searching up tabs to learn a song, you’ll just be able to hum the tune and play it then and there.</p>
            <h2>4. Music Theory Teaches You The Rules So You Can Break Them</h2>
            <ImageContainer bottomMarginOnly fullWidth>
                <Four />
            </ImageContainer>
            <p>Music theory is just that, a theory. It's a set of rules and classifications. Musicians who learn music theory are NOT required to commit to an oath to never step outside the rules.</p>
            <p>In fact they are the ones breaking the rules and stepping out the most. After all how can you break the rules if you don't know what the rules are in the first place.</p>
            <h2>5. Music Theory Will Improve Your Improvisational Abilities</h2>
            <ImageContainer bottomMarginOnly fullWidth>
                <Five />
            </ImageContainer>

            <p>With your developed ear and knowledge of chords and scales, you’ll be able to enter an academic confidence while you’re improvising.</p>
            <p>You'll know what notes sound "good" over what chords, and what series of chords invoke the certain emotion you're looking for.</p>
            <h2>6. Music Theory Helps You Navigate Your Instrument</h2>
            <ImageContainer bottomMarginOnly fullWidth>
                <Six />
            </ImageContainer>

            <p>It’s easy to fall into a trance and lose your place in your instrument while you’re playing up on stage or even at home. Beginners definitely know what I’m talking about.</p>
            <p>Using a guitarist example, What happens when you accidentally move your hands from your familiar A minor pentatonic box and don’t know how to recreate the same scale somewhere else? You’ll play an Cb minor pentatonic scale by mistake and sound pretty bad.</p>
            <p>But if you knew how to build a scale or chord, you would be able to stay in key anywhere on your instrument.</p>
            <h2>7. Music Theory Will Give You More Opportunities To Get Creative</h2>
            <ImageContainer bottomMarginOnly fullWidth>
                <Seven />
            </ImageContainer>
            <p>It’s easy to get lost in basic pentatonic shapes if you’re a guitarist, but knowing one or two scales and chords on any instrument will grow boring in a flash.</p>
            <p>While studying theory, you’ll be exposed to so many musical possibilities. You won’t even know where to begin to choose what you want to play.</p>
            <h2>Conclusion</h2>
            <p>Learning music theory will not hinder your improvisation or diminish your “feel”.</p>     
            <p>Instead it will provide limitless ways to exercise your improvisation and “feel” abilities with new chords, new scales, and new riffs.</p>
            <p>If you're ready to dive into music theory and train your ears<b> <a href="https://shayanjavadi.typeform.com/to/wO59zz">sign up for the Solfej beta</a></b></p>
        </BlogPostLayout>
    )
}
