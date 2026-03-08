import { flatten } from "lodash";

export const TWELVE_TONE_NOTES = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
export const NOTES = flatten([0, 1, 2, 3, 4, 5, 6].map(n => TWELVE_TONE_NOTES.map(note => `${note}${n}`)));
export const GUITAR_RANGE = ["E2", "E5"];
export const RANGE = NOTES.slice(
  NOTES.indexOf(GUITAR_RANGE[0]),
  NOTES.indexOf(GUITAR_RANGE[1])
);
export const BLACK_KEYS = ["C#", "Eb", "F#", "Ab", "Bb"];
export const WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B"];

export const INTERVALS_DISPLAY_NAMES = [
  "Unison",
  "Minor 2nd",
  "Major 2nd",
  "Minor 3rd",
  "Major 3rd",
  "Perfect 4th",
  "Tritone",
  "Perfect 5th",
  "Minor 6th",
  "Major 6th",
  "Minor 7th",
  "Major 7th"
];

export const INTERVALS_THEORY_NAMES = [
  "1P",
  "1A",
  "2M",
  "3m",
  "3M",
  "4P",
  "4A",
  "5P",
  "6m",
  "6M",
  "7m",
  "7M",
];

export const MAPPED_INTERVALS_TO_DISPLAY_NAMES = {
  "1P": "Unison",
  "1A": "Minor 2nd",
  "2m": "Minor 2nd",
  "2M": "Major 2nd",
  "3m": "Minor 3rd",
  "3M": "Major 3rd",
  "4P": "Perfect 4th",
  "4A": "Tritone",
  "5P": "Perfect 5th",
  "6m": "Minor 6th",
  "6M": "Major 6th",
  "7m": "Minor 7th",
  "7M": "Major 7th"
};

export const MAPPED_DISPLAY_NAMES_TO_INTERVALS = {
  "Unison": "1P",
  "Minor 2nd": "1A",
  "Major 2nd": "2M",
  "Minor 3rd": "3m",
  "Major 3rd": "3M",
  "Perfect 4th": "4P",
  "Tritone": "4A",
  "Perfect 5th": "5P",
  "Minor 6th": "6m",
  "Major 6th": "6M",
  "Minor 7th": "7m",
  "Major 7th": "7M"
};

export const DEFAULT_OCTAVE = 3;