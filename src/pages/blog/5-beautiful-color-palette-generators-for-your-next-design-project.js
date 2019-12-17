import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import One from "../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/CoolorsImage";
import Two from "../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/ColorHuntImage";
import Three from "../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/HappyHuesImage";
import Four from "../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/CulrsImage";
import Five from "../../components/blogImages/5-beautiful-color-palette-generators-for-your-next-design-project/LOLColorsImage";

import ImageContainer from '../../components/ImageContainer/index';

export const blogData = {
    title: "5 Beautiful color palette tools for your next design project",
    description: "Color palette generators/tools",
    authorName: "Shayan Javadi",
    date: "Dec 17",
    timeToRead: "7 min",
    route: "5-beautiful-color-palette-generators-for-your-next-design-project",
    image: "/images/blog-post-hero-3.png"
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <h1>{title}</h1>
            <p>Hi everybody Shayan here. I’m the solo founder/developer of Solfej a music theory and ear training app <a href="https://shayanjavadi.typeform.com/to/wO59zz">(click here to join the 700+ people signed up to try the app 😉)</a>.</p>
            <p>Raise your hand if you’ve spent  an unreasonable amount of time picking a color palette ✋😄</p>
            <p>I'm primarily a visual person, and to no one's surprise color and design are important to me. I can also be a perfectionist when it comes to design. This is especially true if it’s for a project that I’m passionate about like Solfej.</p>
            <p>I started working on Solfej to combine my two passions, music and engineering, to create an intuitive app for people trying to learn music theory. </p>

            <h2>The List</h2>
            <p>Here are 5 tools that helped me pick my color palette for Solfej 👇</p>
            <h2><a href="https://coolors.co/">Coolors</a> by <a href="https://twitter.com/_fbrz">@_fbrz</a></h2>
            <ImageContainer>
                <One />
            </ImageContainer>
            <p>Coolors is my personal favorite color palette generator out of all the ones listed here. You can have it generate entire color palettes for you from scratch.</p>
            <p>The thing that makes it my favorite is your ability to lock colors and adjust them in the palettes. Only downside for me is that the website is not as mobile friendly as I’d like it to be (they do have an iOS app though).</p>
            <p>I used Coolors to come up with the three lesson category colors for Solfej (<b style={{ color: "#FFB5B5" }}>ear training</b>, <b style={{ color: "#407088" }}>music theory</b>, <b style={{ color: "#FFB902" }}>rhythm</b>).</p>
            <h2><a href="https://colorhunt.co/">Color Hunt</a> by <a href="https://twitter.com/thegalshir">@thegalshir</a></h2>
            <ImageContainer>
                <Two />
            </ImageContainer>

            <p>Color Hunt is as they put it Color Hunt is “a free and open platform for color inspiration with thousands of trendy hand-picked color palettes”</p>
            <p>It's like Dribbble but for color palettes exclusively. The color palettes are so gorgeous they almost make you want to make something just so you can use the palettes.</p>
            <h2><a href="https://www.happyhues.co/">Happy Hues</a> by <a href="https://twitter.com/mackenziechild">@mackenziechild</a></h2>
            <ImageContainer>
                <Three />
            </ImageContainer>

            <p>Happy Hues is a tool that I can’t believe wasn’t a thing up until its release recently. In a nutshell it let’s you see what the color palettes will look like in an actual website. It's a great twist on the color palette curated list type app.</p>
            <p>Super helpful! The entire experience is beautifully designed. The logo is super cute too.</p>
            <h2><a href="https://culrs.com/">Culrs</a> by <a href="https://twitter.com/mshra_ji">@mshra_ji</a> & <a href="https://twitter.com/iamarnob6543">@iamarnob6543</a></h2>
            <ImageContainer>
                <Four />
            </ImageContainer>

            <p>Culrs is another list of curated palettes (beautiful ones!). The palettes are separated into categories based on the types of color schemes.</p>
            <p>I love that besides color palettes Culrs includes some knowledge regarding the different types of color schemes. I had no idea what a tetradic colid scheme meant before this.</p>
            <h2><a href="https://www.webdesignrankings.com/resources/lolcolors/">LOL Colors</a></h2>
            <ImageContainer>
                <Five />
            </ImageContainer>

            <p>Last but not least is LOL colors. LOL colors is another a curated list of palettes. They've got a ton of beautiful palettes for you to get inspired by.</p>
            <p>The thing that caught my eye with them was their logo. One of the more creative logos I’ve seen.</p>
            <p>👋Thanks for reading! Make sure to <b> <a href="https://shayanjavadi.typeform.com/to/wO59zz">sign up for the Solfej beta</a></b> if you're interested in learning music theory and training your ears.</p>


        </BlogPostLayout>
    )
}
