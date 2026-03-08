
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import instrumentReducer from "./instrument/reducer";
import practiceLoopReducer from "./practiceLoop/reducer";
import appReducer from "./app/reducer";
import singleNoteScreenReducer from "./singleNoteScreen/reducer";
import intervalIdentificationScreenReducer from "./intervalIdentificationScreen/reducer";
import chordQualityScreenReducer from "./chordQualityScreen/reducer";
import lessonDataReducer from "./lessonData/reducer";
import accountReducer from "./account/reducer";
import rhythmTranscriptionScreenReducer from "./rhythmTranscriptionScreen/reducer";
import enharmonicNotesExerciseScreenReducer from "./enharmonicNotesExerciseScreen/reducer";
import noteDistanceExerciseScreenReducer from "./noteDistanceExerciseScreen/reducer";
import soundEffectsReducer from "./soundEffects/reducer";
import customExercisesReducer from "./customExercises/reducer";
import navigationReducer from "./navigation/reducer";
import { firebaseReducer } from "react-redux-firebase";

export default history => combineReducers({
  router: connectRouter(history),
  practiceLoop: practiceLoopReducer,
  instrument: instrumentReducer,
  app: appReducer,
  singleNoteScreen: singleNoteScreenReducer,
  intervalIdentificationScreen: intervalIdentificationScreenReducer,
  chordQualityScreen: chordQualityScreenReducer,
  firebase: firebaseReducer,
  lessonData: lessonDataReducer,
  account: accountReducer,
  rhythmTranscriptionScreen: rhythmTranscriptionScreenReducer,
  soundEffects: soundEffectsReducer,
  enharmonicNotesExerciseScreen: enharmonicNotesExerciseScreenReducer,
  noteDistanceExerciseScreen: noteDistanceExerciseScreenReducer,
  customExercises: customExercisesReducer,
  navigation: navigationReducer
});