export default ({ intervalIdentificationScreen }) => {
  const { referenceNote, noteToGuess } = intervalIdentificationScreen;
  return [[noteToGuess], [referenceNote], [noteToGuess], [referenceNote, noteToGuess]];
};