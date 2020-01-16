const chords = require("../chords.json")


const c = chords.filter(chord => 
    chord.notes.includes("C") && 
    chord.notes.includes("E") && 
    chord.notes.includes("A") &&
    chord.notes.length <= 3
)
console.log(c)

console.log(c.length)