import { LESSONS_PROGRESS, LESSON_ANALYTICS } from "../../common/consts/api";
import { LESSON_FINISHED, logLessonFinished } from "../../common/consts/analytics";
import { LESSONS_FINISHED_COUNT } from "../../common/consts/storage";

export default (firebase, uid, lessonId, finished, lessonData) => {
  logLessonFinished(lessonId);

  const lessonAnalyticsData = { ...lessonData, finishedAt: firebase.database.ServerValue.TIMESTAMP };
  const lastlessonFinishedCount = parseInt(localStorage.getItem(LESSONS_FINISHED_COUNT)) || 0;
  localStorage.setItem(LESSONS_FINISHED_COUNT, lastlessonFinishedCount + 1);
  firebase.database()
    .ref(`${LESSON_ANALYTICS}/${uid}/${lessonId}`)
    .push(lessonAnalyticsData);

  firebase.database()
    .ref(`${LESSONS_PROGRESS}/${uid}/${lessonId}`)
    .update({ finished: finished, lessonId });
};

