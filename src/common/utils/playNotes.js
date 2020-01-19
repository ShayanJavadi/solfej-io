import playNote from "./playNote";

//  note, time = 4, octave = 3 
export default ({ notes = [], instrument }) => {
    if (instrument) {
        notes.map(note => playNote(note, instrument));
    }
};
