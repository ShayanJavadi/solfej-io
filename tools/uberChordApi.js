const fetch = require("node-fetch");
const fs = require('fs');

const flatten = arr => arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
}, [])
const uberChordsURL = "https://api.uberchord.com/v1/chords?nameLike=";
const NOTES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const TENSIONS = ["", "3", "7", "9", "11", "13"];
const EDGE_CASES = ["minmaj", "add", "add13", "omit5"]
const TONES = ["", "maj", "min", "sus", "aug", "dim"];

const urls = NOTES.map(note => {
    return TONES.map(tone => {
        return EDGE_CASES.map(tension => {
            return `${uberChordsURL}${note}_${tone}${tension}`
        })
    })
})

const urlsWithNoTone = NOTES.map(note => {
    return EDGE_CASES.map(tension => {
        return `${uberChordsURL}${note}_${tension}`
    })
})

const urlsToCall = [...flatten(urlsWithNoTone), ...flatten(urls)].slice(320, 340)

try {
    Promise.all(urlsToCall.map(u => fetch(u))).then(responses =>
        Promise.all(responses.map(res => res.json()))
    ).then(arrays => {



        const data = JSON.stringify(flatten(arrays))
        fs.writeFileSync("uberChords37.json", data)

    })
} catch (e) {
    console.log(e)
}
