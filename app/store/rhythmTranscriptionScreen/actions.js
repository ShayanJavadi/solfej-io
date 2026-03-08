import { sample, shuffle } from "lodash";
import { PRACTICE_LOOP_NEW_QUESTION, RHYTHM_TRANSCRIPTION_SCREEN_SET_CORRECT_CHOICE, RHYTHM_TRANSCRIPTION_SCREEN_SET_CHOICES } from "../types";
import findSumsToTarget from "../../util/findSumsToTarget";
import mapNoteLetterToNoteDuration from "../../util/tone/mapNoteLetterToNoteDuration";
import mapNoteDurationToNoteLetter from "../../util/tone/mapNoteDurationToNoteLetter";
export const getNewQuestion = () => (dispatch, getState) => {
  const { availableChoices: availableChoicesState , choiceLength } = getState().rhythmTranscriptionScreen;
  let availableChoices = [...availableChoicesState];

  let wholeTones = 0;
  let dottedNotes = 0;

  // there's multiple ways to make up to a specific number so we're picking one randomly
  const newQuestionCorrectChoice = shuffle(sample(findSumsToTarget(
    availableChoices.map(noteLetter => mapNoteLetterToNoteDuration[noteLetter].time),
    4, // this should be dynamic in the future. stuck at 4/4 for now
    sample(choiceLength)
  )))
    .map(noteDuration => mapNoteDurationToNoteLetter[noteDuration])
    .map(note => note.noteLetter)
    .join("");
  
  dispatch({
    type: PRACTICE_LOOP_NEW_QUESTION
  });

  dispatch({
    type: RHYTHM_TRANSCRIPTION_SCREEN_SET_CORRECT_CHOICE,
    payload: newQuestionCorrectChoice
  });
};

export const setChoicesAndChoiceLength = (choices, choiceLength) => dispatch => {
  dispatch({
    type: RHYTHM_TRANSCRIPTION_SCREEN_SET_CHOICES,
    payload: { choices, choiceLength }
  });

  return Promise.resolve();
};