import { indexOf } from "lodash";


// use useDisplayOrder to get the current lesson based on displayOrder or index in the array
export default (lessons, useDisplayOrder = true) => {
  // this is so that new lessons wont block progress
  const tempLessons = [...lessons];
  const lastLesson = tempLessons.reverse().find(lesson => lesson.finished);

  if (useDisplayOrder) {
    return lastLesson && lastLesson.displayOrder + 1 || 0;
  }

  return indexOf(lessons, lastLesson) + 1

  // return Math.min(
  //   ...lessons.filter(lesson => !lesson.finished)
  //     .map(lesson => lesson.displayOrder)
  // );
};