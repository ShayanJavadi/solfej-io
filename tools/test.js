const chords = require("../chords.json")

let i = { notes: []};

chords.forEach(c => {
    i = c.notes.length > i.notes.length ? c : i
})

console.log(i)