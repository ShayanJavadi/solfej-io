import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import MusicTheoryExercisesScreen from "./MusicTheoryExercisesScreen";

export default compose(
  LessonDataProvider,
)(MusicTheoryExercisesScreen);