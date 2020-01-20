import React from 'react';
import Hero from "../../components/blogImages/how-to-find-new-music/Hero";
import BlogPostLayout from '../../components/BlogPostLayout';
import Henry from '../../components/Henry';

export const blogData = {
    title: "How To Find New Music",
    description: "How To Find New Music",
    authorName: "Henry Garrett",
    date: "Jan 20",
    timeToRead: "10 min",
    route: "how-to-find-new-music",
    image: "/images/album-daily.png",
    seoTitle: "How to find new and old music.",
    authorImage: <Henry />
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <p><i>This is a guest post by Henry Garrett - Henry is a software engineer by day (and sometimes by night), and co-founder of <b><a href="https://albumdaily.com/?ref=Solfej">Album Daily Newsletter</a></b>. He has always been fascinated by the power of music. He calls himself a music ‘researcher’, someone who constantly is looking for his next favorite artist/song. You can find him on twitter <b> <a href="https://twitter.com/garretthenrym">@garretthenrym </a></b> or through <b><a href="https://albumdaily.com/?ref=Solfej" rel="nofollow">Album Daily</a></b>.</i></p>
            <h2>Preface</h2>
            <p>I’m going to paint a picture for you, and let’s see if you have run into it before.  You listen to an artist you like on Spotify or Apple Music, let’s say Jack Johnson.  After listening, you want to find more music you like, so you try out their algorithm-based recommendations.  What does it recommend?  More Jack Johnson albums, and one, or if you’re lucky, 2-3, similar artists.  Great!  Somewhere to start, so you try some of them out.</p>
            <p>Now, every time you go back to that app, you get the same recommendations.  In the same genre.  From the same artists.  Over. And. Over. And. Over.</p>
            <p>Has this ever happened to you?  For me, it was a daily occurrence.  I got extremely frustrated by this.  Just because I like one genre doesn’t mean I only want to listen to that genre.  This led me to pursue other avenues to find music, and kickstarted a life-long hobby of music discovery.  So, I’m going to share with you a couple ways that I find music, in the hopes that it can help you find some new tunes.</p>
            <p>Before we get started, I need to define the two types of “new” music.  This is important, because while some of the discovery techniques overlap, they are largely different.  These categories are</p>
            <ul>
                <li>Newly released music</li>
                <li>Music that is new to me (or you!)</li>
            </ul>
            <h2>Newly Released Music</h2>
            <p>Let’s start with the easy one, newly released music.  The majority of the music industry follows a pretty rigid release schedule, with Friday as the designated weekly release day.  Up until July 2015, it used to be Tuesdays, but the industry heads got together and decided “New Music Friday” sounds way better (I don’t blame them).</p>
            <p>So how do you find albums that are scheduled to be released?  Well, you can follow your favorite artists or record labels on social media, as they are sure to be promoting their work.  However, I find it better to check in with <a href="https://consequenceofsound.net/upcoming-releases/" rel="nofollow">Consequence of Sound</a> as they aggregate the upcoming album releases extremely well.  This link is bookmarked in my browser, and I check it throughout the week to see what I can look forward to that Friday.</p>
            <h2>Music New to Me</h2>
            <p>Now on to the tough category, music that is new to me (or you!).  Here are some of the techniques I use, or places I look.</p>
            <h3>Reddit</h3>
            <p>I find Reddit vital for music discovery, due to the simple fact that it is other people sharing the music they like.  Chances are you won’t like every song someone recommends (I certainly don’t), but the more you explore and learn, the more you will find.  Here are a few of the best subreddits to find music:</p>
            <ul>
                <li><a href="https://www.reddit.com/r/Music/">r/Music</a></li>
                <li><a href="https://www.reddit.com/r/listentothis/">r/listentothis</a></li>
                <li><a href="https://www.reddit.com/r/LetsTalkMusic/">r/LetsTalkMusic</a></li>
            </ul>
            <h3>Ask Around</h3>
            <p>This one is probably the most obvious, but underutilized method in my opinion.  Without a doubt, some of the best music I have ever found was on a recommendation from a friend or family member.  For example, I never knew my father-in-law was into music, until I asked him, “What do you like to listen to?”.  He proceeded to share with me some of the lesser known musical acts from the ‘60’s and ‘70’s that have become some of my all-time favorites.  Without a doubt, there is no way I would have found those artists without striking up a conversation with him.</p>
            <h3>Music Streaming Apps</h3>
            <p>Yes, I know I was dogging on Spotify and Apple Music earlier, but they do have their place.  In order to utilize them effectively, you must understand how the algorithms work.  These algorithms filter based on many categories, but the most heavily weighted are <b>popularity, genre, and peer habits</b>. For example, if you are listening to Ed Sheeran, an algorithm would most likely recommend Taylor Swift, Shawn Mendes, or One Direction; not the 18-year-old British up-and-comer who sounds just like Sheeran.  This is a manifestation of popularity and genre bias, which can be great if that is what you are expecting. Usually, these algorithms will keep you in a comfort zone, which has its place for those of us who desire that.</p>
            <h2><a href="https://albumdaily.com/?ref=Solfej_Blog" rel="nofollow">Album Daily</a></h2>
            <p>Okay, I admit it, this is a shameless plug.  But I created <a href="https://albumdaily.com/?ref=Solfej_Blog" rel="nofollow">Album Daily</a> to tackle this exact issue of algorithmic music discovery.  If you decide to subscribe to one of our two newsletters, distributed daily or weekly, you will be introduced to many different genres and artists.  I, along with my wife and co-founder Paige, spend hours and hours combing through music to highlight what we believe our audience will love, from all areas of the music industry.</p>
            <p>Well there it is, some interesting ways to find newly released music, and music that is new to you.  I hope the tactics in this article will help you expand your musical tastes and find your new favorite songs.  Let me know on <a href="https://twitter.com/garretthenrym">Twitter</a> how you find new music! Happy listening ✌🏼</p>
            <p>Henry Garrett</p>
        </BlogPostLayout>
    )
}
