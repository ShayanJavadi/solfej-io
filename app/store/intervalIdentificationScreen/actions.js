import { sample } from "lodash";
import { transposeBy, simplify } from "@tonaljs/note";
import {
  PRACTICE_LOOP_NEW_QUESTION, INTERVAL_IDENTIFICATION_SCREEN_SET_NEW_QUESTION, INTERVAL_IDENTIFICATION_SCREEN_SET_OPTIONS, PRACTICE_LOOP_SET_OPTIONS 
} from "../types";
import splitNoteAndOctave from "../../util/noteUtils/splitNoteAndOctave";
import { MAPPED_INTERVALS_TO_DISPLAY_NAMES, NOTES } from "../../common/consts/twelveToneConsts";
import { EAR_TRAINING_INTERVAL_IDENTIFICATION_GET_PLAYABLE_SOUNDS_FUNCTIONS, EAR_TRAINING_INTERVAL_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS } from "../../common/consts/earTrainingLessonIntervalsOptions";
import { ROOT_NOTE_MODE_FIXED, ROOT_NOTE_MODE_RANGE } from "../../common/consts/earTrainingLessonCommonOptions";

const getRootNoteAndOctave = ({
  referenceNoteRange,
  octavesRange,
  noteRange,
  rootNoteMode,
  fixedRootNote
}) => {
  // this is ideally how the note should be in the future
  // the custom lessons come through from this first flow
  // TODO: refactor the other flows to use the noteRange model
  if (noteRange && rootNoteMode === ROOT_NOTE_MODE_RANGE) {
    const [firstNote, lastNote] = noteRange || [];
    const availableNotes = NOTES.slice(NOTES.indexOf(firstNote), NOTES.indexOf(lastNote) + 1);
    const { noteName: rootNote, octave } = splitNoteAndOctave(sample(availableNotes));

    return { rootNote, octave };
  }

  if (fixedRootNote && rootNoteMode === ROOT_NOTE_MODE_FIXED) {
    const { noteName: rootNote, octave } = splitNoteAndOctave(fixedRootNote);

    return { rootNote, octave };
  }

  const rootNote = sample(referenceNoteRange);
  const octave = sample(octavesRange);

  return { rootNote, octave };
};

const getPlayableSoundsFunction = ({
  playModes,
  getPlayableSounds
}) => {
  if (playModes) {
    const playMode = sample(playModes);
    return EAR_TRAINING_INTERVAL_IDENTIFICATION_GET_PLAYABLE_SOUNDS_FUNCTIONS[playMode];
  }

  if (getPlayableSounds) {
    return getPlayableSounds;
  }

};

export const getNewQuestion = () => (dispatch, getState) => {
  const { intervalIdentificationScreen } = getState();
  const {
    intervals, 
    referenceNoteRange,
    octavesRange,
    getPlayableSounds,
    noteRange,
    playModes,
    rootNoteMode,
    fixedRootNote
  } = intervalIdentificationScreen;
  dispatch({
    type: PRACTICE_LOOP_NEW_QUESTION
  });

  const { rootNote, octave } = getRootNoteAndOctave({
    referenceNoteRange,
    octavesRange,
    noteRange,
    rootNoteMode,
    fixedRootNote
  });
  const playableSoundsFunction = getPlayableSoundsFunction({ playModes, getPlayableSounds });

  const interval = sample(intervals);

  const newReferenceNote = {
    noteName: rootNote,
    index: 0,
    octave
  };

  const noteFromRootNoot = splitNoteAndOctave(simplify(transposeBy(interval)(rootNote + octave)));
  const newNoteToGuess = { 
    noteName: noteFromRootNoot.noteName,
    index: 1,
    octave: noteFromRootNoot.octave
  };

  dispatch({
    type: INTERVAL_IDENTIFICATION_SCREEN_SET_NEW_QUESTION,
    payload: {
      referenceNote: newReferenceNote,
      noteToGuess: newNoteToGuess,
      correctChoiceName: MAPPED_INTERVALS_TO_DISPLAY_NAMES[interval],
      playableSounds: playableSoundsFunction(newReferenceNote, newNoteToGuess)
    }
  });
};

export const setOptions = (options = {}) => dispatch => {
  const {
    intervals,
    choices,
    referenceNoteRange,
    octavesRange,
    wrongAnswerPenalty,
    pointsToFinish,
    getPlayableSounds,
    playModes,
    playSpeed,
    rootNoteMode,
    fixedRootNote,
    noteRange,
  } = options;
  const { intervals: availableIntervals } = EAR_TRAINING_INTERVAL_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS;
  // filters choices to be in order
  const sortedChoices = availableIntervals.map(interval => interval.label)
    .filter(interval => choices.includes(interval));

  dispatch({
    type: PRACTICE_LOOP_SET_OPTIONS,
    payload: {
      wrongAnswerPenalty,
      pointsToFinish
    }
  });
  dispatch({
    type: INTERVAL_IDENTIFICATION_SCREEN_SET_OPTIONS,
    payload: {
      referenceNoteRange,
      intervals,
      choices: sortedChoices,
      octavesRange,
      getPlayableSounds,
      playModes,
      playSpeed,
      rootNoteMode,
      fixedRootNote,
      noteRange,
    }
  });

  return Promise.resolve();
};