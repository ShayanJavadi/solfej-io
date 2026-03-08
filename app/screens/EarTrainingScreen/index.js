import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import EarTrainingScreen from "./EarTrainingScreen";

export default compose(
  LessonDataProvider,
)(EarTrainingScreen);