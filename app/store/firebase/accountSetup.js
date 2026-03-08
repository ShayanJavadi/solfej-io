import { LESSONS_PROGRESS, USERS } from "../../common/consts/api";
import {
  accentOne, primary, secondaryLight, yellow, purple 
} from "../../common/consts/colors";
import {
  EAR_TRAINING_CATEGORY_ID, MUSIC_THEORY_CATEGORY_ID, MUSIC_THEORY_EXERCISES_CATEGORY_ID, RHYTHM_CATEGORY_ID, CUSTOM_EXERCISES_CATEGORY_ID 
} from "../../common/consts/lessonCategoryIds";
import { MUSIC_THEORY_LESSON_SUBCATEOGRY, SINGLE_NOTE_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";
import {
  CHORD_QUALITY_SCREEN, EAR_TRAINING_7TH_CHORD_SCREEN, EAR_TRAINING_DIMINISHED_1_SCREEN, EAR_TRAINING_DIMINISHED_2_SCREEN, EAR_TRAINING_DIMINISHED_SCREEN, EAR_TRAINING_DOMINANT_7TH_CHORD_1_SCREEN, EAR_TRAINING_DOMINANT_7TH_CHORD_2_SCREEN, EAR_TRAINING_DOMINANT_7TH_CHORD_SCREEN, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_SCREEN, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_SCREEN, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_SCREEN, EAR_TRAINING_INTERVALS_BEGINNER_SCREEN, EAR_TRAINING_MINOR_MAJOR_6THS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_6THS_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_6THS_SCREEN, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_SCREEN, EAR_TRAINING_MINOR_MAJOR_7THS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_7THS_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_7THS_SCREEN, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_SCREEN, EAR_TRAINING_MINOR_MAJOR_CHORD_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_CHORD_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_CHORD_SCREEN, EAR_TRAINING_MINOR_MAJOR_SECOND_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_SECOND_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_SECOND_SCREEN, EAR_TRAINING_MINOR_MAJOR_THIRD_1_SCREEN, EAR_TRAINING_MINOR_MAJOR_THIRD_2_SCREEN, EAR_TRAINING_MINOR_MAJOR_THIRD_SCREEN, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_SCREEN, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_SCREEN, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_SCREEN, EAR_TRAINING_SCREEN, EAR_TRAINING_TRITONE_1_SCREEN, EAR_TRAINING_TRITONE_2_SCREEN, EAR_TRAINING_TRITONE_SCREEN, INTERVAL_IDENTIFICATION_SCREEN, MUSIC_THEORY_BUILDING_BLOCKS_SCREEN, MUSIC_THEORY_CHECKPOINT_I_SCREEN, MUSIC_THEORY_DIMINISHED_SCREEN, MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN, MUSIC_THEORY_DOTTED_NOTES_SCREEN, MUSIC_THEORY_ENHARMONIC_NOTES_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RDS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_SCREEN, MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4TH_AND_5THS_SCREEN, MUSIC_THEORY_EXERCISES_SCREEN, MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN, MUSIC_THEORY_HARMONY_SCREEN, MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN, MUSIC_THEORY_MAJOR_SCALE_SCREEN, MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN, MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN, MUSIC_THEORY_MINOR_MAJOR_THIRDS, MUSIC_THEORY_NOTE_DURATIONS_SCREEN, MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN, MUSIC_THEORY_RHYTHM_SCREEN, MUSIC_THEORY_SCREEN, MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN, MUSIC_THEORY_TRITONE_SCREEN, RHYTHM_SCREEN, RHYTHM_TRANSCRIPTION_SCREEN_I, RHYTHM_TRANSCRIPTION_SCREEN_II, RHYTHM_TRANSCRIPTION_SCREEN_III, RHYTHM_TRANSCRIPTION_SCREEN_IV, RHYTHM_TRANSCRIPTION_SCREEN_V, RHYTHM_TRANSCRIPTION_SCREEN_VI, SINGLE_NOTE_PERFECT_PITCH_PRACTICE_SCREEN, SINGLE_NOTE_PRACTICE_SCREEN, CUSTOM_EXERCISES_SCREEN 
} from "../../common/consts/routes";
import {
  INTERVAL_IDENTIFICATION_SUBCATEGORY,
  CHORD_IDENTIFICATION_SUBCATEGORY,
  RHYTHM_TRANSCRIPTION_SUBCATEGORY,
  MUSIC_THEORY_LESSON_SUBCATEGORY,
  ENHARMONIC_NOTES_EXERCISE_SUBCATEGORY,
  NOTE_DISTANCES_EXERCISE_SUBCATEGORY,
} from "../../common/consts/lessonSubcategoryIds";
const LESSON_CATEGORIES_DATA = {
  [EAR_TRAINING_CATEGORY_ID]: {
    title: "Ear Training",
    categoryId: EAR_TRAINING_CATEGORY_ID,
    route: EAR_TRAINING_SCREEN,
    isAvailable: true,
    backgroundColor: primary,
    boxShadow: "0px 4px 1px rgba(255, 140, 140, 0.25)",
    currentLessonIndex: 0,
    displayOrder: 0,
  },
  [MUSIC_THEORY_CATEGORY_ID]: {
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Music Theory",
    route: MUSIC_THEORY_SCREEN,
    isAvailable: true,
    backgroundColor: accentOne,
    boxShadow: "0px 4px 1px rgba(19, 39, 67, 0.25)",
    currentLessonIndex: 0,
    displayOrder: 1,
  },

  [RHYTHM_CATEGORY_ID]: {
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm",
    route: RHYTHM_SCREEN,
    isAvailable: true,
    backgroundColor: yellow,
    boxShadow: "0px 4px 1px rgba(255, 185, 2, 0.25)",
    currentLessonIndex: 0,
    displayOrder: 2,

  },
  [MUSIC_THEORY_EXERCISES_CATEGORY_ID]: {
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Theory Exercises",
    route: MUSIC_THEORY_EXERCISES_SCREEN,
    isAvailable: true,
    backgroundColor: purple,
    boxShadow: "0px 4px 1px rgba(102, 107, 167, 0.25)",
    currentLessonIndex: 0,
    displayOrder: 3,
  },
  [CUSTOM_EXERCISES_CATEGORY_ID]: {
    categoryId: CUSTOM_EXERCISES_CATEGORY_ID,
    title: "Custom Exercises",
    route: CUSTOM_EXERCISES_SCREEN,
    isAvailable: true,
    backgroundColor: secondaryLight,
    boxShadow: "0px 4px 1px rgba(19, 39, 67, 0.25)",
    currentLessonIndex: 0,
    displayOrder: 4,
    isFullWidth: true
  },
};

export const RHYTHM_TRANSCRIPTION_I_ID = "rhythm-transcription-I";
export const RHYTHM_TRANSCRIPTION_II_ID = "rhythm-transcription-II";
export const RHYTHM_TRANSCRIPTION_III_ID = "rhythm-transcription-III";
export const RHYTHM_TRANSCRIPTION_IV_ID = "rhythm-transcription-IV";
export const RHYTHM_TRANSCRIPTION_V_ID = "rhythm-transcription-V";
export const RHYTHM_TRANSCRIPTION_VI_ID = "rhythm-transcription-VI";

export const MUSIC_THEORY_BUILDING_BLOCKS_ID = "music-theory-building-blocks";
export const MUSIC_THEORY_SHARPS_AND_FLATS_ID = "music-theory-sharps-and-flats";
export const MUSIC_THEORY_NOTE_DURATIONS_ID = "music-theory-note-durations";
export const MUSIC_THEORY_RHYTHM_ID = "music-theory-rhythm-id";
export const MUSIC_THEORY_HARMONY_ID = "music-theory-harmony";
export const MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID = "music-theory-minor-major-thirds";
export const MUSIC_THEORY_DOTTED_NOTES_ID = "music-theory-dotted-notes-id";
export const MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID = "music-theory-perfect-fifth-perfect-fourth-id";
export const MUSIC_THEORY_MINOR_MAJOR_CHORD_ID = "music-theory-minor-major-chord-id";
export const MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID = "music-theory-intervals-checkpoint-one-id";
export const MUSIC_THEORY_MINOR_MAJOR_SECOND_ID = "music-theory-minor-major-second-id";
export const MUSIC_THEORY_TRITONE_ID = "music-theory-tritone-id";
export const MUSIC_THEORY_DIMINISHED_ID = "music-theory-diminished-id";
export const MUSIC_THEORY_MAJOR_SCALE_ID = "music-theory-major-scale-id";
export const MUSIC_THEORY_CHECKPOINT_I_ID = "music-theory-checkpoint-i-id";
export const MUSIC_THEORY_MINOR_MAJOR_6THS_ID = "music-theory-minor-major-6th-id";

export const MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID = "music-theory-minor-major-6th-chords-id";
export const MUSIC_THEORY_MINOR_MAJOR_7THS_ID = "music-theory-minor-major-7th-id";
export const MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID = "music-theory-minor-major-7th-chords-id";
export const MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID = "music-theory-sus-2-and-4-chords-id";
export const MUSIC_THEORY_EXTENDED_CHORDS_ID = "music-theory-extended-chords";
export const MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID = "music-theory-half-diminished-7th-chord-id";
export const MUSIC_THEORY_DOMINANT_7TH_CHORD_ID = "music-theory-dominannt-7th-chord-id";

export const MUSIC_THEORY_ENHARMONIC_NOTES_ID = "music-theory-enharmonic-notes-id";
export const MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_ID = "music-theory-exercise-note-distances-minor-major-2nd-id";
export const MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RD_ID = "music-theory-exercise-note-distances-minor-major-3rd-id";
export const MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4THS_AND_5THS_ID = "music-theory-exercise-note-distances-perfect-fourth-and-fifth-id";
export const MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_ID = "music-theory-exercise-note-distances-minor-major-6th-id";
export const MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_ID = "music-theory-exercise-note-distances-major-7th-id";

export const EAR_TRAINING_MINOR_MAJOR_SECOND_ID = "ear-training-minor-major-second-id";
export const EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID = "ear-training-minor-major-second-1-id";
export const EAR_TRAINING_MINOR_MAJOR_SECOND_2_ID = "ear-training-minor-major-second-2-id";

export const EAR_TRAINING_MINOR_MAJOR_THIRD_ID = "ear-training-minor-major-third";
export const EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID = "ear-training-minor-major-third-1";
export const EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID = "ear-training-minor-major-third-2";

export const EAR_TRAINING_TRITONE_ID = "ear-training-tritone-id";
export const EAR_TRAINING_TRITONE_1_ID = "ear-training-tritone-1-id";
export const EAR_TRAINING_TRITONE_2_ID = "ear-training-tritone-2-id";

export const EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID = "ear-training-perfect-fifth-perfect-fourth-id";
export const EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_ID = "ear-training-perfect-fifth-perfect-fourth-1-id";
export const EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_ID = "ear-training-perfect-fifth-perfect-fourth-2-id";

export const EAR_TRAINING_MINOR_MAJOR_6THS_ID = "ear-training-minor-major-6th-id";
export const EAR_TRAINING_MINOR_MAJOR_6THS_1_ID = "ear-training-minor-major-6th-1-id";
export const EAR_TRAINING_MINOR_MAJOR_6THS_2_ID = "ear-training-minor-major-6th-2-id";

export const EAR_TRAINING_MINOR_MAJOR_7THS_ID = "ear-training-minor-major-7th-id";
export const EAR_TRAINING_MINOR_MAJOR_7THS_1_ID = "ear-training-minor-major-7th-1-id";
export const EAR_TRAINING_MINOR_MAJOR_7THS_2_ID = "ear-training-minor-major-7th-2-id";

export const EAR_TRAINING_DIMINISHED_ID = "ear-training-diminished-id";
export const EAR_TRAINING_DIMINISHED_1_ID = "ear-training-diminished-1-id";
export const EAR_TRAINING_DIMINISHED_2_ID = "ear-training-diminished-2-id";

export const EAR_TRAINING_INTERVALS_BEGINNER_ID = "ear-training-intervals-beginner-id";

export const EAR_TRAINING_MINOR_MAJOR_CHORD_ID = "ear-training-minor-major-chord-id";
export const EAR_TRAINING_MINOR_MAJOR_CHORD_1_ID = "ear-training-minor-major-chord-1-id";
export const EAR_TRAINING_MINOR_MAJOR_CHORD_2_ID = "ear-training-minor-major-chord-2-id";

export const EAR_TRAINING_SUS_2_AND_4_CHORDS_ID = "ear-training-sus-2-and-4-id";
export const EAR_TRAINING_SUS_2_AND_4_CHORDS_1_ID = "ear-training-sus-2-and-4-1-id";
export const EAR_TRAINING_SUS_2_AND_4_CHORDS_2_ID = "ear-training-sus-2-and-4-2-id";

export const EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_ID = "ear-training-minor-major-6th-chords-id";
export const EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_ID = "ear-training-minor-major-6th-chords-1-id";
export const EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_ID = "ear-training-minor-major-6th-chords-2-id";

export const EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_ID = "ear-training-minor-major-7th-chords-id";
export const EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_ID = "ear-training-minor-major-7th-chords-1-id";
export const EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_ID = "ear-training-minor-major-7th-chords-2-id";

export const EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_ID = "ear-training-half-diminished-7th-chord-id";
export const EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_ID = "ear-training-half-diminished-7th-chord-1-id";
export const EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_ID = "ear-training-half-diminished-7th-chord-2-id";

export const EAR_TRAINING_DOMINANT_7TH_CHORD_ID = "ear-training-dominannt-7th-chord-id";
export const EAR_TRAINING_DOMINANT_7TH_CHORD_1_ID = "ear-training-dominannt-7th-chord-1-id";
export const EAR_TRAINING_DOMINANT_7TH_CHORD_2_ID = "ear-training-dominannt-7th-chord-2-id";

export const EAR_TRAINING_7TH_CHORDS_ID = "ear-training-7th-chords-id";

export const EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID = "single-note-identification";
export const EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID = "perfect-pitch-single-note-identification";

export const EAR_TRAINING_INTERVAL_IDENTIFICATION_ID = "interval-identification";
export const EAR_TRAINING_CHORD_IDENTIFICATION_ID = "chord-identification";

// TODO move some of this data out of firebase
const lessonsArray = [
  {
    lessonId: MUSIC_THEORY_BUILDING_BLOCKS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Music Building Blocks",
    route: MUSIC_THEORY_BUILDING_BLOCKS_SCREEN,
    description: "Learn the building blocks of music",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_SHARPS_AND_FLATS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Sharps And Flats",
    route: MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN,
    description: "Black and white keys",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    
    lessonId: MUSIC_THEORY_ENHARMONIC_NOTES_ID,
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Enharmonic Notes Exercise",
    route: MUSIC_THEORY_ENHARMONIC_NOTES_SCREEN,
    description: "Guess whether the provided notes are enharmonic or not",
    tag: "Theory Exercises",
    subCategory: ENHARMONIC_NOTES_EXERCISE_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_HARMONY_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Harmony/Intervals",
    route: MUSIC_THEORY_HARMONY_SCREEN,
    description: "Learn the building blocks of harmony",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_SECOND_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Whole/Half Steps",
    route: MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN,
    description: "The two smallest intervals",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_SECOND_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 2nd Identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_SECOND_SCREEN,
    description: "Listen and identify minor & major 2nds",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 2nd Identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_SECOND_1_SCREEN,
    description: "Listen and identify minor & major 2nds",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_SECOND_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 2nd Identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_SECOND_2_SCREEN,
    description: "Listen and identify minor & major 2nds",
    tag: "Ear Training",
    isOptional: true,
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_ID,
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Note Distances Minor & Major 2nds",
    route: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_SCREEN,
    description: "Determine what note is the given interval away from the reference",
    tag: "Theory Exercises",
    subCategory: NOTE_DISTANCES_EXERCISE_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MAJOR_SCALE_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "The Major Scale",
    route: MUSIC_THEORY_MAJOR_SCALE_SCREEN,
    description: "Introduction to scales",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_RHYTHM_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Rhythm",
    route: MUSIC_THEORY_RHYTHM_SCREEN,
    description: "Learn the building blocks of rhythm",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_NOTE_DURATIONS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Note Durations",
    route: MUSIC_THEORY_NOTE_DURATIONS_SCREEN,
    description: "Learn how note durations work",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: RHYTHM_TRANSCRIPTION_I_ID,
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm Transcription I",
    route: RHYTHM_TRANSCRIPTION_SCREEN_I,
    description: "Transcribe the played rhythm (half/quarter notes)",
    tag: "Rhythm",
    subCategory: RHYTHM_TRANSCRIPTION_SUBCATEGORY
  },
  {
    lessonId: RHYTHM_TRANSCRIPTION_II_ID,
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm Transcription II",
    route: RHYTHM_TRANSCRIPTION_SCREEN_II,
    description: "Transcribe the played rhythm (whole/half/quarter/eighth notes)",
    tag: "Rhythm",
    subCategory: RHYTHM_TRANSCRIPTION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Minor & Major 3rds",
    route: MUSIC_THEORY_MINOR_MAJOR_THIRDS,
    description: "Two common intervals",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_THIRD_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 3rds identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_THIRD_SCREEN,
    description: "Listen and identify Minor & Major 3rds",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 3rds identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_THIRD_1_SCREEN,
    description: "Listen and identify Minor & Major 3rds",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 3rds identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_THIRD_2_SCREEN,
    description: "Listen and identify Minor & Major 3rds",
    tag: "Ear Training",
    isOptional: true,
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RD_ID,
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Note Distances Minor & Major 3rds",
    route: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RDS_SCREEN,
    description: "Determine what note is the given interval away from the reference",
    tag: "Theory Exercises",
    subCategory: NOTE_DISTANCES_EXERCISE_SUBCATEGORY
  },

  {
    lessonId: MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Perfect 5th & 4ths",
    route: MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN,
    description: "Weddings and Star Wars",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY,
  },
  {
    lessonId: EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect 5th & 4ths Identification (Easy)",
    route: EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_SCREEN,
    description: "Listen and identify perfect fifth & fourths",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect 5th & 4ths Identification (Medium)",
    route: EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_SCREEN,
    description: "Listen and identify perfect fifth & fourths",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect 5th & 4ths Identification (Hard)",
    route: EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_SCREEN,
    description: "Listen and identify perfect fifth & fourths",
    tag: "Ear Training",
    isOptional: true,
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4THS_AND_5THS_ID,
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Note Distances Perfect 5th & 4ths",
    route: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4TH_AND_5THS_SCREEN,
    description: "Determine what note is the given interval away from the reference",
    tag: "Theory Exercises",
    subCategory: NOTE_DISTANCES_EXERCISE_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Intervals Review I",
    route: MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN,
    description: "Review the intervals learned so far",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_INTERVALS_BEGINNER_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Beginner Intervals Identification",
    route: EAR_TRAINING_INTERVALS_BEGINNER_SCREEN,
    description: "Practice the intervals you've learned so far",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_CHORD_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Minor & Major Chords",
    route: MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN,
    description: "Learn about minor & major chords",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_CHORD_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major Chords Identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_CHORD_SCREEN,
    description: "Listen and identify minor & major triad chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_CHORD_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major Chords Identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_CHORD_1_SCREEN,
    description: "Listen and identify minor & major triad chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_CHORD_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major Chords Identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_CHORD_2_SCREEN,
    description: "Listen and identify minor & major triad chords",
    tag: "Ear Training",
    isOptional: true,
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_CHECKPOINT_I_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Turn Music Theory Into Music",
    route: MUSIC_THEORY_CHECKPOINT_I_SCREEN,
    description: "Learn and apply all you've learned so far",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_TRITONE_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "The Tritone Interval",
    route: MUSIC_THEORY_TRITONE_SCREEN,
    description: "The evil interval",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_TRITONE_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect 4th, 5ths, & Tritones Identification (Easy)",
    route: EAR_TRAINING_TRITONE_SCREEN,
    description: "Identify perfect 4th, 5th, and tritone intervals",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_TRITONE_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect 4th, 5ths, & Tritones Identification (Medium)",
    route: EAR_TRAINING_TRITONE_1_SCREEN,
    description: "Identify perfect 4th, 5th, and tritone intervals",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_TRITONE_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect 4th, 5ths, & Tritones Identification (Hard)",
    route: EAR_TRAINING_TRITONE_2_SCREEN,
    description: "Identify perfect 4th, 5th, and tritone intervals",
    tag: "Ear Training",
    isOptional: true,
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_DIMINISHED_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "The Diminished Chord",
    route: MUSIC_THEORY_DIMINISHED_SCREEN,
    description: "The spooky chord",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_DIMINISHED_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor, Major, & Diminished Chords (Easy)",
    route: EAR_TRAINING_DIMINISHED_SCREEN,
    description: "Identify Minor, Major, & Diminished Chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_DIMINISHED_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor, Major, & Diminished Chords (Medium)",
    route: EAR_TRAINING_DIMINISHED_1_SCREEN,
    description: "Identify Minor, Major, & Diminished Chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_DIMINISHED_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor, Major, & Diminished Chords (Hard)",
    route: EAR_TRAINING_DIMINISHED_2_SCREEN,
    description: "Identify Minor, Major, & Diminished Chords",
    tag: "Ear Training",
    isOptional: true,
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },

  // {
  //   lessonId: MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID,
  //   categoryId: MUSIC_THEORY_CATEGORY_ID,
  //   title: "Sus2 & Sus4 Chords",
  //   route: MUSIC_THEORY_SUS_2_AND_4_CHORDS_SCREEN,
  //   description: "Learn about suspended chords",
  //   tag: "Music Theory",
  // },
  // {
  //   lessonId: EAR_TRAINING_SUS_2_AND_4_CHORDS_ID,
  //   categoryId: EAR_TRAINING_CATEGORY_ID,
  //   title: "Sus2 & Sus4 Chords Identification",
  //   route: EAR_TRAINING_SUS_2_AND_4_CHORDS_SCREEN,
  //   description: "Identify sus2 & sus4 chords",
  //   tag: "Ear Training",
  // },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_6THS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Minor & Major 6th Intervals",
    route: MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN,
    description: "Learn about minor and major 6th intervals",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_6THS_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 6th Interval Identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_6THS_SCREEN,
    description: "Identify minor & major 6th intervals",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_6THS_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 6th Interval Identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_6THS_1_SCREEN,
    description: "Identify minor & major 6th intervals",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_6THS_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 6th Interval Identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_6THS_2_SCREEN,
    description: "Identify minor & major 6th intervals",
    tag: "Ear Training",
    isOptional: true,
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_ID,
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Note Distances Minor & Major 6ths",
    route: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_SCREEN,
    description: "Determine what note is the given interval away from the reference",
    tag: "Theory Exercises",
    subCategory: NOTE_DISTANCES_EXERCISE_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Minor & Major 6th Chords",
    route: MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN,
    description: "Learn about minor and major 6th chords",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 6th Chords Identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_SCREEN,
    description: "Identify minor & major 6th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 6th Chords Identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_SCREEN,
    description: "Identify minor & major 6th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 6th Chords Identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_SCREEN,
    description: "Identify minor & major 6th chords",
    tag: "Ear Training",
    isOptional: true,
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_7THS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Minor & Major 7th Intervals",
    route: MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN,
    description: "Learn about minor and major 7th intervals",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_7THS_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 7th Interval Identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_7THS_SCREEN,
    description: "Identify minor & major 7th intervals",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_7THS_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 7th Interval Identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_7THS_1_SCREEN,
    description: "Identify minor & major 7th intervals",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_7THS_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 7th Interval Identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_7THS_2_SCREEN,
    description: "Identify minor & major 7th intervals",
    tag: "Ear Training",
    isOptional: true,
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_ID,
    categoryId: MUSIC_THEORY_EXERCISES_CATEGORY_ID,
    title: "Note Distances Minor & Major 7ths",
    route: MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_SCREEN,
    description: "Determine what note is the given interval away from the reference",
    tag: "Theory Exercises",
    subCategory: NOTE_DISTANCES_EXERCISE_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Minor & Major 7th Chords",
    route: MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN,
    description: "Learn about minor and major 7th chords",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 7th Chords Identification (Easy)",
    route: EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_SCREEN,
    description: "Identify minor & major 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 7th Chords Identification (Medium)",
    route: EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_SCREEN,
    description: "Identify minor & major 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Minor & Major 7th Chords Identification (Hard)",
    route: EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_SCREEN,
    description: "Identify minor & major 7th chords",
    tag: "Ear Training",
    isOptional: true,
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Half Diminished 7th Chord",
    route: MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN,
    description: "Learn about half diminished 7th chord",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Half Diminished 7th Chord Identification (Easy)",
    route: EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_SCREEN,
    description: "Identify diminished 7th chords along with major/minor 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Half Diminished 7th Chord Identification (Medium)",
    route: EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_SCREEN,
    description: "Identify diminished 7th chords along with major/minor 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Half Diminished 7th Chord Identification (Hard)",
    route: EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_SCREEN,
    description: "Identify diminished 7th chords along with major/minor 7th chords",
    tag: "Ear Training",
    isOptional: true,
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_DOMINANT_7TH_CHORD_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Dominant 7th Chord",
    route: MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN,
    description: "Learn about dominant 7th chord",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_DOMINANT_7TH_CHORD_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Dominant 7th Chord Identification (Easy)",
    route: EAR_TRAINING_DOMINANT_7TH_CHORD_SCREEN,
    description: "Identify dominant 7th chords along with major/minor 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_DOMINANT_7TH_CHORD_1_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Dominant 7th Chord Identification (Medium)",
    route: EAR_TRAINING_DOMINANT_7TH_CHORD_1_SCREEN,
    description: "Identify dominant 7th chords along with major/minor 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_DOMINANT_7TH_CHORD_2_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Dominant 7th Chord Identification (Hard)",
    route: EAR_TRAINING_DOMINANT_7TH_CHORD_2_SCREEN,
    description: "Identify dominant 7th chords along with major/minor 7th chords",
    tag: "Ear Training",
    isOptional: true,
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_7TH_CHORDS_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "7th Chord Identification",
    route: EAR_TRAINING_7TH_CHORD_SCREEN,
    description: "Identify all 7th chords",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: MUSIC_THEORY_DOTTED_NOTES_ID,
    categoryId: MUSIC_THEORY_CATEGORY_ID,
    title: "Dotted Notes",
    route: MUSIC_THEORY_DOTTED_NOTES_SCREEN,
    description: "Longer than usual notes",
    tag: "Music Theory",
    subCategory: MUSIC_THEORY_LESSON_SUBCATEGORY
  },
  {
    lessonId: RHYTHM_TRANSCRIPTION_III_ID,
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm Transcription III",
    route: RHYTHM_TRANSCRIPTION_SCREEN_III,
    description: "Transcribe the played rhythm (dotted half/quarter notes)",
    tag: "Rhythm",
    subCategory: RHYTHM_TRANSCRIPTION_SUBCATEGORY
  },
  {
    lessonId: RHYTHM_TRANSCRIPTION_IV_ID,
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm Transcription IV",
    route: RHYTHM_TRANSCRIPTION_SCREEN_IV,
    description: "Transcribe the played rhythm (dotted half/quarter/eighth notes)",
    tag: "Rhythm",
    subCategory: RHYTHM_TRANSCRIPTION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_INTERVAL_IDENTIFICATION_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Advanced Interval Identification",
    route: INTERVAL_IDENTIFICATION_SCREEN,
    description: "Listen and identify the played interval",
    tag: "Ear Training",
    subCategory: INTERVAL_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_CHORD_IDENTIFICATION_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Advanced Chord Tone Identification",
    route: CHORD_QUALITY_SCREEN,
    description: "Listen and identify the played chord",
    tag: "Ear Training",
    subCategory: CHORD_IDENTIFICATION_SUBCATEGORY
  },
  {
    lessonId: RHYTHM_TRANSCRIPTION_V_ID,
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm Transcription V",
    route: RHYTHM_TRANSCRIPTION_SCREEN_V,
    description: "Transcribe the played rhythm (half/quarter/eighth notes. 4 Notes!)",
    tag: "Rhythm",
    subCategory: RHYTHM_TRANSCRIPTION_SUBCATEGORY
  },
  {
    lessonId: RHYTHM_TRANSCRIPTION_VI_ID,
    categoryId: RHYTHM_CATEGORY_ID,
    title: "Rhythm Transcription VI",
    route: RHYTHM_TRANSCRIPTION_SCREEN_VI,
    description: "Transcribe the played rhythm (whole/half/quarter/eighth notes. 5 Notes!)",
    tag: "Rhythm",
    subCategory: RHYTHM_TRANSCRIPTION_SUBCATEGORY
  },
  {
    lessonId: EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Relative Pitch Note Identification",
    route: SINGLE_NOTE_PRACTICE_SCREEN,
    description: "Listen and identify the played note",
    tag: "Ear Training",
    subCategory: SINGLE_NOTE_IDENTIFICATION_SUBCATEGORY
  },
  {
    
    lessonId: EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: "Perfect Pitch Note Identification",
    route: SINGLE_NOTE_PERFECT_PITCH_PRACTICE_SCREEN,
    description: "Listen and identify the played note without a reference note",
    tag: "Ear Training",
    subCategory: SINGLE_NOTE_IDENTIFICATION_SUBCATEGORY

  },
];

