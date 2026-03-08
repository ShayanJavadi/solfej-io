import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import MusicTheoryScreen from "./MusicTheoryScreen";

export default compose(
  LessonDataProvider,
)(MusicTheoryScreen);