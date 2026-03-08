export default ({
  isCustomLesson, customLessons, activeCustomLessonId, lessonOptions  
}) => {
  const customLesson = isCustomLesson &&
    activeCustomLessonId &&
    customLessons &&
    customLessons.find(customLesson => customLesson.lessonId === activeCustomLessonId);

  return customLesson ?
    customLesson.lessonOptions :
    lessonOptions;
};