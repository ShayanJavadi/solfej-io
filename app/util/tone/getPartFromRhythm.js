import splitRhythmString from "../noteUtils/splitRhythmString";
import getRhythmStringLength from "../noteUtils/getRhythmStringLength";
import mapNoteLetterToNoteDuration from "./mapNoteLetterToNoteDuration";

export default( rhythmString = "") => {
  const notes = ["C3", "E3", "G3", "A3", "B3"];
  let lastNoteDuration = 0;
  let totalTime = 0;
  return splitRhythmString(rhythmString)
    .map((letter, index) => {
      const { duration, time } = mapNoteLetterToNoteDuration[letter];

      const currentNoteBeat = totalTime + lastNoteDuration;
      totalTime = currentNoteBeat;
      // keep an index of the last notes time
      // the last note's time is displayed in how late the next note is played
      lastNoteDuration = time;
      return {
        time: `0:${currentNoteBeat}`,
        note: notes[index],
        velocity: 0.9,
        duration,
        end: index === getRhythmStringLength(rhythmString) - 1
      };
    });
};