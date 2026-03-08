import {
  map, reduce, shuffle, isEmpty, mergeWith, isArray, uniq 
} from "lodash";
import uuid from "uuid/v4";
import { CHORD_QUALITY_CHOICES } from "../../common/consts/earTrainingLessonChordsOptions";
import { EAR_TRAINING_INTERVAL_IDENTIFICATION_OPTIONS } from "../../common/consts/earTrainingLessonIntervalsOptions";
import { EAR_TRAINING_CATEGORY_ID, RHYTHM_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";
import { CHORD_IDENTIFICATION_SUBCATEGORY, INTERVAL_IDENTIFICATION_SUBCATEGORY, RHYTHM_TRANSCRIPTION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";
import { RHYTHM_CHOICES } from "../../common/consts/rhythmChoices";
import { CHORD_IDENTIFICATION_CUSTOM_LESSON_SCREEN, INTERVAL_IDENTIFICATION_CUSTOM_LESSON_SCREEN, RHYTHM_TRANSCRIPTION_CUSTOM_LESSON_SCREEN } from "../../common/consts/routes";
import setDailyLesson from "../../store/firebase/setDailyLesson";

function mergeWithConcatArrays(objValue, srcValue) {
  if (isArray(objValue)) {
    return uniq(objValue.concat(srcValue));
  }
}

export default (lessonCategories = [], dailyLesson = {}, auth, firebase) => {
  const lesson = lessonCategories[0] && lessonCategories[0].lessons[0];
  // get categories
  const earTrainingCategory = lessonCategories.find(lessonCategory => lessonCategory.categoryId === EAR_TRAINING_CATEGORY_ID)
    || { lessons: [] };

  const rhythmCategory = lessonCategories.find(lessonCategory => lessonCategory.categoryId === RHYTHM_CATEGORY_ID)
    || { lessons: [] };

  // get lesson options for each category
  const dailyIntervalLessonOptions = earTrainingCategory.lessons
    .filter(lesson => lesson.subCategory === INTERVAL_IDENTIFICATION_SUBCATEGORY && lesson.finished)
    .reduce((lessonOptions, lesson) => {
 
      return mergeWith(lessonOptions, EAR_TRAINING_INTERVAL_IDENTIFICATION_OPTIONS[lesson.lessonId], mergeWithConcatArrays);
    }, {});
  const dailyChordLessonOptions = earTrainingCategory.lessons
    .filter(lesson => lesson.subCategory === CHORD_IDENTIFICATION_SUBCATEGORY && lesson.finished)
    .reduce((lessonOptions, lesson) => {
      return mergeWith(lessonOptions, CHORD_QUALITY_CHOICES[lesson.lessonId], mergeWithConcatArrays);

    }, {});

  const dailyRhythmTranscriptionLessonOptions = rhythmCategory.lessons
    .filter(lesson => lesson.subCategory === RHYTHM_TRANSCRIPTION_SUBCATEGORY && lesson.finished)
    .reduce((lessonOptions, lesson) => {
      return mergeWith(lessonOptions, RHYTHM_CHOICES[lesson.lessonId], mergeWithConcatArrays);

    }, {});

  // making this null so we can store it in firebase. fierbase won't take functions which is an issud
  // ids so the lessons can be tracked
  const dailyIntervalLessonId = uuid();
  const dailyChordLessonId = uuid();
  const dailyRhythmLessonId = uuid();
  const lessonsWithOptions = {};

  if (!isEmpty(dailyIntervalLessonOptions)) {
    dailyIntervalLessonOptions.getPlayableSounds = null;

    lessonsWithOptions[dailyIntervalLessonId] = {
      isFinished: false,
      lessonId: dailyIntervalLessonId,
      route: INTERVAL_IDENTIFICATION_CUSTOM_LESSON_SCREEN,
      categoryId: EAR_TRAINING_CATEGORY_ID,
      lessonOptions: dailyIntervalLessonOptions,
    };
  }

  if (!isEmpty(dailyChordLessonOptions)) {
    lessonsWithOptions[dailyChordLessonId] = {
      isFinished: false,
      lessonId: dailyChordLessonId,
      route: CHORD_IDENTIFICATION_CUSTOM_LESSON_SCREEN,
      categoryId: EAR_TRAINING_CATEGORY_ID,
      lessonOptions: dailyChordLessonOptions,
    };
  }

  if (!isEmpty(dailyRhythmTranscriptionLessonOptions)) {
    lessonsWithOptions[dailyRhythmLessonId] = {
      isFinished: false,
      lessonId: dailyRhythmLessonId,
      route: RHYTHM_TRANSCRIPTION_CUSTOM_LESSON_SCREEN,
      categoryId: RHYTHM_CATEGORY_ID,
      lessonOptions: dailyRhythmTranscriptionLessonOptions,
    };
  }

  if (isEmpty(lessonsWithOptions)) {
    setDailyLesson(firebase, auth.uid, { isIneligible: true });
    return;
  }

  // shuffle lessons so they're not the same every day
  const shuffledLessons = map(shuffle(lessonsWithOptions), (lesson, index) => ({ ...lesson, displayOrder: index }));
  // map nextlesson Id to the lessons
  const mappedLessons = map(shuffledLessons, (lesson) => {
    const nextlesson = Object.values(shuffledLessons)
      .find(nextLesson => nextLesson.displayOrder === lesson.displayOrder + 1);
    return {
      ...lesson,
      ...{
        nextlessonId: nextlesson && nextlesson.lessonId || null
      }
    };
  });

  const mappedLesssonsWithIds = reduce(mappedLessons, (lessons, lesson) => ({ ...lessons, ...{ [lesson.lessonId]: lesson } }), {});

  const dailyLessons = {
    date: Date.now(),
    isStarted: false,
    lessons: mappedLesssonsWithIds,
    isIneligible: false
  };

  setDailyLesson(firebase, auth.uid, dailyLessons);
};