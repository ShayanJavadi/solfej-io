import { compose } from "redux";
import InstrumentProvider from "../../containers/InstrumentProvider";
import MusicTheoryLessonScreen from "./MusicTheoryLessonScreen";

export default compose(
  InstrumentProvider,
)(MusicTheoryLessonScreen);