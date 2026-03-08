import { DAILY_LESSON } from "../../common/consts/api";
import { logDailyLessonStarted } from "../../common/consts/analytics";

export default (firebase, uid) => {
  logDailyLessonStarted();
  firebase.database()
    .ref(`${DAILY_LESSON}/${uid}`)
    .update({ isStarted: true });
};

