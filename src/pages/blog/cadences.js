import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/cadences/Hero";
import ShayanJavadi from '../../components/ShayanJavadi';
import One from "../../components/blogImages/cadences/One";

import Two from "../../components/blogImages/cadences/Two";
import Three from "../../components/blogImages/cadences/Three";
import Four from "../../components/blogImages/cadences/Four";


import ImageContainer from '../../components/ImageContainer/index';
import Alvin from '../../components/Alvin';


export const blogData = {
    title: "The Ultimate Guide To Cadences in Music Theory: The 4 types of Cadences With Examples",
    description: "Learn the 4 types of music theory cadences",
    authorName: "Alvin",
    date: "Dec 29",
    timeToRead: "8 min",
    route: "cadences",
    image: "/images/blog-post-hero-7.png",
    seoTitle: "The Ultimate Guide To Cadences in Music Theory: The 4 types of Cadences With Examples",
    authorImage: <Alvin />
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <p>One of the most important concepts in music theory is the concept of Cadences:</p>
            <p>Search up “Cadence” in the dictionary and you’ll find: “a sequence of notes or chords comprising the close of a musical phrase” </p>
            <p>But I look at it this way: Just like in a film, How does the director want to close off his movie? Does he want a perfect resolution, or does he want to end his film on a cliffhanger filled with questions?</p>
            <p>That is how I see Cadences: They’re your final intentions, your final sentence in a musical passage, your closing, your swan song if you will. </p>
            <p>Let’s begin our look on cadences with the most common of the bunch.</p>
            <h2>1. Authentic Cadence (V to I)</h2>
            <p>An Authentic cadence is one that goes from the V to I. Authentic cadences are the easiest way to establish a tonality. Authentic cadences are classified as <b>perfect</b> or <b>imperfect</b>. Here’s how perfect and imperfect cadences are different.</p>
            <ImageContainer fullWidth bottomMarginOnly>
                <One />
            </ImageContainer>
            <h3>Perfect Authentic Cadence</h3>
            <p>The most common cadence in all of music, the perfect (authentic) cadence sounds the most <b>“final”</b> of them all. This is the happy ending where your musical story is satisfied and resolved; no cliffhangers, and all questions answered. </p>
            <p>This cadence is accomplished when you go from the dominant V chord back to the tonic I in a major key or tonic minor in a minor key. It’s also important to note that these two chords are usually in root position.</p>
            <p>By utilizing the transition between these two chords during the end of your composition, or the end of a section within your composition, you can end your piece in a completely settled, completely at home, and at a completely satisfying stop. </p>
            <h3>Imperfect Authentic Cadence</h3>
            <p>At first glance, it’s hard to miss the slight difference between the perfect and imperfect cadences due to the fact that they both go from the dominant V chord to the respective Tonic I chord. The difference lies in the irregular stacking of the chords.</p>
            <p>By this I mean that your <b>usual V and I chord are inverted </b> so that the tonic notes are in different registers. In this way, you’re actually ending on the highest voice of a chord instead of your usual tonic.</p>
            <p>With the chords inverted, the imperfect cadence has a less settled resolution. Unlike the complete stop of a perfect cadence, there is room to continue after an imperfect cadence. This forward momentum can be fleshed out further and continue as long as the composer wants it, and this is why the imperfect cadence is hailed as a more “partial resolution”.</p>
            <h3>Examples of Authentic Cadence:</h3>
            <p>1. Adele - Someone Like You (first two chords of the chorus)</p>
            <ImageContainer bottomMarginOnly>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hLQl3WQQoQ0?start=72" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ImageContainer>
            <p>2. Bruno Mars - When I Was Your Man (intro)</p>
            <ImageContainer bottomMarginOnly>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ekzHIouo8Q4?start=11" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ImageContainer>

            <h2>2. Plagal Cadence (IV to I)</h2>

            <ImageContainer fullWidth bottomMarginOnly>
                <Two />
            </ImageContainer>
            <p>Plagal Cadence is very similar to the perfect authentic cadence in its movement and resolution to the tonic. However, plagal cadence begins on a different chord.</p>
            <p>The plagal cadence moves from the IV(subdominant)  to the I (tonic) chord in major keys (iv-i in minor keys). Because of the start on the subdominant, plagal cadence sounds like a weaker version of the perfect cadence.</p>
            <p>Plagal cadence can also include different inversions of these target chords, giving the composer room for experimentation.</p>
            <h3>Examples of Plagal Cadence:</h3>
            <p>1. Abba - Mamma Mia ("Just (IV) one (I)"...)</p>
            <ImageContainer fullWidth bottomMarginOnly>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/unfzfe8f9NI?start=41" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </ImageContainer>

            <h2>3. Half Cadence (I to V)</h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <Three />
            </ImageContainer>
            <p>The half cadence strays from the previous three cadences. While the former three end on the tonic chord of a key, the half cadence ends on the V. Because the V chord has the strongest pull to the I chord, ending a piece of music on the V chord will sound like a temporary pause.</p>
            <p>Back to my allusion to film earlier, the half cadence is synonymous to a director ending his film with a very big cliffhanger. </p>
            <p>Another cool thing about the half cadence is it’s versatility. What I mean is that you can go to the V chord from any other chord in the key as long as it ends on the dominant. (I- V, ii-V etc)</p>
            <p>Ear Plugins is another super helpful app for producers. It lives right in your DAW. It helps you recognize specific frequency which comes in very handy while mixing.</p>
            <h3>Examples of Half Cadence:</h3>
            <p>1. 3 Doors Down - Be Like That (intro)</p>
            <ImageContainer fullWidth bottomMarginOnly>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HHpMtWtgUvc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ImageContainer>   
            <h2>4. Deceptive Cadence (V to vi)</h2>
            <ImageContainer fullWidth bottomMarginOnly>
                <Four />
            </ImageContainer>
            <p>Often called an interrupted cadence, a deceptive cadence is a cadence from V to vi. The deceptive cadence is considered weak due to the suspending feeling it evokes.</p>
            <p>As the name suggests this cadence is “deceptive” since the V resolves nicely to the I as we learned. The deceptive cadence flips that on its head and leaves the listener hanging on a vi chord.</p>
            <p>1. The Beatles - P.S. I Love You ("P. S. I love you, you, you, you." part)</p>
            <ImageContainer fullWidth bottomMarginOnly>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MA5DkiVKSlM?start=22" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ImageContainer>
            <h2>Wrap Up</h2>
            <p>Cadences are a way to close off your final thoughts in a piece of music. How you want to finish your piece is up to you, and each ending produces a specific effect.</p>
            <p>Do you want your audience to leave settled and resolved? Do you want your audience to leave slightly resolved? Do you want your audience to leave uplifted? Or do you want your audience to leave with ambiguous thoughts which will have them thinking about your piece from time to come?</p>
            <p>Play around with these basic cadences and figure out the ones you like the most.</p>


        </BlogPostLayout>
    )
}
