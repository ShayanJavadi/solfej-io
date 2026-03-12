import firebase from "firebase/app";
import "firebase/analytics";
import {
  SCREEN_VIEW, SUBSCRIPTION_CTA_PRESSED, STREAK_PRESSED,
  CUSTOM_LESSON_CREATE_STARTED, CUSTOM_LESSON_STARTED, CUSTOM_LESSON_CREATED,
  CUSTOM_LESSON_EDITED, CUSTOM_LESSON_DELETED, CUSTOM_LESSON_FINISHED,
  DAILY_LESSON_STARTED, DAILY_LESSON_FINISHED,
  LESSON_STARTED, LESSON_FINISHED, LESSON_REPLAYED,
  LESSON_SETTINGS_BUTTON_PRESSED, LESSON_SETTINGS_OPTION_SELECTED,
  HINT_BUTTON_PRESSED, WRONG_CHOICE_MADE, CORRECT_CHOICE_MADE,
  PAYWALL_HIT, CHECKOUT_STARTED, CHECKOUT_COMPLETED, CHECKOUT_ABANDONED,
  TRIAL_STARTED, CHECKOUT_ERROR, PLAN_SELECTED,
  ONBOARDING_STARTED, ONBOARDING_STEP_COMPLETED, ONBOARDING_COMPLETED,
  SIGN_UP_STARTED, SIGN_IN_STARTED, SIGN_OUT,
  APP_OPENED, CATEGORY_SELECTED, SHARE_PRESSED, LESSONS_UNLOCK_TOGGLED,
  EXERCISE_REPLAY_PRESSED, EXERCISE_SUBMIT_PRESSED, EXERCISE_UNDO_PRESSED,
  CUSTOM_EXERCISE_CATEGORY_SELECTED, CUSTOM_EXERCISE_SUBCATEGORY_SELECTED,
  AUDIO_PLAYBACK_ERROR,
} from "./analyticsEvents";

// Re-export all event name constants so existing imports keep working
export * from "./analyticsEvents";

// ── helpers ──────────────────────────────────────────────────────────

const getAnalytics = () => {
  try {
    return firebase.analytics();
  } catch (e) {
    return null;
  }
};

const logEvent = (event, params) => {
  const analytics = getAnalytics();
  if (analytics) analytics.logEvent(event, params);
};

// ── user properties ──────────────────────────────────────────────────

export const setUserProperties = (properties = {}) => {
  const analytics = getAnalytics();
  if (analytics) analytics.setUserProperties(properties);
};

// ── log functions ────────────────────────────────────────────────────

// Screen
export const logScreen = pathname => logEvent(SCREEN_VIEW, { screen_name: pathname });

// UI
export const logSubscriptionCTAPressed = pathname => logEvent(SUBSCRIPTION_CTA_PRESSED, { pathname });
export const logOnStreakDropdownPressed = () => logEvent(STREAK_PRESSED);

// Lessons
export const logLessonStarted = lessonId => logEvent(LESSON_STARTED, { lessonId });
export const logLessonFinished = lessonId => logEvent(LESSON_FINISHED, { lessonId });
export const logLessonReplayed = lessonId => logEvent(LESSON_REPLAYED, { lessonId });
export const logCustomLessonCreated = (lesson = {}) => logEvent(CUSTOM_LESSON_CREATED, { subCategoryId: lesson.subCategoryId || "" });
export const logCustomLessonStarted = (lesson = {}) => logEvent(CUSTOM_LESSON_STARTED, { subCategoryId: lesson.subCategoryId || "" });
export const logCustomLessonFinished = (lesson = {}) => logEvent(CUSTOM_LESSON_FINISHED, { subCategoryId: lesson.subCategoryId || "" });
export const logCustomLessonEdited = (lesson = {}) => logEvent(CUSTOM_LESSON_EDITED, { subCategoryId: lesson.subCategoryId || "" });
export const logCustomLessonDeleted = (lesson = {}) => logEvent(CUSTOM_LESSON_DELETED, { subCategoryId: lesson.subCategoryId || "" });
export const createCustomLessonStarted = () => logEvent(CUSTOM_LESSON_CREATE_STARTED);
export const logDailyLessonStarted = () => logEvent(DAILY_LESSON_STARTED);
export const logDailyLessonFinished = () => logEvent(DAILY_LESSON_FINISHED);
export const logLessonSettingsButtonPressed = () => logEvent(LESSON_SETTINGS_BUTTON_PRESSED);
export const logLessonSettingsOptionSelected = (title = "") => logEvent(LESSON_SETTINGS_OPTION_SELECTED, { title });
export const logHintButtonPressed = () => logEvent(HINT_BUTTON_PRESSED);
export const logWrongGuess = (pathname = "") => logEvent(WRONG_CHOICE_MADE, { pathname });
export const logCorrectGuess = (pathname = "") => logEvent(CORRECT_CHOICE_MADE, { pathname });

// Subscription funnel
export const logPaywallHit = (source = "") => logEvent(PAYWALL_HIT, { source });
export const logCheckoutStarted = (planId, planPrice) => logEvent(CHECKOUT_STARTED, { planId, planPrice });
export const logCheckoutCompleted = () => logEvent(CHECKOUT_COMPLETED);
export const logCheckoutAbandoned = (source = "") => logEvent(CHECKOUT_ABANDONED, { source });
export const logTrialStarted = planId => logEvent(TRIAL_STARTED, { planId });
export const logCheckoutError = (error_message = "") => logEvent(CHECKOUT_ERROR, { error_message });
export const logPlanSelected = planId => logEvent(PLAN_SELECTED, { planId });

// Onboarding funnel
export const logOnboardingStarted = () => logEvent(ONBOARDING_STARTED);
export const logOnboardingStepCompleted = (step_name, step_index) => logEvent(ONBOARDING_STEP_COMPLETED, { step_name, step_index });
export const logOnboardingCompleted = () => logEvent(ONBOARDING_COMPLETED);

// Auth
export const logSignUpStarted = method => logEvent(SIGN_UP_STARTED, { method });
export const logSignInStarted = method => logEvent(SIGN_IN_STARTED, { method });
export const logSignOut = () => logEvent(SIGN_OUT);

// Engagement
export const logAppOpened = () => logEvent(APP_OPENED);
export const logCategorySelected = (category_id, category_title) => logEvent(CATEGORY_SELECTED, { category_id, category_title });
export const logSharePressed = () => logEvent(SHARE_PRESSED);
export const logLessonsUnlockToggled = enabled => logEvent(LESSONS_UNLOCK_TOGGLED, { enabled });

// Exercise interactions
export const logExerciseReplayPressed = screen => logEvent(EXERCISE_REPLAY_PRESSED, { screen });
export const logExerciseSubmitPressed = screen => logEvent(EXERCISE_SUBMIT_PRESSED, { screen });
export const logExerciseUndoPressed = screen => logEvent(EXERCISE_UNDO_PRESSED, { screen });
export const logCustomExerciseCategorySelected = categoryId => logEvent(CUSTOM_EXERCISE_CATEGORY_SELECTED, { categoryId });
export const logCustomExerciseSubcategorySelected = subCategoryId => logEvent(CUSTOM_EXERCISE_SUBCATEGORY_SELECTED, { subCategoryId });

// Errors
export const logAudioPlaybackError = (error_message = "") => logEvent(AUDIO_PLAYBACK_ERROR, { error_message });
