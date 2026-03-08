import { sample } from "lodash";
import { enharmonic } from "@tonaljs/note";
import { ENHARMONIC_NOTES_EXERCISE_SCREEN_SET_NOTES, PRACTICE_LOOP_NEW_QUESTION } from "../types";
import { TWELVE_TONE_NOTES } from "../../common/consts/twelveToneConsts";

export const getNewQuestion = () => (dispatch, getState) => {
  const { intervalIdentificationScreen } = getState();
  const { noteRange } = intervalIdentificationScreen;
  dispatch({
    type: PRACTICE_LOOP_NEW_QUESTION
  });

  const NOTES = ["C", "Db", "D#", "E", "F", "Gb", "G#",  "A#", "B"];
  const NOTES_ENHARMONIC = ["B#", "C#", "Eb", "Fb", "E#", "F#", "Ab",  "Bb", "Cb"];
  const setOfNotes = [NOTES, NOTES_ENHARMONIC];
  const setOfNotesToUseIndex = sample([0, 1]);
  const setOfNotesToUse = setOfNotes[setOfNotesToUseIndex];
  const firstNote = sample(setOfNotesToUse);

  const isQuestionEnharmonic = sample([true, false]);

  let newNoteToGuess = {};

  if (isQuestionEnharmonic) {
    const firstNoteIndex = setOfNotesToUse.indexOf(firstNote);
    const secondNote = setOfNotesToUseIndex === 0 ? NOTES_ENHARMONIC[firstNoteIndex] : NOTES[firstNoteIndex];

    newNoteToGuess = {
      firstNote,
      secondNote,
    };
  }

  if (!isQuestionEnharmonic) {
    // get the surrounding 2 notes
    const firstNoteIndex = setOfNotesToUse.indexOf(firstNote);
    const leftBound = firstNoteIndex < 3 ? 0 : firstNoteIndex - 2;
    const rightBound = firstNoteIndex >= NOTES.length - 2 ? NOTES.length : firstNoteIndex + 3;
    const secondNote = sample(
      [...setOfNotes[0]]
        .slice(leftBound, rightBound)
        .filter(note => note !== firstNote)
    );

    newNoteToGuess = {
      firstNote,
      secondNote,
    };
  }
 
  dispatch({
    type: ENHARMONIC_NOTES_EXERCISE_SCREEN_SET_NOTES,
    payload: newNoteToGuess
  });
};