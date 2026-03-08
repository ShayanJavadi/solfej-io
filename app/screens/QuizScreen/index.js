import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import SoundEffectProvider from "../../containers/SoundEffectProvider";
import QuizScreen from "./QuizScreen";

export default compose(
  LessonDataProvider,
  SoundEffectProvider,
)(QuizScreen);