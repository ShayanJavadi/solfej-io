import firebase from "firebase/app";
import "firebase/analytics";

const getAnalytics = () => {
  try {
    return firebase.analytics();
  } catch (e) {
    return null;
  }
};

export const SCREEN_VIEW = "screen_view";
export const SUBSCRIPTION_CTA_PRESSED = "subscription_cta_pressed";
export const STREAK_PRESSED = "streak_pressed";

export const CUSTOM_LESSON_CREATE_STARTED = "custom_lesson_create_started";
export const CUSTOM_LESSON_STARTED = "custom_lesson_started";
export const CUSTOM_LESSON_CREATED = "custom_lesson_created";
export const CUSTOM_LESSON_EDITED = "custom_lesson_edited";
export const CUSTOM_LESSON_DELETED = "custom_lesson_deleted";
export const CUSTOM_LESSON_FINISHED = "custom_lesson_finished";

export const DAILY_LESSON_STARTED = "daily_lesson_started";
export const DAILY_LESSON_FINISHED = "daily_lesson_finished";

export const LESSON_STARTED = "lesson_started";
export const LESSON_FINISHED = "lesson_finished";

export const LESSON_SETTINGS_BUTTON_PRESSED = "lesson_settings_button_pressed";
export const LESSON_SETTINGS_OPTION_SELECTED = "lesson_setting_option_selected";
export const HINT_BUTTON_PRESSED = "hint_button_pressed";
export const WRONG_CHOICE_MADE = "wrong_choice_made";
export const CORRECT_CHOICE_MADE = "correct_choice_made";

export const logOnStreakDropdownPressed = () => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(STREAK_PRESSED);
};

export const logLessonStarted = lessonId => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(LESSON_STARTED, { lessonId });
};

export const logLessonFinished = lessonId => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(LESSON_FINISHED, { lessonId });
};

export const logCustomLessonCreated = (lesson = {}) => {
  const { subCategoryId = "" } = lesson;
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CUSTOM_LESSON_CREATED, { subCategoryId });
};

export const logCustomLessonStarted = (lesson = {}) => {
  const { subCategoryId = "" } = lesson;
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CUSTOM_LESSON_STARTED, { subCategoryId });
};

export const logCustomLessonFinished = (lesson = {}) => {
  const { subCategoryId = "" } = lesson;
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CUSTOM_LESSON_FINISHED, { subCategoryId });
};

export const logCustomLessonEdited = (lesson = {}) => {
  const { subCategoryId = "" } = lesson;
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CUSTOM_LESSON_EDITED, { subCategoryId });
};

export const logCustomLessonDeleted = (lesson = {}) => {
  const { subCategoryId = "" } = lesson;
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CUSTOM_LESSON_DELETED, { subCategoryId });
};

export const logDailyLessonStarted = () => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(DAILY_LESSON_STARTED);
};

export const logDailyLessonFinished = () => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(DAILY_LESSON_FINISHED);
};

export const logLessonSettingsButtonPressed = () => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(LESSON_SETTINGS_BUTTON_PRESSED);
};

export const logLessonSettingsOptionSelected = (title = "") => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(LESSON_SETTINGS_OPTION_SELECTED, { title });
};

export const logHintButtonPressed = () => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(HINT_BUTTON_PRESSED);
};

export const logWrongGuess = (pathname = "") => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(WRONG_CHOICE_MADE, { pathname });
};

export const logCorrectGuess = (pathname = "") => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CORRECT_CHOICE_MADE, { pathname });
};

export const createCustomLessonStarted = () => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(CUSTOM_LESSON_CREATE_STARTED);
};

export const logSubscriptionCTAPressed = pathname => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(SUBSCRIPTION_CTA_PRESSED, { pathname });
};

export const logScreen = pathname => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(SCREEN_VIEW, { screen_name: pathname });
};
