import { connect } from "react-redux";
import { note } from "@tonaljs/tonal";
import { withFirebase } from "react-redux-firebase";
import { compose } from "redux";
import InstrumentProvider from "../../containers/InstrumentProvider";
import LessonDataProvider from "../../containers/LessonDataProvider";
import LoadingScreenProvider from "../../containers/LoadingScreenProvider";
import PracticeLoopProvider from "../../containers/PracticeLoopProvider";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import EnharmonicNotesExerciseScreen from "./EnharmonicNotesExerciseScreen";
import LoadingOverlayProvider from "../../containers/LoadingOverlayProvider";
import isEnharmonic from "../../util/noteUtils/isEnharmonic";
import { getNewQuestion } from "../../store/enharmonicNotesExerciseScreen/actions";
import getLessonAnalyticsData from "../../store/common/selectors/getLessonAnalyticsData";

const getCorrectChoiceName = ({ enharmonicNotesExerciseScreen = {} }) => {
  const { firstNote, secondNote } = enharmonicNotesExerciseScreen;
  // isEnharmonic function thinks they're not enharmonic since B# would in the second octave
  if (
    firstNote === "B#" && secondNote === "C" 
    || firstNote === "C" && secondNote === "B#"
    || firstNote === "Cb" && secondNote === "B"
    || firstNote === "B" && secondNote === "Cb"
  ) {
    return "True";
  }

  return isEnharmonic(
    firstNote,
    secondNote
  ) ? "True" : "False";
};

const mapStateToProps = state => ({
  firstNote: state.enharmonicNotesExerciseScreen.firstNote,
  secondNote: state.enharmonicNotesExerciseScreen.secondNote,
  correctChoiceName: getCorrectChoiceName(state),
  availableChoices: ["True", "False"],
  auth: state.firebase.auth,
  lessonAnalyticsData: getLessonAnalyticsData(state)

});
const mapDispatchToProps = {
  getNewQuestion,
};

export default compose(
  LessonDataProvider,
  SoundEffectProvider,
  PracticeLoopProvider,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(EnharmonicNotesExerciseScreen);
