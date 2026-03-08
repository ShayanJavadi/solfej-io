import { SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../common/consts/routes";
import { logSubscriptionCTAPressed } from "../common/consts/analytics";
import setLessonStarted from "../store/firebase/setLessonStarted";

export const promptSubscription = (history, pathname) => {
  // time out to not throttle animation
  setTimeout(() => logSubscriptionCTAPressed(pathname), 500);
  history.push(SUBSCRIPTION_CAROUSEL_SCREEN_MODAL);
};

export const routeToLesson = (history, lesson = {}, firebase, uid) => {
  setLessonStarted(firebase, uid, lesson.lessonId, true);
  history.push(lesson.route);
}
