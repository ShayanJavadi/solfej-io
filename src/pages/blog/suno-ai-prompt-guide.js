import React from 'react'
import BlogPostLayout from '../../components/BlogPostLayout'
import Hero from "../../components/blogImages/suno-ai-prompt-guide/Hero"
import ShayanJavadi from '../../components/ShayanJavadi'

export const blogData = {
    title: "Suno AI Prompt Guide: The Music Theory Cheat Sheet for Better Songs",
    description: "A practical guide to writing better Suno AI prompts using basic music theory. Covers keys, scales, modes, tempo, and how to translate what you hear in your head into prompts that work.",
    authorName: "Shayan Javadi",
    date: "Mar 2026",
    timeToRead: "9 min",
    route: "suno-ai-prompt-guide",
    image: "/images/blog-post-hero-7.png",
    seoTitle: "Suno AI Prompt Guide: Music Theory Cheat Sheet for Better Prompts (2026) | Solfej",
    authorImage: <ShayanJavadi />
}

export default () => {
    const { title } = blogData;

    return (
        <BlogPostLayout blogData={blogData} hero={<Hero />}>
            <p>Most Suno AI prompt guides tell you to add genre tags and mood words. That's fine, but it's surface-level. The people getting the best results from Suno are the ones who know a little music theory — because they can describe what they want in terms the AI actually responds to.</p>
            <p>You don't need a music degree. You need about 10 minutes and this cheat sheet.</p>

            <h2>The 4 Things Suno Actually Understands</h2>
            <p>Suno's style prompt box responds to four types of musical information. In order of how reliably they work:</p>
            <ol>
                <li><b>Genre</b> — "indie rock," "lo-fi hip hop," "jazz ballad"</li>
                <li><b>Mood/energy</b> — "melancholic," "aggressive," "dreamy"</li>
                <li><b>Instrumentation</b> — "acoustic guitar," "piano and strings," "808s"</li>
                <li><b>Musical parameters</b> — key, tempo/BPM, time signature</li>
            </ol>
            <p>Most people only use 1 and 2. Adding 3 and especially 4 is where music theory gives you an edge.</p>

            <h2>Keys: Major vs Minor (and Why It Matters)</h2>
            <p>The single most impactful thing you can add to a Suno prompt is the key. It tells the AI which notes and chords to use.</p>
            <p><b>Major keys</b> sound bright, happy, resolved. If you prompt <code>C major</code>, Suno will tend to build around the <a href="/scales/c-major">C major scale</a> and use chords like <a href="/chords/c-major">C</a>, <a href="/chords/f-major">F</a>, and <a href="/chords/g-major">G</a>.</p>
            <p><b>Minor keys</b> sound dark, sad, tense. If you prompt <code>A minor</code>, Suno will draw from the <a href="/scales/a-minor">A minor scale</a> and use chords like <a href="/chords/a-minor">Am</a>, <a href="/chords/d-minor">Dm</a>, and <a href="/chords/e-minor">Em</a>.</p>
            <p>Here's a quick reference for common keys and the feeling they tend to produce:</p>
            <ul>
                <li><a href="/scales/c-major">C major</a> / <a href="/scales/a-minor">A minor</a> — no sharps or flats, "neutral" feel, very common in pop</li>
                <li><a href="/scales/g-major">G major</a> / <a href="/scales/e-minor">E minor</a> — bright and open, common in folk and rock</li>
                <li><a href="/scales/d-major">D major</a> / <a href="/scales/b-minor">B minor</a> — warm and resonant, great for acoustic guitar songs</li>
                <li><a href="/scales/f-major">F major</a> / <a href="/scales/d-minor">D minor</a> — slightly darker major, works well for ballads</li>
                <li><a href="/scales/eb-major">Eb major</a> / <a href="/scales/c-minor">C minor</a> — rich and full, common in R&B and soul</li>
            </ul>

            <h2>Tempo: BPM Cheat Sheet</h2>
            <p>Adding a BPM (beats per minute) to your prompt gives you control over the energy level. Suno responds to both exact BPM numbers and Italian tempo terms.</p>
            <ul>
                <li><b>60-70 BPM (Adagio)</b> — Very slow. Ballads, ambient, cinematic. <code>"Slow ballad, 65 BPM, piano"</code></li>
                <li><b>70-90 BPM (Andante)</b> — Walking pace. Lo-fi hip hop, R&B. <code>"Lo-fi hip hop, 80 BPM, chill"</code></li>
                <li><b>90-110 BPM (Moderato)</b> — Medium. Pop, indie, folk. <code>"Indie folk, 100 BPM, acoustic guitar"</code></li>
                <li><b>110-130 BPM (Allegro)</b> — Upbeat. Pop, rock, dance. <code>"Pop rock anthem, 120 BPM, electric guitar"</code></li>
                <li><b>130-160 BPM (Vivace)</b> — Fast. Punk, drum & bass, EDM. <code>"Punk rock, 150 BPM, aggressive"</code></li>
                <li><b>160+ BPM (Presto)</b> — Very fast. Drum & bass, speedmetal. <code>"Drum and bass, 170 BPM, dark"</code></li>
            </ul>

            <h2>Modes: Beyond Major and Minor</h2>
            <p>Modes are scales that each have a distinct mood. Suno doesn't always respond to mode names directly, but you can steer it with mood words:</p>
            <ul>
                <li><b><a href="/scales/c-major">Ionian</a> (major scale)</b> — happy, bright → prompt: <code>"bright, uplifting, major key"</code></li>
                <li><b><a href="/scales/c-dorian">Dorian</a></b> — minor but with a hopeful quality → prompt: <code>"minor key, slightly funky, Santana-esque"</code></li>
                <li><b><a href="/scales/c-phrygian">Phrygian</a></b> — Spanish/Middle Eastern flavor → prompt: <code>"Spanish guitar, dark, flamenco-influenced"</code></li>
                <li><b><a href="/scales/c-lydian-pentatonic">Lydian</a></b> — dreamy, floating, ethereal → prompt: <code>"ethereal, dreamy, shimmering, Joe Satriani"</code></li>
                <li><b><a href="/scales/c-mixolydian-pentatonic">Mixolydian</a></b> — bluesy, rock, slightly unresolved → prompt: <code>"classic rock, bluesy, Grateful Dead"</code></li>
                <li><b><a href="/scales/a-minor">Aeolian</a> (natural minor)</b> — sad, dark → prompt: <code>"sad, dark, melancholic, minor key"</code></li>
            </ul>
            <p>The key insight: every mode is just a regular scale starting on a different note. <a href="/scales/c-dorian">C Dorian</a> uses the same notes as <a href="/scales/bb-major">Bb major</a>, but sounds completely different because the "home note" is C instead of Bb. If you want to go deeper, look up any of these scales on Solfej.</p>

            <h2>Putting It All Together: Prompt Templates</h2>
            <p>Here are ready-to-use templates that combine genre, mood, key, and tempo:</p>

            <h3>Sad Acoustic Ballad</h3>
            <p><code>Acoustic folk ballad, A minor, 75 BPM, fingerpicked guitar, male vocals, intimate and melancholic</code></p>
            <p>This works because: <a href="/scales/a-minor">A minor</a> is a comfortable key for guitar, 75 BPM is slow enough for a ballad, and the mood words reinforce the minor tonality.</p>

            <h3>Upbeat Pop Song</h3>
            <p><code>Upbeat pop, C major, 118 BPM, synth and acoustic guitar, female vocals, bright and catchy</code></p>
            <p>This works because: <a href="/scales/c-major">C major</a> is the brightest, most "basic" key — no sharps or flats — and 118 BPM sits right in the pop sweet spot.</p>

            <h3>Dark Trap Beat</h3>
            <p><code>Dark trap, D minor, 140 BPM, 808s, hi-hats, eerie synths, aggressive</code></p>
            <p>This works because: <a href="/scales/d-minor">D minor</a> is a common key for trap (it sits well with 808 bass), and 140 BPM is standard trap tempo.</p>

            <h3>Jazz Standard</h3>
            <p><code>Jazz standard, Bb major, 130 BPM, walking bass, piano trio, swing feel, brushes on snare</code></p>
            <p>This works because: <a href="/scales/bb-major">Bb major</a> is the most common jazz key (brass instruments are built in Bb), and specifying "walking bass" and "swing" helps Suno get the rhythmic feel right.</p>

            <h3>Lo-fi Study Beat</h3>
            <p><code>Lo-fi hip hop, F major, 85 BPM, jazzy chords, vinyl crackle, Rhodes piano, chill</code></p>
            <p>This works because: <a href="/scales/f-major">F major</a> has a warm, slightly mellow quality, 85 BPM is the lo-fi sweet spot, and "jazzy chords" pushes Suno toward <a href="/chords/f-major-7th">major 7th</a> and <a href="/chords/f-dominant-7th">dominant 7th</a> voicings.</p>

            <h2>Common Mistakes</h2>
            <ul>
                <li><b>Overloading the prompt</b> — Don't put 15 descriptors in the style box. Suno weights the first few words most heavily. Lead with genre and key.</li>
                <li><b>Conflicting instructions</b> — "Happy, bright, D minor" is contradictory. <a href="/scales/d-minor">D minor</a> is a sad key. Match your mood words to your key.</li>
                <li><b>Ignoring BPM</b> — If you prompt "energetic" but don't specify tempo, Suno might give you a slow track. Always add BPM for energy-dependent genres.</li>
                <li><b>Expecting exact reproduction</b> — Suno is probabilistic. It'll get you in the neighborhood of what you ask for, not an exact reproduction. Generate 3-4 versions and pick the best one.</li>
            </ul>

            <h2>The Real Advantage: Knowing What You're Hearing</h2>
            <p>The biggest reason to learn basic music theory isn't to write better Suno prompts — it's to understand what Suno gives you back. When you generate a track and think "that sounds cool," being able to say "that's because it's using a <a href="/scales/c-dorian">dorian</a> scale over a <a href="/chords/c-minor-7th">minor 7th chord</a>" means you can recreate that sound intentionally, not by luck.</p>
            <p>If nothing else, learn these three things:</p>
            <ul>
                <li>The difference between <a href="/chords/c-major">major</a> and <a href="/chords/c-minor">minor</a> chords (and why they sound different)</li>
                <li>What a <a href="/scales/c-major">scale</a> is and how it determines which notes "fit" in a key</li>
                <li>What <a href="/blog/cadences">cadences</a> are — they're the reason some endings feel final and some feel unresolved</li>
            </ul>

            <p><b><a href="/chords">Look up any chord on Solfej →</a></b></p>
            <p><b><a href="/scales">Look up any scale on Solfej →</a></b></p>

            <h2>More Suno AI Guides</h2>
            <ul>
                <li><a href="/blog/suno-ai-chord-progressions">Suno AI Chord Progressions: How to Control What Chords Suno Plays</a></li>
                <li><a href="/blog/suno-vs-udio">Suno vs Udio: Which AI Music Generator Is Better in 2026?</a></li>
                <li><a href="/blog/suno-ai-tips">How to Make Suno AI Songs Sound Professional (Music Theory Tips)</a></li>
            </ul>
        </BlogPostLayout>
    )
}
