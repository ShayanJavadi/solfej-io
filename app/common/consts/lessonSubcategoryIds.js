import { primary } from "./colors";

export const INTERVAL_IDENTIFICATION_SUBCATEGORY = "interval-identification-subcategory";
export const CHORD_IDENTIFICATION_SUBCATEGORY = "chord-identification-subcategory";
export const RHYTHM_TRANSCRIPTION_SUBCATEGORY = "rhythm-transcription-subcategory";
export const MUSIC_THEORY_LESSON_SUBCATEGORY = "music-theory-lesson-subcategory";
export const ENHARMONIC_NOTES_EXERCISE_SUBCATEGORY = "enharmonic-notes-exercise-subcategory";
export const NOTE_DISTANCES_EXERCISE_SUBCATEGORY = "note-distances-exercise-subcategory";
export const SINGLE_NOTE_IDENTIFICATION_SUBCATEGORY = "single-note-identification-subcategory";

export const mapSubcategoryIdToDisplayName = {
  [INTERVAL_IDENTIFICATION_SUBCATEGORY]: {
    text: "Interval Identification",
    color: primary
  },
  [CHORD_IDENTIFICATION_SUBCATEGORY]: {
    text: "Chord Identification",
    color: primary
  }
};