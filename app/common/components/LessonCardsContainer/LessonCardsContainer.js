import React, { Fragment } from "react";
import classNames from "classnames";
import { lessonData } from "../../data/lessons";
import Dot from "../Dot/Dot";
import LessonCard from "../LessonCard/LessonCard";
import "./LessonCardsContainer.scss";
import getCurrentLesson from "../../../util/lessons/getCurrentLesson";
import getIsDisabled from "../../../util/lessons/getIsDisabled";
import getIsCurrentLesson from "../../../util/lessons/getIsCurrentLesson";
import { purple, yellow } from "../../consts/colors";
import { isEmpty } from "lodash";

const renderDivider = (lesson, currentLesson) => {
  const isAfterCurrentLesson = lesson.displayOrder >= currentLesson;
  const { isOptional, finished } = lesson;

  return (
    <div className={`divider-parent-container ${isAfterCurrentLesson && "disabled"}`}>
      <div className="divider-flex-container">
        <div className="divider-container">
          <div className="divider" style={{ backgroundColor: isOptional && !finished && yellow }} />
        </div>
        {/* Lesson mock is requried to make sure divider lines up */}
        <div className="lesson-card-mock" />
      </div>
    </div>
  );
};

const renderProgressDot = (lesson, currentLesson) => {
  const isAfterCurrentLesson = lesson.displayOrder > currentLesson;
  const { finished, isOptional } = lesson;

  return finished ?
    <Dot />:
    isAfterCurrentLesson ? 
      <Dot isDisabled isEmpty />: 
      <Dot isEmpty backgroundColor={isOptional && yellow} />;
};

const renderVerticalLessonCardsContainer = props => {

  const { 
    onLessonClick,
    lessons: lessonsFromProps = [],
    isEmbedded,
    lockLessons,
    lockWhiteList = [],
    hideProgressDots,
    allLessonsUnlocked,
    onEditClick,
    onDeleteClick,
    user = {},
    noLessonsMessage,
    sortLessonByUpdatedAt
  } = props;
  const { hasLessonsUnlocked } = user;
  // normalize the display orders so specific categories can show the next lesson
  // 0 3 4 vs 0 1 2
  
  // sort lessons by updatedAt
  const lessons = sortLessonByUpdatedAt ?
    [...lessonsFromProps].map((lesson, index) => ({ ...lesson, ...{ displayOrder: index } }))
      .sort((a, b) => b.updatedAt - a.updatedAt) :
    lessonsFromProps.map((lesson, index) => ({ ...lesson, ...{ displayOrder: index } }));

  const currentLesson = getCurrentLesson(lessons) || 0;
  const classes = classNames("lesson-cards-container", isEmbedded && "embedded", noLessonsMessage && isEmpty(lessonsFromProps) && "no-lessons-message");

  if (noLessonsMessage && isEmpty(lessonsFromProps)) {
    return (
      <div className={classes}>
        <p>{noLessonsMessage}</p>
      </div>
    );
  }
  
  return (
    <div className={classes}>
      {
        lessons && lessons.map((lesson, index) => {
          const needsDivider = index !== lessons.length - 1;
          const isDisabled = !allLessonsUnlocked && getIsDisabled(lesson, currentLesson) &&
            !hasLessonsUnlocked;

          return (
            <Fragment key={index}>
              <div className="card-progress-container" key={Math.random()}>
                <div className="lesson-card-container">
                  {
                    !isEmbedded &&
                    !hideProgressDots &&
                    <div className={"dot-container"}>
                      {renderProgressDot(lesson, currentLesson)}
                    </div>
                  }
                  <LessonCard
                    lesson={lesson}
                    onClick={() => !isDisabled && onLessonClick(lesson)}
                    isFullWidth
                    hideIcon={isEmbedded}
                    isCurrentLesson={getIsCurrentLesson(lesson, currentLesson)}
                    isDisabled={isDisabled}
                    tag={lesson.tag}
                    isLocked={lockLessons && !lockWhiteList.includes(lesson.lessonId)}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                  />
                </div>
              </div>
              {needsDivider && !hideProgressDots && renderDivider(lesson, currentLesson)}
            </Fragment>
          );
        })
      }
    </div>
  );
};

const renderHorizontalLessonCardsContainer = props => {
  const { onLessonClick = () => null, lessons, lockLessons, lockWhiteList } = props;
  const currentLesson = getCurrentLesson(lessons) || 0;
 

  return (
    <div className="lesson-cards-container horizontal embla__container">
      {
        lessons && lessons.map((lesson, index) => {
          const needsDivider = index !== lessons.length - 1;

          return (
            <div className="lesson-card-horizontal-container" key={index}>
              <div className="card-progress-container">
                <div className="lesson-card-container">
                  <LessonCard
                    lesson={lesson}
                    onClick={() => onLessonClick(lesson)}
                    isFullWidth
                    isHorizontal
                    isCurrentLesson={getIsCurrentLesson(lesson, currentLesson)}
                    isDisabled={getIsDisabled(lesson, currentLesson)}
                    isLocked={lockLessons && !lockWhiteList.includes(lesson.lessonId)}
                    tag={lesson.tag}
                  />
                </div>
                <div className={"dot-container divider"}>
                  {renderProgressDot(lesson, currentLesson)}
                </div>
              </div>
              {needsDivider && renderDivider(lesson, currentLesson)}
            </div>
          );
        })
      }
    </div>
  );
};

export default function LessonCardsContainer(props) {
  const { isHorizontal } = props;

  return (
    isHorizontal ?
      renderHorizontalLessonCardsContainer(props) :
      renderVerticalLessonCardsContainer(props)
  );
}
