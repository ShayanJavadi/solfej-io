import { sample } from "lodash";
import { PRACTICE_LOOP_NEW_QUESTION, SINGLE_NOTE_SCREEN_SET_NOTE_TO_GUESS } from "../types";

export const getNewQuestion = () => (dispatch, getState) => {
  const { singleNoteScreen } = getState();
  const { noteRange, noteToGuess: oldNewNoteToGuess } = singleNoteScreen;
  dispatch({
    type: PRACTICE_LOOP_NEW_QUESTION
  });

  const newNoteToGuess = { ...oldNewNoteToGuess, ...{ noteName: sample(noteRange) } };

  dispatch({
    type: SINGLE_NOTE_SCREEN_SET_NOTE_TO_GUESS,
    payload: newNoteToGuess
  });
};