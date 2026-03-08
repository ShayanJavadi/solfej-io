import { useState } from "react";

const initialQuestionLoopState = {
  isQuestionPlaying: false,
  didQuestionFinish: false,
  practiceLoopStarted: false,
  isInteractive: false,
};

export default () => useState(initialQuestionLoopState);
