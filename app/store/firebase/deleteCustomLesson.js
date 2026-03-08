import { v4 as uuidv4 } from "uuid";
import { CUSTOM_LESSONS } from "../../common/consts/api";
import { logCustomLessonDeleted } from "../../common/consts/analytics";

export default (firebase, uid, lesson) => {
  const { lessonId } = lesson;

  logCustomLessonDeleted(lesson);

  firebase.database()
    .ref(`${CUSTOM_LESSONS}/${uid}/${lessonId}`)
    .remove();
};

