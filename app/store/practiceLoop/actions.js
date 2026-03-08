import Tone from "tone";
import { 
  PRACTICE_LOOP_WRONG_GUESS,
  PRACTICE_LOOP_CORRECT_GUESS,
  PRACTICE_LOOP_INIT,
  PRACTICE_LOOP_SET_IS_QUESTION_PLAYING,
  PRACTICE_LOOP_MAX_STREAK_REACHED,
  PRACTICE_LOOP_NEW_QUESTION,
  PRACTICE_LOOP_SET_ACTIVE_NOTES,
  PRACTICE_LOOP_RESET,
  PRACTICE_LOOP_SKIP_QUESTION,
  PRACTICE_LOOP_RESET_AND_START_AGAIN
} from "../types";
import loopThroughSounds from "../../util/questionUtils/loopThroughSounds";
import { EAR_TRAINING_INTERVAL_IDENTIFICATION_PLAY_SPEEDS, PLAY_SPEED_NORMAL } from "../../common/consts/earTrainingLessonIntervalsOptions";
import { logWrongGuess, logCorrectGuess } from "../../common/consts/analytics";
import { debounce } from "lodash";

// timeout so that it's after the progress bar animation
// debounce to handle the function getting called a million times
const debouncedLogWrongAnswer = debounce(navigation => setTimeout(() => logWrongGuess(navigation.currentLocation), 300), 500);

export const onWrongGuess = () => (dispatch, getState) => {
  const { practiceLoop, soundEffects = {}, navigation = {} } = getState();
  const { wrongSoundEffect } = soundEffects;
  const { didQuestionFinish, isQuestionPlaying } = practiceLoop;

  if (didQuestionFinish || isQuestionPlaying) {
    return;
  }
  // set time out so it doesn't slow down animations
  debouncedLogWrongAnswer(navigation);

  if (wrongSoundEffect) {
    wrongSoundEffect.start();
    Tone.Transport.start();
    Tone.Transport.stop();
  }

  dispatch({ type: PRACTICE_LOOP_WRONG_GUESS });

  return Promise.resolve();
};

export const onCorrectGuess = () => (dispatch, getState) => {
  const { practiceLoop, soundEffects = {}, navigation = {} } = getState();
  const { correctSoundEffect } = soundEffects;
  const {
    maxStreak, 
    streak, 
    didQuestionFinish, 
    isQuestionPlaying 
  } = practiceLoop;

  if (didQuestionFinish || isQuestionPlaying) {
    return;
  }

  // set time out so it doesn't slow down animations
  setTimeout(() => logCorrectGuess(navigation.currentLocation), 300);
  
  if (correctSoundEffect) {
    correctSoundEffect.start();
    Tone.Transport.start();
    Tone.Transport.stop();

  }

  dispatch({ type: PRACTICE_LOOP_CORRECT_GUESS });

  if (streak === maxStreak) {
    setTimeout(() => dispatch({ type: PRACTICE_LOOP_MAX_STREAK_REACHED }), 100);
  }

  return Promise.resolve();
};

export const initPracticeLoop = () => dispatch => {
  dispatch({ type: PRACTICE_LOOP_INIT });

  return Promise.resolve();
};

export const setIsQuestionPlaying = isQuestionPlaying => dispatch => {
  dispatch({
    type: PRACTICE_LOOP_SET_IS_QUESTION_PLAYING,
    payload: isQuestionPlaying
  });

  return Promise.resolve();
};

export const setActiveNotes = activeNotes => dispatch => {
  dispatch({
    type: PRACTICE_LOOP_SET_ACTIVE_NOTES,
    payload: activeNotes
  });
};

export const loopThroughQuestionSounds = sounds => (dispatch, getState) => {
  const { intervalIdentificationScreen = {} } = getState();
  const { playSpeed = PLAY_SPEED_NORMAL } = intervalIdentificationScreen;
  const timePerNote = EAR_TRAINING_INTERVAL_IDENTIFICATION_PLAY_SPEEDS[playSpeed];
  dispatch({
    type: PRACTICE_LOOP_SET_IS_QUESTION_PLAYING,
    payload: true
  });

  const timerIds = loopThroughSounds({ // need timer ids to clear timeout on cleanup
    sounds,
    activeSoundStateSetterFunction: activeNotes => {
      dispatch({
        type: PRACTICE_LOOP_SET_ACTIVE_NOTES,
        payload: activeNotes
      });
    },
    onAfterLastSoundCallback: () => {
      dispatch({
        type: PRACTICE_LOOP_SET_IS_QUESTION_PLAYING,
        payload: false
      });
    },
    timePerNote
  });

  return timerIds;
};

export const initNewQuestion = () => dispatch => {
  dispatch({ type: PRACTICE_LOOP_NEW_QUESTION });
};

export const resetQuestion = () => dispatch => {
  dispatch({ type: PRACTICE_LOOP_RESET });
};

export const skipQuestion = () => dispatch => {
  dispatch({ type: PRACTICE_LOOP_SKIP_QUESTION });
};

export const resetQuestionAndStartAgain = () => dispatch => {
  dispatch({ type: PRACTICE_LOOP_RESET_AND_START_AGAIN });
};