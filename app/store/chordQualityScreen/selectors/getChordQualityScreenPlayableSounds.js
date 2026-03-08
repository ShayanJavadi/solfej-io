export default ({ chordQualityScreen }) => {
  const { chordToGuess } = chordQualityScreen;
  return [chordToGuess.notes];
};