// display idea is place in array
const LESSONS_DATA = Object.values(lessonsArray).reduce((lessons, lesson, i) => {
  return { ...lessons, ...{ [lesson.lessonId]: { ...lesson, ...{ displayOrder: i } } } };
}, {});

export const setupAppLessons = (firebase) => {
  firebase.database().ref("app/lessonCategories/").set(LESSON_CATEGORIES_DATA);
  firebase.database().ref("app/lessons/").set(LESSONS_DATA);
};

// this is the model for the user progress data on firebase
const LESSONS_PROGRESS_DATA = Object.values(LESSONS_DATA)
  .reduce((lessons, { lessonId }) => {
    return ({
      ...lessons,
      ...{
        [lessonId]: {
          lessonId,
          started: false,
          finished: false,
        } 
      }
    });
  }, {});

export const setupNewAccount = (firebase, auth) => async () => {
  // setupAppLessons(firebase);
  // check if user exists
  const userRef = firebase.database().ref(`${USERS}/${auth.uid}`);
  const userSnap = await userRef.once("value");
  const userExists = userSnap.exists();
  
  // no need to call firebase stuff since user already exists
  if (userExists) {
    return Promise.resolve();
  }

  // setting some defaults here because firebase doesn't like undefined
  const { 
    displayName = "",
    email = "",
    emailVerified = false,
    photoURL = "",
    providerData = {}
  } = auth;

  const authInfoToSave = {
    displayName,
    email,
    emailVerified,
    photoURL,
    providerData
  };

  try {
    // Create a user progress object for each lesson
    // Save some of the auth info that google login returns
    // ^ this will probably change in the future when we add new forms of login
    firebase.database().ref(`${LESSONS_PROGRESS}/${auth.uid}`).set(LESSONS_PROGRESS_DATA);
    firebase.database().ref(`${USERS}/${auth.uid}`).set(authInfoToSave);
  } catch (e) {
    // TODO catch errors in modal
    console.log(e);
  }

  return Promise.resolve();
};