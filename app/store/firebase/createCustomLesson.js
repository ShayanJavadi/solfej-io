import { v4 as uuidv4 } from "uuid";
import { CUSTOM_LESSONS } from "../../common/consts/api";
import { logCustomLessonCreated } from "../../common/consts/analytics";

export default (firebase, uid, customLesson) => {
  const lessonId = uuidv4();

  logCustomLessonCreated(customLesson);
  
  firebase.database()
    .ref(`${CUSTOM_LESSONS}/${uid}/${lessonId}`)
    .set({ 
      ...customLesson,
      ...{ lessonId, isCustomLesson: true, updatedAt: firebase.database.ServerValue.TIMESTAMP } 
    });
};

