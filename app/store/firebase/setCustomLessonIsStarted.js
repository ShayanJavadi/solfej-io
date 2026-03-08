import { CUSTOM_LESSONS } from "../../common/consts/api";
import { logCustomLessonStarted } from "../../common/consts/analytics";

export default (firebase, uid, lesson, isStarted) => {
  const { lessonId } = lesson;
  logCustomLessonStarted(lesson);

  firebase.database()
    .ref(`${CUSTOM_LESSONS}/${uid}/${lessonId}`)
    .update({ started: isStarted });
};

