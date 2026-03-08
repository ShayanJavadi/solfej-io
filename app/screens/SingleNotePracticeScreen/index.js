import { connect } from "react-redux";
import { compose } from "redux";
import InstrumentProvider from "../../containers/InstrumentProvider";
import LoadingScreenProvider from "../../containers/LoadingScreenProvider";
import PracticeLoopProvider from "../../containers/PracticeLoopProvider";
import { getNewQuestion } from "../../store/singleNoteScreen/actions";
import getSingleNoteScreenPlayableSounds from "../../store/singleNoteScreen/selectors/getSingleNoteScreenPlayableSounds";
import SingleNotePractice from "./SingleNotePractice";
import { withFirebase } from "react-redux-firebase";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import getLessonAnalyticsData from "../../store/common/selectors/getLessonAnalyticsData";

const mapStateToProps = (state) => ({
  noteRange: state.singleNoteScreen.noteRange,
  referenceNote: state.singleNoteScreen.referenceNote,
  noteToGuess: state.singleNoteScreen.noteToGuess,
  auth: state.firebase.auth,
  lessonAnalyticsData: getLessonAnalyticsData(state)
});

const mapDispatchToProps = {
  getNewQuestion
};

export default compose(
  InstrumentProvider,
  SoundEffectProvider,
  PracticeLoopProvider,
  LoadingScreenProvider,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(SingleNotePractice);
