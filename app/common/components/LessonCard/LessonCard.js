import classNames from "classnames";
import React from "react";
import check from "../../../assets/images/check.svg";
import {
  accentOne, primary, secondaryLight, yellow, purple, green 
} from "../../consts/colors";
import {
  MUSIC_THEORY_CATEGORY_ID, MUSIC_THEORY_EXERCISES_CATEGORY_ID, RHYTHM_CATEGORY_ID, CUSTOM_EXERCISES_CATEGORY_ID 
} from "../../consts/lessonCategoryIds";
import Dot from "../Dot/Dot";
import Pill from "../Pill";
import ProgressBar from "../ProgressBar";
import "./LessonCard.scss";
import Button from "../Button/Button";
import {
  MdLock, MdEdit, MdDelete, MdCheck 
} from "react-icons/md";
import { mapSubcategoryIdToDisplayName } from "../../consts/lessonSubcategoryIds";

const renderIcon = ({ finished, started }, isCurrentLesson, isLocked) => {
  if (isLocked) {
    return <MdLock size={20} color="#333" />;
  }

  if (finished) {
    return <img className="check" src={check} />;
  }

  if (started === false && isCurrentLesson) {
    return <Dot />;
  }

  return null;
};

const getCategoryColor = categoryId => {
  if (categoryId === MUSIC_THEORY_CATEGORY_ID) {
    return accentOne;
  }

  if (categoryId === RHYTHM_CATEGORY_ID) {
    return yellow;
  }

  if (categoryId === MUSIC_THEORY_EXERCISES_CATEGORY_ID) {
    return purple;
  }

  if (categoryId === CUSTOM_EXERCISES_CATEGORY_ID) {
    return secondaryLight;
  }

  return primary;
};

export default function LessonCard(props) {
  const {
    onClick,
    lesson = {},
    isFullWidth,
    isCurrentLesson,
    isDisabled,
    tag,
    hideIcon,
    showCta,
    ctaText,
    isLocked,
    onDeleteClick,
    onEditClick,
    isHorizontal
  } = props;

  const {
    finished,
    started,
    totalQuestions,
    completedQuestionsCount,
    title,
    description,
    shouldDisplayTag = false,
    categoryId,
    isCustomLesson,
    lessonId,
    finishedCount,
    subCategoryId,
    subCategory
  } = lesson;
  
  const classes = classNames(
    "lesson-card",
    isFullWidth ? "full-width" : "half-width",
    isDisabled && "disabled",
    showCta && "has-cta",
    isCustomLesson && "custom-lesson"
  );
  
  // TODO: turn both of these into one field
  const subCategoryTag = mapSubcategoryIdToDisplayName[subCategoryId || subCategory];
  console.log(subCategoryTag, isHorizontal)
  return (
    <div className={classes} onClick={onClick}>
      {
        !hideIcon && !isCustomLesson &&
        <div className="icon-container">
          {renderIcon(lesson, isCurrentLesson, isLocked)}
        </div>
      }
      {
        isCustomLesson &&
        <div className="icon-container custom-lesson">
          <MdEdit
            size={20} 
            color="#666" 
            onClick={(e) => {
              // don't want the lesson container to be tapped when edit is tapped
              // same with the delete button below
              e.stopPropagation(); 
              onEditClick(lesson);
            }} 
          />
          <MdDelete 
            size={20}
            color="#666"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteClick(lesson);
            }} 
          />
        </div>
      }
      
      <div className="header-container">
        <h4>{title}</h4>
      </div>
     
      <div className="description-container">
        <p>{description}</p>
      </div>
      {
        tag &&
        <div className="tag-container">
          {
            isCustomLesson &&
            <Pill text="Custom Lesson" color={secondaryLight} />
          }
          <Pill text={tag} color={getCategoryColor(categoryId)} />
          {
            subCategoryTag && !isHorizontal &&
            <Pill text={subCategoryTag.text} color={subCategoryTag.color} />
          }
        </div>
      }
      {
        showCta &&
        <div className="cta-container">
          <Button 
            text={ctaText}
            onClick={onClick}
            isSuccess
            isTextCentered
          />
        </div>
      }
      {
        !showCta &&
        <div className="progress-container">
          {
            isCustomLesson ?
              <p>Tap To Start</p> :
              <p>{finished ? "Tap To Review" : isCurrentLesson ? "Tap to get started!" : isDisabled ? "Finish last lesson to unlock" : "Tap to get started!"}</p>
          }
          {
            isCustomLesson ?
              <div className="finished-count-container">
                <p>{finishedCount || 0} x</p>
                <img className="check" src={check}  />
              </div> :
              <div className="progress-bar-container">
                <ProgressBar
                  isSmall
                  percentageFilled={finished ? 100 : isCurrentLesson ? 5 : 0}
                />
              </div>
          }
        </div>
      }
    </div>
  );
}
