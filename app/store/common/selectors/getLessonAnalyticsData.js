export default ({ practiceLoop = {} }) => {
  const { totalGuesses, correctGuesses } = practiceLoop;
  
  return {
    totalGuesses,
    correctGuesses,
  };
};