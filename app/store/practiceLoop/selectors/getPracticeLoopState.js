import getPracticeLoopIsSafeToStart from "./getPracticeLoopIsSafeToStart";
import getCorrectGuessPercentage from "../../../util/questionUtils/getCorrectGuessPercentage";

const getProgressPercentage = (progress, progressToFinish) => (progress / progressToFinish) * 100;

export default (state) => {
  const { practiceLoop, router = {} } = state;

  return ({
    practiceLoopIsSafeToStart: getPracticeLoopIsSafeToStart(state),
    isQuestionPlaying: practiceLoop.isQuestionPlaying,
    didQuestionFinish: practiceLoop.didQuestionFinish,
    practiceLoopStarted: practiceLoop.practiceLoopStarted,
    totalGuesses: practiceLoop.totalGuesses,
    correctGuesses: practiceLoop.correctGuesses,
    streak: practiceLoop.streak,
    maxStreak: practiceLoop.maxStreak,
    activeNotes: practiceLoop.activeNotes,
    isQuestionStandby: !practiceLoop.isQuestionPlaying && !practiceLoop.didQuestionFinish,
    correctGuessPercentage: getCorrectGuessPercentage(practiceLoop.streak, practiceLoop.maxStreak),
    progressPercentage: getProgressPercentage(practiceLoop.progress, practiceLoop.progressToFinish),
    didLessonFinish: practiceLoop.didLessonFinish,
    userNeedsHint: practiceLoop.wrongStreak >= 3 || (practiceLoop.totalGuesses - practiceLoop.correctGuesses) >= 5,
    lessonOptions: router.location && router.location.state && router.location.state.lessonOptions,
    isDailyLesson: router.location && router.location.state && router.location.state.isDailyLesson,
    dailyLessonId: router.location && router.location.state && router.location.state.isDailyLesson && router.location.state.lessonId,
    nextLessonId: router.location && !!router.location.state && router.location.state.nextlessonId,
    isCustomLesson: router.location && router.location.state && router.location.state.isCustomLesson,
    activeCustomLessonId: router.location && router.location.state && router.location.state.activeCustomLessonId
  });
};