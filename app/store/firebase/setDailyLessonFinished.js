import { DAILY_LESSON, LESSON_ANALYTICS } from "../../common/consts/api";
import { LESSONS_FINISHED_COUNT } from "../../common/consts/storage";
import { logDailyLessonFinished } from "../../common/consts/analytics";

export default (firebase, uid, dailyLesson, lessonId, lessonData) => {
  logDailyLessonFinished();
  
  const lessonAnalyticsData = { ...lessonData, finishedAt: firebase.database.ServerValue.TIMESTAMP, isDailyLesson: true };
  const dailyLessonToUpdate = { ...dailyLesson };

  dailyLessonToUpdate.lessons[lessonId].isFinished = true;
  const lastlessonFinishedCount = parseInt(localStorage.getItem(LESSONS_FINISHED_COUNT)) || 0;
  localStorage.setItem(LESSONS_FINISHED_COUNT, lastlessonFinishedCount + 1);

  firebase.database()
    .ref(`${LESSON_ANALYTICS}/${uid}/${lessonId}`)
    .push(lessonAnalyticsData);

  firebase.database()
    .ref(`${DAILY_LESSON}/${uid}/`)
    .update(dailyLesson);
};

