
import React from "react";
import "./LessonQuestionCopy.scss";

export default function LessonQuestionCopy(props) {
  const {
    didLessonFinish, questionCopy, shouldShowStreakCopy, streaks = {} 
  } = props;
  const { currentStreak = "" } = streaks || {};

  return (
    <div className="lesson-question-copy question-copy-container">
      {
        didLessonFinish ? 
          shouldShowStreakCopy ?
            <div className="streak-copy-container">
              <h1>🔥</h1>
              <h2>{currentStreak + 1}-Day Streak! </h2> 
              <p>Complete a lesson daily to build your streak</p>
            </div> :
            <h2>{"Nice work! 🎉"}</h2> :
          <h2>{questionCopy}</h2>
      }
      
    </div>
  );
}
