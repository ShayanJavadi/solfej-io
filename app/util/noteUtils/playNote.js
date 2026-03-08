import { DEFAULT_OCTAVE } from "../../common/consts/twelveToneConsts";
import { simplify } from "@tonaljs/note";
export default ({
  noteName, release = 1, time = 0, octave = DEFAULT_OCTAVE 
}, instrument) => {
  if (noteName && instrument) {
    instrument.triggerAttackRelease(`${simplify(noteName)}${octave}`, release);
  }
};
