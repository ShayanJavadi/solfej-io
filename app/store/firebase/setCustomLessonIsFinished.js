import { LESSON_FINISHED, logCustomLessonFinished } from "../../common/consts/analytics";
import { CUSTOM_LESSONS, LESSON_ANALYTICS } from "../../common/consts/api";
import { LESSONS_FINISHED_COUNT } from "../../common/consts/storage";

export default (firebase, uid, lessonId, finished, lessonData, subCategoryId) => {
  logCustomLessonFinished({ subCategoryId });

  const lessonAnalyticsData = { ...lessonData, finishedAt: firebase.database.ServerValue.TIMESTAMP };
  const lastlessonFinishedCount = parseInt(localStorage.getItem(LESSONS_FINISHED_COUNT)) || 0;
  localStorage.setItem(LESSONS_FINISHED_COUNT, lastlessonFinishedCount + 1);

  firebase.database()
    .ref(`${CUSTOM_LESSONS}/${uid}/${lessonId}`)
    .transaction(lesson => {
      if (lesson) {
        const { finishedCount = 0 } = lesson;
        return { ...lesson, finishedCount: finishedCount + 1 };
      }
    });

  firebase.database()
    .ref(`${LESSON_ANALYTICS}/${uid}/${lessonId}`)
    .push(lessonAnalyticsData);

  firebase.database()
    .ref(`${CUSTOM_LESSONS}/${uid}/${lessonId}`)
    .update({ finished: finished, lessonId });
};

