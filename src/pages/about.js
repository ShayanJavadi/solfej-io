import React from 'react'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout title="About Solfej - Music Theory & Ear Training" description="Learn about Solfej, the music theory and ear training platform built to help musicians of all levels master chords, scales, and more.">
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
                <h1>About Solfej</h1>

                <p>
                    Solfej is a music theory and ear training platform built for musicians of all levels.
                    Whether you're a beginner learning your first chord or an advanced player exploring exotic scales,
                    Solfej gives you the tools to understand and internalize music theory — not just memorize it.
                </p>

                <h2>What We Offer</h2>

                <p>
                    Our free web tools let you search through thousands of chords and scales. For each one, you'll find
                    interactive piano and guitar diagrams, audible examples you can play directly in the browser,
                    notes, intervals, inversions, and related scales or chords. Everything is designed to help you
                    not just look up information, but actually hear and understand how music works.
                </p>

                <p>
                    The Solfej mobile app takes things further with structured ear training exercises, rhythm training,
                    and guided lesson paths — all written in plain, accessible language.
                </p>

                <h2>Who Built This</h2>

                <p>
                    Solfej was created by Shayan Javadi, a software developer and musician based in Texas.
                    The project started from a simple frustration: existing music theory resources were either
                    too academic and dry, or too shallow to be useful. Solfej aims to fill that gap with
                    interactive tools and clear explanations that make music theory approachable for everyone.
                </p>

                <h2>Our Mission</h2>

                <p>
                    We believe that understanding music theory shouldn't require a conservatory degree.
                    Our goal is to make high-quality music education accessible to anyone with an internet
                    connection — through free web tools, an affordable app, and educational blog content
                    that breaks down complex topics into practical knowledge you can apply right away.
                </p>

                <h2>Contact</h2>

                <p>
                    Have questions, feedback, or suggestions? Reach out at{" "}
                    <a href="mailto:shayanjavadi1375@gmail.com">shayanjavadi1375@gmail.com</a>.
                </p>
            </div>
        </Layout>
    )
}
