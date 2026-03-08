import { LESSONS_PROGRESS } from "../../common/consts/api";
import { logLessonStarted } from "../../common/consts/analytics";

export default (firebase, uid, lessonId, isStarted) => {
  logLessonStarted(lessonId);
  firebase.database()
    .ref(`${LESSONS_PROGRESS}/${uid}/${lessonId}`)
    .update({ started: isStarted, lessonId });
};

