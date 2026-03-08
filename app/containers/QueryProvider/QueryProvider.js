import { summary } from "date-streaks";
import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import {
  DAILY_LESSON, LESSONS, LESSONS_PROGRESS, LESSON_ANALYTICS, LESSON_CATEGORIES, CUSTOM_LESSONS, USERS 
} from "../../common/consts/api";
import useSetIsLoading from "../../common/hooks/useSetIsLoading";
import { setLessonDataIsLoading } from "../../store/lessonData/actions";
import mapLessonsToLessonCategories from "../../util/lessons/mapLessonsToLessonCategories";
import mergeObjectsByKey from "../../util/mergeObjectsByKey";
import context from "./context";

const getLessonCategories = (firebase) => {
  const { uid } = firebase.auth || {};

  const { lessonCategories, lessons } = (firebase.data && firebase.data.app) || {};

  const lessonsProgress = uid &&
    firebase.data &&
    firebase.data.lessonsProgress &&
    firebase.data.lessonsProgress[uid];

  if (lessonCategories && lessons && lessonsProgress) {
    // merge user's progress with lessons array
    const lessonsWithUserProgress = mergeObjectsByKey(
      Object.values(lessons),
      Object.values(lessonsProgress),
      "lessonId"
    );

    lessonsWithUserProgress.sort((a, b) => a.displayOrder - b.displayOrder);
    // merge lessons to the respective category
    return mapLessonsToLessonCategories(
      lessonsWithUserProgress,
      lessonCategories
    ).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  return [];
};

const getDailyLesson = (firebase) => {
  const { uid } = firebase.auth || {};

  return uid &&
    firebase.data &&
    firebase.data.dailyLesson &&
    firebase.data.dailyLesson[uid];
};

const getLessonAnalytics = firebase => {
  const { uid } = firebase.auth || {};

  return uid &&
    firebase.data &&
    firebase.data.lessonAnalytics &&
    firebase.data.lessonAnalytics[uid];
};

const getIsLoading = (firebase) => {
  return firebase.requesting &&
    (
      firebase.requesting[LESSON_CATEGORIES] ||
      firebase.requesting[LESSONS] ||
      firebase.auth && firebase.requesting[`${LESSONS_PROGRESS}/${firebase.auth.uid}`] ||
      firebase.auth && firebase.requesting[`${DAILY_LESSON}/${firebase.auth.uid}`] ||
      firebase.auth && firebase.requesting[`${LESSON_ANALYTICS}/${firebase.auth.uid}`] ||
      firebase.auth && firebase.requesting[`${CUSTOM_LESSONS}/${firebase.auth.uid}`] ||
      firebase.auth && firebase.requesting[`${USERS}/${firebase.auth.uid}`]
    );
};

const getStreaks = firebase => {
  const { uid } = firebase.auth || {};

  return uid &&
    firebase.data &&
    firebase.data.lessonAnalytics &&
    firebase.data.lessonAnalytics[uid] &&
    summary({
      dates: Object.values(firebase.data.lessonAnalytics[uid])
        .map(lessons => Object.values(lessons))
        .flat()
        .map(lesson => new Date(lesson.finishedAt))
    });

};

const getCustomLessons = firebase => {
  const { uid } = firebase.auth || {};

  return uid &&
    firebase.data &&
    firebase.data.customLessons &&
    firebase.data.customLessons[uid] &&
    firebase.data.customLessons[uid] &&
    Object.values(firebase.data.customLessons[uid]);
};

const getUser = firebase => {
  const { uid } = firebase.auth || {};

  return uid &&
    firebase.data &&
    firebase.data.users &&
    firebase.data.users[uid];
};

// TODO: refactor this and rename it
// provides lesson category and user lesson progress to the app
export default function(props) {
  const {
    auth, lessonCategories, isLoading, dailyLesson, lessonAnalytics, streaks, customLessons, user 
  } = useSelector(({ firebase }) => ({
    auth: firebase.auth,
    lessonCategories: getLessonCategories(firebase),
    isLoading: getIsLoading(firebase),
    dailyLesson: getDailyLesson(firebase),
    lessonAnalytics: getLessonAnalytics(firebase),
    streaks: getStreaks(firebase),
    customLessons: getCustomLessons(firebase),
    user: getUser(firebase)
  }));

  const { uid } = auth;

  // subscribe to these end points
  useFirebaseConnect(uid && [
    { path: LESSON_CATEGORIES },
    { path: LESSONS },
    { path: `${LESSONS_PROGRESS}/${uid}` },
    { path: `${DAILY_LESSON}/${uid}` },
    { path: `${LESSON_ANALYTICS}/${uid}` },
    { path: `${CUSTOM_LESSONS}/${uid}` },
    { path: `${USERS}/${uid}` }
  ]);

  // move to loading overlay provider
  const dispatch = useDispatch();
  const loadingSetter = isLoading => dispatch(setLessonDataIsLoading(isLoading));
  useSetIsLoading(isLoading, loadingSetter);
  return (
    <context.Provider value={{
      lessonCategories,
      dailyLesson,
      lessonAnalytics,
      streaks,
      customLessons,
      user
    }}>
      {props.children}
    </context.Provider>
  );
}

