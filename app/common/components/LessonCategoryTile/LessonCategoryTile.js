import React from "react";
import classNames from "classnames";
import earTrainingCategoryImage from "../../../assets/images/ear-training-category.png"
import musicTheoryCategoryImage from "../../../assets/images/music-theory-category.png"
import rhythmCategoryImage from "../../../assets/images//rhythm-category.png"
import musicTheoryExerciseCategoryImage from "../../../assets/images/music-theory-exercises-cateogry.png"
import customExercisesCategoryImage from "../../../assets/images/custom-exercises-category.png"
import ProgressBar from "../ProgressBar";
import "./LessonCategoryTile.scss";
import { 
  EAR_TRAINING_CATEGORY_ID,
  RHYTHM_CATEGORY_ID,
  MUSIC_THEORY_CATEGORY_ID,
  MUSIC_THEORY_EXERCISES_CATEGORY_ID,
  CUSTOM_EXERCISES_CATEGORY_ID
} from "../../consts/lessonCategoryIds";

// TODO abstract away
const getIsCategoryStarted = ({ lessons = [] }) => lessons.some(lesson => lesson.started || lesson.finished);

const getIsCategoryFinished = ({ lessons = [] }) => !lessons.some(lesson => !lesson.finished);

const getFinishedLessonsCount = ({ lessons = [] }) => lessons.reduce((finishedCount, lesson) => lesson.finished ? ++finishedCount: finishedCount, 0);

const getPercentageDone = (props) => props.lessons && getFinishedLessonsCount(props) / props.lessons.length * 100;

const getProgressCopy = props => {
  if (props.isAvailable) {
    const isFinished = getIsCategoryFinished(props);
    const isStarted = getIsCategoryStarted(props);
    const lessonsFinishedCount = getFinishedLessonsCount(props);
    const lessonsCount = props.lessons && props.lessons.length;
    if (isFinished) {
      return "Tap to review!";
    }

    if (isStarted) {
      return `${lessonsFinishedCount} of ${lessonsCount} lessons`;
    }

    return "Tap to get started!";
  } 

  return "Coming soon!";
};

const mapCategoryIdToImage = categoryId => ({
  [EAR_TRAINING_CATEGORY_ID]: earTrainingCategoryImage,
  [MUSIC_THEORY_CATEGORY_ID]: musicTheoryCategoryImage,
  [RHYTHM_CATEGORY_ID]: rhythmCategoryImage,
  [MUSIC_THEORY_EXERCISES_CATEGORY_ID]: musicTheoryExerciseCategoryImage,
  [CUSTOM_EXERCISES_CATEGORY_ID]: customExercisesCategoryImage,
}[categoryId])

export default function LessonCategoryTile(props) {
  const {
    onClick,
    title,
    backgroundColor,
    boxShadow,
    isHidden,
    isAvailable,
    isFullWidth,
    lessons = [],
    categoryId
  } = props;
  const styles = { boxShadow };
  const backgroundColorStyles = { backgroundColor };
  const classes = classNames(
    "lesson-category-tile",
    isHidden && "hidden",
    isFullWidth && "full-width"
  );

  const percentageDone = getPercentageDone(props);
  const activityCount = categoryId === CUSTOM_EXERCISES_CATEGORY_ID ?
   "∞" :
   lessons.length;
  const backgroundImage = mapCategoryIdToImage(categoryId)
  console.log(props)
  console.log(categoryId)
  console.log(backgroundImage)
  return (
    <div className={classes} onClick={onClick} style={styles}>
      <div class="image-container" style={backgroundColorStyles}>
        <img src={backgroundImage} />
      </div>
      <div className="copy-container">
        <div className="title-container">
          <h4 className="title">{title}</h4>
          <h4 className="sub-title">{activityCount} ACTIVITIES</h4>
        </div>
        <div className="progress-container">
          {
            isAvailable ?
              <ProgressBar
                percentageFilled={percentageDone}
                isSmall
              /> :
              null
          }
        </div>
      </div>
    </div>
  );
}
