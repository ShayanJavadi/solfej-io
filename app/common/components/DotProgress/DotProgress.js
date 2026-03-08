
import React, { Fragment } from "react";
import classNames from "classnames";
import "./DotProgress.scss";
import Dot from "../Dot/Dot";

// HACK: gotta figure out edge cases around back btton on this guy. this will come up on web - web risk
export default function DotProgress(props) {
  const { dailyLesson = {} } = props;
  const { lessons = {} } = dailyLesson;
  const lessonsArray = Object.values(lessons).sort((a, b) => a.displayOrder - b.displayOrder) || [];
  return (
    <div className="dot-progress">
      {
        [...lessonsArray, ...[{ isFinished: false, isLastDot: true }]].map((lesson, index) => {
          const isCurrentLesson = lessonsArray[index - 1] && lessonsArray[index - 1].isFinished || !lessonsArray[index - 1] && 
            lessonsArray[index + 1] && !lessonsArray[index + 1].isFinished;
          const dotClasses = classNames(
            lesson.isFinished && "finished",
            isCurrentLesson && "current"
          );
          
          const dividerClasses = classNames(
            "divider",
            isCurrentLesson && "current",
            lesson.isFinished && "finished"
          );

          return (
            <Fragment key={index}>
              <Dot className={dotClasses}>
                {lesson.isLastDot && <span style={{ position: "relative", left: "2px" }}>🏁</span>}
              </Dot>
              {
                index < lessonsArray.length &&
                <div className={dividerClasses} />
              }
            </Fragment>
          );
        })
      }
    </div>
  );
}
