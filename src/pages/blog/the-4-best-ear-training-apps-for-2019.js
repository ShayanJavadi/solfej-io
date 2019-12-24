import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/the-4-best-ear-training-apps-for-2019/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import Two from "../../components/blogImages/the-4-best-ear-training-apps-for-2019/Two";
import Three from "../../components/blogImages/the-4-best-ear-training-apps-for-2019/Three";
import Four from "../../components/blogImages/the-4-best-ear-training-apps-for-2019/Four";


import ImageContainer from '../../components/ImageContainer/index';
import MockImageOne from '../../components/MockImageOne';
import MockImageThree from '../../components/MockImageThree';

export const blogData = {
    title: "Ear Training: The 4 Best Ear Training Apps For 2019",
    description: "The best apps to help train your ears",
    authorName: "Shayan Javadi",
    date: "Dec 24",
    timeToRead: "5 min",
    route: "the-4-best-ear-training-apps-for-2019",
    image: "/images/blog-post-hero-6.png",
    seoTitle: "Best ear training apps. What are the 4 best ear training apps?",
    authorImage: <ShayanJavadi />
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <p>Hi everybody Shayan here. I’m the solo founder/developer of Solfej a music theory and ear training app <a href="https://shayanjavadi.typeform.com/to/wO59zz">(click here to join the 900+ people signed up to try the app 😉)</a>.</p>
            <p>A musicians ears are their most important tool. Some are lucky to be born with perfect pitch. The other 99% of us have to work hard to train our ears.</p>
            <p>Guitarists, pianists, producers, DJs, violinists, singers and rappers can all find ear training useful. Anyone writing songs, improvising, or even composing poems can benefit from training their ears.</p>
            <p>The only problem is that ear training is hard! Luckily for us we live in the age of technology.</p>
            <p>In this post we’ll go over the top 4 ways to learn ear training in 2019.</p>
            <h2>What Is Ear Training</h2>
            <p>Ear training is the process of identifying musical concepts (notes, chords, scales, etc) solely by our ear. Ear training is the bridge that connects our brain to the mystical world of music theory.</p>
            <p>With enough practice ear training can become second nature. Think of how easy it is for you recognize words in your language.</p>
            <h2>Why should I learn ear training?</h2>
            <p>The number one benefit of ear training is the ability to easily translate the sounds in your head to your instrument of choice.</p>
            <p>Ear training can also help you sing in tune, and improvise better.</p>
            <p>Ear training may also help you communicate easier with other musicians.</p>
            <p>The easiest way to learn ear training is through technology.</p>
            <p>Here are the 4 best ear training apps for 2019 👇</p>
            <h2>1. <a href="https://www.solfej.io/">Solfej</a></h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <MockImageOne />   
                <MockImageThree />
            </ImageContainer>
            <p>Solfej is the best new app to learn ear training and music theory. Solfej is available on iOS, Android, and web!</p>
            <p>Solfej includes over 10+ ear training lesson modules ranging from interval identifications to chord identifications.  New ear training lessons are added every month.</p>
            <p>Solfej also offers music theory and rhythm lessons.</p>
            <h2>Your Favorite DAW (Ableton, Logic, Reaper, etc)</h2>
            <ImageContainer>
                <Two />
            </ImageContainer>

            <p>This sounds like a joke, but bare with me here. One of the best things you can do for your ear is to transcribe music. Bonus points if the music you’re transcribing is one that you love.</p>
            <p>Here’s where the DAW comes in. download your song of choice, and load it up on your favorite DAW. Once you have it there select small parts of the song (as small as 2-4 beats) put it on a loop and try to transcribe the looped part by ear.</p>
            <p>It sounds simpler than it is, it might even seem impossible at first. A tip I’d give is to lower the song’s speed by 50% or so that way you have a lot of time to hear each note!</p>
            <h2><a href="https://www.soundgym.co/site/index">Sound Gym</a></h2>
            <ImageContainer>
                <Three />
            </ImageContainer>

            <p>Sound gym is an app targeting producers/audio engineers. In their words it helps you improve core listening skills like frequency detecting, and compression.</p>
            <h2><a href="http://www.earplugins.eu/">Ear Plugins</a></h2>
            <ImageContainer>
                <Four />
            </ImageContainer>

            <p>Ear Plugins is another super helpful app for producers. It lives right in your DAW. It helps you recognize specific frequency which comes in very handy while mixing.</p>
            <p>👋Thanks for reading! Make sure to <b> <a href="https://shayanjavadi.typeform.com/to/wO59zz">sign up for the Solfej beta</a></b> if you're interested in learning music theory and training your ears.</p>

        </BlogPostLayout>
    )
}
