import React from 'react';
import Hero from "../../components/blogImages/how-to-learn-music-theory/Hero";
import BlogPostLayout from '../../components/BlogPostLayout';
import ShayanJavadi from '../../components/ShayanJavadi';

export const blogData = {
    title: "How To Learn Music Theory",
    description: "How To Learn Music Theory",
    authorName: "Shayan Javadi",
    date: "Feb 22",
    timeToRead: "10 min",
    route: "how-to-learn-music-theory",
    image: "/images/blog-post-hero-8.png",
    seoTitle: "How To Learn Music Theory. Common questions answered.",
    authorImage: <ShayanJavadi />
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <p>Music theory is a word that comes with a lot of baggage for a lot of people. Music theory can be a scary subject whether you’re a student in music school, or just casually learning music theory.</p>
            <p>As a self taught guitarist of 6 years I’ve put my fair share of blood, sweat, and tears into music theory. I’ve spent countless nights banging my head against the wall trying to understand modes, circle of fifths, and basically every other building block of music theory.</p>
            <p>It didn’t come easy to me. However, it doesn’t have to be that way. As a matter of fact, music theory can be quite satisfying to learn! Most of the negative attitude towards music theory seems to be coming from either a frustration with the academic setting that it is taught in, or the lack of resources with clarity.</p>
            <p>With that said, regardless of your experience with music theory here is a list of guidances to help light your path through gaining theory knowledge.</p>
            <h2>How do I start learning music theory?</h2>
            <p>From the beginning! It sounds funny, but a foundation in the building blocks of music theory is the most important factor for starting to learn more advanced subjects.</p>
            <p>Start with the notes that we have available for us, and build your way up to intervals, chords, melody, harmony, rhythm, and so on.</p>
            <p>Once you have a good idea of the fundamentals, you can switch gears and start learning what’s practical for you. Want to play in a jazz setting? Start learning about extended chords, and jazz cadences. Want to rock out with some power chords? Start transcribing the great rock songs and analyze their chord progressions.</p>
            <p>What you want to avoid happening is skipping the fundamentals. I can’t stress how important it is to know why and how the basic atoms of music theory work.</p>
            <h2>How long does it take to learn music theory?</h2>
            <p>You’ll never be “done” learning music theory. There will always be new things to learn. That being said, if you truly spend the time and learn the fundamentals of music theory, you can easily start using them in a matter of weeks!</p>
            <p>In this case, practice is key. According to people much smarter than me, you need around ~60 repetitions of some task for it to become intuition. So make sure to get lots of practice time with music theory concepts until you internalize them.</p>
            <p>The best thing you can do for your learning is to immerse yourself into music theory. Other than flat out learning the theory, I’d recommend seeking out music theory youtube channels (Adam Neely, Jens Larsen, 12 tone, etc), and of course applying the theory you learn. This could be as simple as making a small 3-4 note melody using a new concept you learned.</p>
            <h2>Is music theory necessary for guitar? Is music theory necessary to play the piano? Will I literally not be able to make music without the theory?</h2>
            <p>No!</p>
            <p>Music theory is not necessary to play any instrument. There are amazing artists out there who know little or no music theory at all!</p>
            <p>Does it help? Absolutely. Knowing music theory can do wonders for your playing. It’ll make navigating your instrument much easier, and help you translate your ideas from your head to your instrument with ease.</p>
            <p>Your instrument however, does not care whether you know theory or not. And that’s the beauty of it. Even when you learn theory you will inevitably play something that you can’t analyze. And that’s fine! It’s more important that the music you play sounds good to your ear rather than whether or not it follows theory.</p>
            <h2>Can you learn music theory on your own? How do I teach myself music theory?</h2>
            <p>You absolutely can! There’s a plethora of resources available both online and offline to learn music theory.</p>
            <p>In the age of YouTube, there’s not much left you can’t learn on your own. It’s going to be hard keeping yourself accountable. However, if you’re motivated and keep at it there’s nothing stopping you from mastering music theory.</p>
            <p>With that said, a music theory teacher or even going to music school can also be impactful in your learning. </p>
            <p>I’d recommend the <a href="https://www.youtube.com/watch?v=rgaTLrZGlk0">following video by Andrew Huang </a> to get started with music theory.</p>
            <h2>Do you need music theory to make music? Do you need music theory to produce music?</h2>
            <p>You don’t! There’s so many musicians and producers out there making and producing great music. Your fingers, instruments, and especially your computer do not care whether or not you know any music theory and will make sound regardless.</p>
            <p>Music theory will especially help you out if you’re a producer. It can make communicating ideas much easier as you have a common language with other musicians.</p>
            <h2>Does music theory limit creativity? Will I lose all feel?</h2>
            <p>Let's get the elephant in the room out of the way.  Music theory is just that, a theory. It’s easy to fall into the belief that music theory will hurt your creativity. After all it’s a set of “rules” and naturally we don’t like rules and limitations. </p>
            <p>That being said looking at music theory as a set of “rules” can be counterproductive. It’s much more productive to look at music theory as a common language to communicate ideas rather than rules.</p>
            <p>They say rules are meant to be broken, and it applies here as well. I’d go as far as saying you SHOULD break music theory rules. If you think about it, what we call music theory today is the result of our ancestors breaking their rules for music theory and coming up with new ideas and motifs!</p>
            <p>I highly recommend experimenting with music theory. ask yourself as many “why?”, and “what if?” questions and don’t be afraid to break the rules.</p>
            <h2>Does music theory apply to all instruments?</h2>
            <p>Yes! That’s the beauty of theory. Your mechanical skills may be tied to your instrument but your knowledge of music theory is universal!</p>
            <p>Personally I’ve never sat down and practiced playing the piano, however I can find my way around the instrument using theory. For example I know a C chord is made up of the root, a major third, and a perfect fifth, so if I know where the C note is I can easily create a C chord.</p>
        </BlogPostLayout>
    )
}
