import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/what's-new-in-solfej-v-1.3/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import Image0 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image0";
import Image1 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image1";
import Image2 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image2";
import Image3 from "../../components/blogImages/what's-new-in-solfej-v-1.3/Image3";
import ImageContainer from '../../components/ImageContainer/index';

export const blogData = {
    title: "What's new in Solfej v1.3",
    description: "Revised lessons, interactive music theory examples, many squashed bugs.",
    authorName: "Shayan Javadi",
    date: "Dec 2",
    timeToRead: "4 min",
    route: "what's-new-in-solfej-v-1.3",
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <h1>{title}</h1>
            <p>Solfej version 1.3.0 is out today 🎉!</p>
            <p>Version 1.3.0 is changes based on the beta users feedback (Thank you to everyone who tried the app and gave feedback ❤️. Doubly thank you if it was on <a href="https://solfej.canny.io/solfej-user-forums">Canny.io</a> ).</p>
            <p> This version includes interactive lesson examples, revised lessons, 3 brand new lessons, couple of bug fixes, and many general improvements. Read on for the full details!</p>
            <a href="https://shayanjavadi.typeform.com/to/wO59zz"><p>Make sure to sign up for early access if you haven't already!</p></a>

            <h2>Interactive Lesson Examples</h2>
            <p>Interactive music theory lessons was one of the most requested features. I've added audible examples to almost every music theory lesson.</p>
            <p>On top of that I've also added an interactive piano roll to some of the lessons. This is to help visualize the concepts.</p>
            <ImageContainer two>
                <Image0 />
                <Image3 />
            </ImageContainer>              
            <h2>Revised Lessons</h2>
            <p>As most of you noticed the lesson plan (specially the music theory) was at a primal stage. The new update aims to fix that.</p>
            <p>I've fixed spelling and grammar issues for each lesson. Some of the lessons included inaccuracies. Those are fixed as well.</p>
            <p>I've also moved around some of the lessons. This is to ensure that the lesson paths makes sense, and concepts are introduced in the right order.</p>
            <p>P.S. feel free to drop me a line if you see any issues with the text!</p>
            <h2>New Lessons</h2>
            <p>There's 3 brand new music theory lessons!</p>
            <p>One titled "Sharps & Flats" the other 2 "Turning Music Theory Into Music", and "The Major Scale".</p>
            <p>Make sure to check them out!</p>
            <ImageContainer>
                <Image1 />
            </ImageContainer>              
            <h2>Push Notifications</h2>
            <p>You now have the power to allow us to send you helpful reminders! You will get a prompt once you open the app after updating.</p>
            <ImageContainer>
                <Image2 />
            </ImageContainer>              
            <h2>Bug Fixes</h2>
            <ul>
                <li><a href="https://solfej.canny.io/admin/board/solfej-user-forums/p/login-bug">Fixed issue where app would get stuck after Google sign in failed.</a></li>
                <li><a href="https://solfej.canny.io/admin/board/solfej-user-forums/p/google-login-issue">Fixed Google sign in calling the app "App" instead of Solfej </a></li>
                <li><a href="https://solfej.canny.io/admin/board/solfej-user-forums/p/sounds-issue">Fixed issues regarding audio, and audio not playing. Additionally added a pop up to make sure users can hear the played audio.</a></li>
                <li>Lot's of stuff under the hood.</li>
            </ul>

        </BlogPostLayout>
    )
}
