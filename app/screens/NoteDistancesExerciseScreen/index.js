import { connect } from "react-redux";
import { note } from "@tonaljs/tonal";
import { transposeBy, simplify } from "@tonaljs/note";
import { withFirebase } from "react-redux-firebase";
import { compose } from "redux";
import InstrumentProvider from "../../containers/InstrumentProvider";
import LessonDataProvider from "../../containers/LessonDataProvider";
import LoadingScreenProvider from "../../containers/LoadingScreenProvider";
import PracticeLoopProvider from "../../containers/PracticeLoopProvider";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import NoteDistancesExerciseScreen from "./NoteDistancesExerciseScreen";
import LoadingOverlayProvider from "../../containers/LoadingOverlayProvider";
import isEnharmonic from "../../util/noteUtils/isEnharmonic";
import { getNewQuestion, setAvailableChoices } from "../../store/noteDistanceExerciseScreen/actions";
import getDisplayNameFromInterval from "../../util/intervalUtils/getDisplayNameFromInterval";
import getLessonAnalyticsData from "../../store/common/selectors/getLessonAnalyticsData";

const getCorrectChoiceName = state => {
  const { referenceNote, intervalToGuess } = state.noteDistanceExerciseScreen;

  let correctChoiceName = simplify([referenceNote].map(transposeBy(intervalToGuess))[0]);
  // normalizing the note names to match what we have in the note arrays
  if (correctChoiceName === "D#") {
    correctChoiceName = "Eb";
  }

  if (correctChoiceName === "Db") {
    correctChoiceName = "C#";
  }

  if (correctChoiceName === "Gb") {
    correctChoiceName = "F#";
  }

  if (correctChoiceName === "G#") {
    correctChoiceName = "Ab";
  }

  if (correctChoiceName === "A#") {
    correctChoiceName = "Bb";
  }

  return correctChoiceName;
};

const mapStateToProps = state => ({
  referenceNote: state.noteDistanceExerciseScreen.referenceNote,
  correctChoiceName: getCorrectChoiceName(state),
  intervalToGuessName: getDisplayNameFromInterval(state.noteDistanceExerciseScreen.intervalToGuess),
  auth: state.firebase.auth,
  lessonAnalyticsData: getLessonAnalyticsData(state)
});

const mapDispatchToProps = {
  getNewQuestion,
  setAvailableChoices
};

export default compose(
  LessonDataProvider,
  SoundEffectProvider,
  PracticeLoopProvider,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(NoteDistancesExerciseScreen);
