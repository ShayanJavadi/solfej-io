import { sample } from "lodash";
import { enharmonic } from "@tonaljs/note";
import {
  ENHARMONIC_NOTES_EXERCISE_SCREEN_SET_NOTES, PRACTICE_LOOP_NEW_QUESTION, NOTE_DISTANCE_EXERCISE_SCREEN_SET_QUESTION, NOTE_DISTANCE_EXERCISE_SCREEN_SET_AVAILABLE_CHOICES 
} from "../types";
import { TWELVE_TONE_NOTES } from "../../common/consts/twelveToneConsts";

export const getNewQuestion = () => (dispatch, getState) => {
  const { noteDistanceExerciseScreen } = getState();
  const { noteRange, availableChoices } = noteDistanceExerciseScreen;
  dispatch({
    type: PRACTICE_LOOP_NEW_QUESTION
  });

  const referenceNote = sample(noteRange);
  const intervalToGuess = sample(availableChoices);

  dispatch({
    type: NOTE_DISTANCE_EXERCISE_SCREEN_SET_QUESTION,
    payload: {
      referenceNote,
      intervalToGuess,
    }
  });
};

export const setAvailableChoices = availableChoices => dispatch => {
  dispatch({
    type: NOTE_DISTANCE_EXERCISE_SCREEN_SET_AVAILABLE_CHOICES,
    payload: availableChoices
  });
};