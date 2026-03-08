import { v4 as uuidv4 } from "uuid";
import { CUSTOM_LESSONS } from "../../common/consts/api";
import { logCustomLessonEdited } from "../../common/consts/analytics";

export default (firebase, uid, customLesson, lessonId) => {
  logCustomLessonEdited(customLesson);

  firebase.database()
    .ref(`${CUSTOM_LESSONS}/${uid}/${lessonId}`)
    .update({ 
      ...customLesson, 
      ...{ lessonId, isCustomLesson: true, updatedAt: firebase.database.ServerValue.TIMESTAMP } 
    });
};

