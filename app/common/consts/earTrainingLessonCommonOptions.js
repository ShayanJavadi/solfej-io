import { capitalize } from "lodash";

export const ROOT_NOTE_MODE_RANGE = "range";
export const ROOT_NOTE_MODE_FIXED = "fixed";

export const ROOT_NOTE_MODES = [
  {
    value: ROOT_NOTE_MODE_RANGE,
    label: capitalize(ROOT_NOTE_MODE_RANGE)
  },
  {
    value: ROOT_NOTE_MODE_FIXED,
    label: capitalize(ROOT_NOTE_MODE_FIXED)
  }
];

export const OCTAVE_RANGE = [0, 7];