import { connect } from "react-redux";
import { compose } from "redux";
import InstrumentProvider from "../../containers/InstrumentProvider";
import LoadingScreenProvider from "../../containers/LoadingScreenProvider";
import PracticeLoopProvider from "../../containers/PracticeLoopProvider";
import getChordQualityScreenCorrectChoice from "../../store/chordQualityScreen/selectors/getChordQualityScreenCorrectChoice";
import getChordQualityScreenPlayableSounds from "../../store/chordQualityScreen/selectors/getChordQualityScreenPlayableSounds";
import { getNewQuestion, setOptions } from "../../store/chordQualityScreen/actions";
import ChordQualityScreen from "./ChordQualityScreen";
import { withFirebase } from "react-redux-firebase";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import getLessonAnalyticsData from "../../store/common/selectors/getLessonAnalyticsData";
import LessonDataProvider from "../../containers/LessonDataProvider";
import getLessonOptions from "../../store/selectors/getLessonOptions";

const mapStateToProps = state => ({
  noteRange: state.chordQualityScreen.noteRange,
  referenceNote: state.chordQualityScreen.referenceNote,
  chordToGuess: state.chordQualityScreen.chordToGuess,
  availableChoices: state.chordQualityScreen.availableChoices,
  playableSounds: getChordQualityScreenPlayableSounds(state),
  correctChoiceName: getChordQualityScreenCorrectChoice(state),
  auth: state.firebase.auth,
  lessonAnalyticsData: getLessonAnalyticsData(state)
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
  InstrumentProvider,
  SoundEffectProvider,
  PracticeLoopProvider,
  LoadingScreenProvider,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps, mergeProps)
)(ChordQualityScreen);
