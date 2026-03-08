
import React from "react";
import "./LessonScore.scss";
import { useSelector } from "react-redux";

export default function LessonScore(props) {
  const { 
    totalGuesses = 0,
    correctGuesses = 0,
  } = useSelector(({ practiceLoop }) => ({
    totalGuesses: practiceLoop.totalGuesses,
    correctGuesses: practiceLoop.correctGuesses,
  }));

  return (
    <div className="lesson-score">
      <h2>{`${correctGuesses}/${totalGuesses}`}</h2>
    </div>
  );
}
