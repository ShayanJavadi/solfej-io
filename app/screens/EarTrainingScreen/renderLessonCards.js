import React from "react";
import emptyDot from "../../assets/images/empty-dot.svg";
import progressDot from "../../assets/images/dot.svg";
import disabledDot from "../../assets/images/disabled-dot.svg";
import LessonCard from "../../common/components/LessonCard/LessonCard";
import { lessons, currentLesson } from "./EarTrainingScreen";

export const renderLessonCards = props => {
  return (<div className="lesson-cards-container">
    {lessons.map((lesson, index) => (<>
      <div className="card-progress-container">
        <div className="lesson-card-container" key={Math.random()}>
          <div className={"dot-container"}>
            {lesson.finished ?
              <img src={progressDot} /> :
              <img src={lesson.displayOrder > currentLesson ? disabledDot : emptyDot} />}
          </div>
          <LessonCard lesson={lesson} onClick={() => props.history.push(lesson.route)} isFullWidth isCurrentLesson={lesson.displayOrder === currentLesson} isDisabled={lesson.displayOrder > currentLesson} />
        </div>
      </div>
      {index !== lessons.length - 1 &&
        <div className={`divider-parent-container ${lesson.displayOrder >= currentLesson && "disabled"}`}>
          <div className="divider-flex-container">
            <div className="divider-container">
              <div className="divider"></div>
            </div>
            <div className="lesson-card-mock"></div>
          </div>
        </div>}
    </>))}
  </div>);
};
