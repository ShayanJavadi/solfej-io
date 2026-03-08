import { transposeFrom } from "@tonaljs/note";
import splitNoteAndOctave from "../noteUtils/splitNoteAndOctave";
import { DEFAULT_OCTAVE } from "../../common/consts/twelveToneConsts";

export default ({
  rootNote, intervals, octave = DEFAULT_OCTAVE, index 
}) => intervals
  .map(transposeFrom(`${rootNote}${octave}`))
  .map(noteName => ({ ...splitNoteAndOctave(noteName), index }));