import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import CustomExercisesScreen from "./CustomExercisesScreen";

export default compose(
  LessonDataProvider,
)(CustomExercisesScreen);