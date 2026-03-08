import getNotesDistance from "../../../util/intervalUtils/getNotesDistance";

export default ({ intervalIdentificationScreen }) => {
  const { referenceNote, noteToGuess } = intervalIdentificationScreen;
  const { displayName: correctChoiceName } = getNotesDistance(
    referenceNote.noteName + referenceNote.octave,
    noteToGuess.noteName + noteToGuess.octave
  );

  return correctChoiceName;
};

