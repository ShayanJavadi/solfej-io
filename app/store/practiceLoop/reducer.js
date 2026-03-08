import { 
  PRACTICE_LOOP_CORRECT_GUESS,
  PRACTICE_LOOP_WRONG_GUESS,
  PRACTICE_LOOP_INIT,
  PRACTICE_LOOP_SET_IS_QUESTION_PLAYING,
  PRACTICE_LOOP_MAX_STREAK_REACHED,
  PRACTICE_LOOP_NEW_QUESTION,
  ROUTER_LOCATION_CHANGE,
  PRACTICE_LOOP_SET_ACTIVE_NOTES,
  PRACTICE_LOOP_RESET,
  PRACTICE_LOOP_SET_OPTIONS,
  PRACTICE_LOOP_SKIP_QUESTION,
  PRACTICE_LOOP_RESET_AND_START_AGAIN
} from "../types";

const initialState = {
  isQuestionPlaying: false,
  didQuestionFinish: false,
  practiceLoopStarted: false,
  totalGuesses: 0,
  correctGuesses: 0,
  streak: 0,
  wrongStreak: 0,
  maxStreak: 5,
  activeNotes: [],
  progress: 0,
  progressToFinish: 10,
  didLessonFinish: false,
  wrongAnswerPenalty: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ROUTER_LOCATION_CHANGE:
    return initialState;
  case PRACTICE_LOOP_RESET:
    return { ...initialState, progressToFinish: state.progressToFinish, wrongAnswerPenalty: state.wrongAnswerPenalty };
  case PRACTICE_LOOP_RESET_AND_START_AGAIN:
    return { ...initialState, didQuestionFinish: true, progressToFinish: state.progressToFinish, wrongAnswerPenalty: state.wrongAnswerPenalty };
  case PRACTICE_LOOP_SET_OPTIONS:
    return {
      ...state,
      wrongAnswerPenalty: action.payload.wrongAnswerPenalty !== undefined ?
        action.payload.wrongAnswerPenalty :
        state.wrongAnswerPenalty || 1,
      progressToFinish: action.payload.pointsToFinish !== undefined ?
        action.payload.pointsToFinish :
        state.pointsToFinish || 10,
    };
  case PRACTICE_LOOP_CORRECT_GUESS:
    return {
      ...state,
      wrongStreak: 0,
      streak: state.streak >= state.maxStreak ? state.maxStreak + 1 : state.streak + 1,
      totalGuesses: state.totalGuesses + 1,
      correctGuesses: state.correctGuesses + 1,
      progress: Math.min(state.progress + 1, state.progressToFinish),
      didQuestionFinish: true,
      didLessonFinish: state.progress + 1 >= state.progressToFinish
    };
  case PRACTICE_LOOP_WRONG_GUESS:
    return {
      ...state,
      streak: 0,
      wrongStreak: state.wrongStreak + 1,
      totalGuesses: state.totalGuesses + 1,
      progress: Math.max(state.progress - state.wrongAnswerPenalty, 0),
    };
  case PRACTICE_LOOP_MAX_STREAK_REACHED:
    return {
      ...state,
      streak: state.maxStreak
    };
  case PRACTICE_LOOP_INIT:
    return {
      ...state,
      practiceLoopStarted: true,
    };
  case PRACTICE_LOOP_NEW_QUESTION:
    return {
      ...state,
      didQuestionFinish: false
    };
  case PRACTICE_LOOP_SKIP_QUESTION: 
    return {
      ...state,
      didQuestionFinish: true,
    };
  case PRACTICE_LOOP_SET_IS_QUESTION_PLAYING:
    return {
      ...state,
      isQuestionPlaying: action.payload,
      activeNotes: !action.payload ? [] : state.activeNotes
    };
  case PRACTICE_LOOP_SET_ACTIVE_NOTES:
    return {
      ...state,
      activeNotes: action.payload,
      isQuestionPlaying: true,
    };
  default:
    return state;
  }
};
