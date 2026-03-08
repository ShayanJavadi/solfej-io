import { withFirestore } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import InstrumentProvider from "../../containers/InstrumentProvider";
import LessonDataProvider from "../../containers/LessonDataProvider";
import LoadingScreenProvider from "../../containers/LoadingScreenProvider";
import PracticeLoopProvider from "../../containers/PracticeLoopProvider";
import { getNewQuestion, setChoicesAndChoiceLength } from "../../store/rhythmTranscriptionScreen/actions";
import RhythmTranscriptionScreen from "./RhythmTranscriptionScreen";
import TempoProvider from "../../containers/TempoProvider/TempoProvider";
import { setIsQuestionPlaying } from "../../store/practiceLoop/actions";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import getLessonAnalyticsData from "../../store/common/selectors/getLessonAnalyticsData";

const mapStateToProps = state => ({
  availableChoices: state.rhythmTranscriptionScreen.availableChoices,
  correctChoice: state.rhythmTranscriptionScreen.correctChoice,
  auth: state.firebase.auth,
  choiceId: state.rhythmTranscriptionScreen.choiceId,
  lessonAnalyticsData: getLessonAnalyticsData(state)
});

const mapDispatchToProps = {
  getNewQuestion,
  setChoicesAndChoiceLength,
  setIsQuestionPlaying
};

export default compose(
  LessonDataProvider,
  SoundEffectProvider,
  InstrumentProvider,
  PracticeLoopProvider,
  LoadingScreenProvider,
  TempoProvider,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(RhythmTranscriptionScreen);