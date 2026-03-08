// Returns lesson categories with lessons mapped to them
export default (lessons, lessonCategories) => {
  return Object.values(lessonCategories).map(category => {
    const lessonsForCategory = lessons
      .filter(
        lesson => lesson.categoryId === category.categoryId
      );

    return { ...category, ...{ lessons: lessonsForCategory } };
  });
};