
import { Note as tonalNote } from "@tonaljs/modules";

// this mutates the state
export default (allNotes, notes) => {
    notes.forEach(note => {
        if (!allNotes.includes(note)) {
            allNotes[allNotes.indexOf(tonalNote.enharmonic(note))] = note
        }
    })
}