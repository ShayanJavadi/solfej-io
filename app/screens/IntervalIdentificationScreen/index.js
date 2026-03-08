import { compose } from "redux";
import { connect } from "react-redux";
import IntervalIdentificationScreen from "./IntervalIdentificationScreen";
import PracticeLoopProvider from "../../containers/PracticeLoopProvider";
import LoadingScreenProvider from "../../containers/LoadingScreenProvider";
import InstrumentProvider from "../../containers/InstrumentProvider";
import getIntervalIdentificationScreenPlayableSounds from "../../store/intervalIdentificationScreen/selectors/getIntervalIdentificationScreenPlayableSounds";
import getIntervalIdentificationScreenCorrectChoice from "../../store/intervalIdentificationScreen/selectors/getIntervalIdentificationScreenCorrectChoice";
import { getNewQuestion, setOptions } from "../../store/intervalIdentificationScreen/actions";
import LessonDataProvider from "../../containers/LessonDataProvider";
import { withFirebase } from "react-redux-firebase";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import getLessonAnalyticsData from "../../store/common/selectors/getLessonAnalyticsData";
import getLessonOptions from "../../store/selectors/getLessonOptions";

const mapStateToProps = state => ({
  noteRange: state.intervalIdentificationScreen.noteRange,
  referenceNote: state.intervalIdentificationScreen.referenceNote,
  noteToGuess: state.intervalIdentificationScreen.noteToGuess,
  availableChoices: state.intervalIdentificationScreen.availableChoices,
  playableSounds: state.intervalIdentificationScreen.playableSounds,
  correctChoiceName: state.intervalIdentificationScreen.correctChoiceName,
  auth: state.firebase.auth,
  lessonAnalyticsData: getLessonAnalyticsData(state),
});

const mapDispatchToProps = {
  getNewQuestion,
  setOptions
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const lessonOptions = getLessonOptions(ownProps);

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    lessonOptions
  };
};

export default compose(
  LessonDataProvider,
  SoundEffectProvider,
  InstrumentProvider,
  PracticeLoopProvider,
  LoadingScreenProvider,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps, mergeProps)
)(IntervalIdentificationScreen);