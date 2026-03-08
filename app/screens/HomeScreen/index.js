import { compose } from "redux";
import LessonDataProvider from "../../containers/LessonDataProvider";
import HomeScreen from "./HomeScreen";

export default compose(
  LessonDataProvider,
)(HomeScreen);