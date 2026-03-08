export default ({ singleNoteScreen, lessonId }) => {
  const { referenceNote, noteToGuess } = singleNoteScreen;
  return [[referenceNote], [noteToGuess]];
};