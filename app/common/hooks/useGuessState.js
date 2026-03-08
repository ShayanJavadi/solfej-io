import { useState } from "react";

const initialGuessState = {
  totalGuesses: 0,
  correctGuesses: 0,
  streak: 0,
};

export default () => useState(initialGuessState);
