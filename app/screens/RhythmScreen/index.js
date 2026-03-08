import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import RhythmScreen from "./RhythmScreen";

export default compose(
  LessonDataProvider,
)(RhythmScreen);