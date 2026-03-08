import { HOME_SCREEN } from "../../common/consts/routes";
import { logDailyLessonStarted } from "../../common/consts/analytics";

export default (history, dailyLesson) => {
  // HACK: remove this and make it a dynamic path
  
  if (!dailyLesson) {
    history.push(HOME_SCREEN, { didFinishDailyLesson: true });
    return;
  }

  history.push(dailyLesson.route, { lessonOptions: dailyLesson.lessonOptions, isDailyLesson: true, lessonId: dailyLesson.lessonId, nextlessonId: dailyLesson.nextlessonId });
};