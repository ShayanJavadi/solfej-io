
import {
  EAR_TRAINING_INTERVALS_BEGINNER_ID, EAR_TRAINING_INTERVAL_IDENTIFICATION_ID, EAR_TRAINING_MINOR_MAJOR_6THS_ID, EAR_TRAINING_MINOR_MAJOR_7THS_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_ID, EAR_TRAINING_MINOR_MAJOR_THIRD_ID, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID, EAR_TRAINING_TRITONE_ID, EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID, EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_ID, EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_2_ID, EAR_TRAINING_TRITONE_1_ID, EAR_TRAINING_TRITONE_2_ID, EAR_TRAINING_MINOR_MAJOR_7THS_2_ID, EAR_TRAINING_MINOR_MAJOR_7THS_1_ID, EAR_TRAINING_MINOR_MAJOR_6THS_2_ID, EAR_TRAINING_MINOR_MAJOR_6THS_1_ID 
} from "../../store/firebase/accountSetup";
import { TWELVE_TONE_NOTES, INTERVALS_DISPLAY_NAMES, INTERVALS_THEORY_NAMES } from "./twelveToneConsts";
import { sample, capitalize } from "lodash";
import {
  ROOT_NOTE_MODE_RANGE, ROOT_NOTE_MODE_FIXED, OCTAVE_RANGE, ROOT_NOTE_MODES 
} from "./earTrainingLessonCommonOptions";

export const PLAY_MODE_ASCENDING = "ascending";
export const PLAY_MODE_DESCENDING = "descending";
export const PLAY_MODE_HARMONIC = "harmonic";
export const PLAY_MODE_ASC_HARMONIC = "ascending then harmonic";
export const PLAY_MODE_DSC_HARMONIC = "descending then harmonic";
export const PLAY_SPEED_SLOW = "slow";
export const PLAY_SPEED_NORMAL = "normal";
export const PLAY_SPEED_FAST = "fast";
export const PLAY_SPEED_FASTER = "faster";

export const EAR_TRAINING_INTERVAL_IDENTIFICATION_PLAY_SPEEDS = {
  [PLAY_SPEED_SLOW]: 1500,
  [PLAY_SPEED_NORMAL]: 1000,
  [PLAY_SPEED_FAST]: 500,
  [PLAY_SPEED_FASTER]: 250,
};

export const EAR_TRAINING_INTERVAL_IDENTIFICATION_GET_PLAYABLE_SOUNDS_FUNCTIONS = {
  [PLAY_MODE_ASCENDING]: (referenceNote, noteToGuess) => ([
    [referenceNote],
    [noteToGuess],
  ]),
  [PLAY_MODE_DESCENDING]: (referenceNote, noteToGuess) => ([
    [noteToGuess],
    [referenceNote],
  ]),
  [PLAY_MODE_HARMONIC]: (referenceNote, noteToGuess) => ([
    [referenceNote, noteToGuess]
  ]),
  [PLAY_MODE_ASC_HARMONIC]: (referenceNote, noteToGuess) => ([
    [referenceNote],
    [noteToGuess],
    [referenceNote, noteToGuess]
  ]),
  [PLAY_MODE_DSC_HARMONIC]: (referenceNote, noteToGuess) => ([
    [noteToGuess],
    [referenceNote],
    [referenceNote, noteToGuess]
  ]),
};

export const INTERVALS_VALUE_LABEL = [
  { value: "1P", label: "Unison" },
  { value: "1A", label: "Minor 2nd" },
  { value: "2M", label: "Major 2nd" },
  { value: "3m", label: "Minor 3rd" },
  { value: "3M", label: "Major 3rd" },
  { value: "4P", label: "Perfect 4th" },
  { value: "4A", label: "Tritone" },
  { value: "5P", label: "Perfect 5th" },
  { value: "6m", label: "Minor 6th" },
  { value: "6M", label: "Major 6th" },
  { value: "7m", label: "Minor 7th" },
  { value: "7M", label: "Major 7th" },
  { value: "8P", label: "Octave" }
];

export const EAR_TRAINING_INTERVAL_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS = {
  intervals: INTERVALS_VALUE_LABEL,
  playModes: [
    {
      value: PLAY_MODE_HARMONIC,
      label: "Both Notes"
    },
    {
      value: PLAY_MODE_ASCENDING,
      label: "Ascending"
    },
    {
      value: PLAY_MODE_DESCENDING,
      label: "Descending"
    },
    {
      value: PLAY_MODE_ASC_HARMONIC,
      label: "Ascending Then Both Notes"
    },
    {
      value: PLAY_MODE_DSC_HARMONIC,
      label: "Descending Then Both Notes"
    }
  ],
  rootNoteModes: ROOT_NOTE_MODES,
  playSpeeds: [
    {
      value: PLAY_SPEED_SLOW,
      label: capitalize(PLAY_SPEED_SLOW)
    },
    {
      value: PLAY_SPEED_NORMAL,
      label: capitalize(PLAY_SPEED_NORMAL)
    },
    {
      value: PLAY_SPEED_FAST,
      label: capitalize(PLAY_SPEED_FAST)
    },
    {
      value: PLAY_SPEED_FASTER,
      label: capitalize(PLAY_SPEED_FASTER)
    }
  ],
  octaveRange: OCTAVE_RANGE,
  referenceNoteRange: TWELVE_TONE_NOTES,
};

export const defaultPlaybleSoundsFunction = (referenceNote, noteToGuess) => sample([
  [
    [referenceNote],
    [noteToGuess],
    [referenceNote, noteToGuess]
  ],
  [
    [noteToGuess],
    [referenceNote],
    [referenceNote, noteToGuess]
  ],
]);
// noteRange here really means C + what notes. *facepalm*
const EASY_LESSON_OPTIONS = {
  octavesRange: [3],
  wrongAnswerPenalty: 1,
  referenceNoteRange: ["C"],
  getPlayableSounds: (referenceNote, noteToGuess) => [
    [referenceNote],
    [noteToGuess],
    [referenceNote, noteToGuess]
  ]
};

const MEDIUM_LESSON_OPTIONS = {
  octavesRange: [2, 3],
  wrongAnswerPenalty: 1,
  referenceNoteRange: TWELVE_TONE_NOTES,
  getPlayableSounds: (referenceNote, noteToGuess) => sample([
    [
      [referenceNote],
      [noteToGuess],
      [referenceNote, noteToGuess]
    ],
    [
      [noteToGuess],
      [referenceNote],
      [referenceNote, noteToGuess]
    ],
  ])
};

const HARD_LESSON_OPTIONS = {
  octavesRange: [1, 2, 3, 4],
  wrongAnswerPenalty: 2,
  referenceNoteRange: TWELVE_TONE_NOTES,
  getPlayableSounds: (referenceNote, noteToGuess) => sample([
    [
      [referenceNote],
      [noteToGuess],
    ],
    [
      [noteToGuess],
      [referenceNote],
    ],
  ])
};

export const EAR_TRAINING_INTERVAL_IDENTIFICATION_OPTIONS = {
  [EAR_TRAINING_INTERVAL_IDENTIFICATION_ID]: {
    intervals: INTERVALS_THEORY_NAMES,
    choices: INTERVALS_DISPLAY_NAMES,
    ...HARD_LESSON_OPTIONS
  },
  [EAR_TRAINING_MINOR_MAJOR_THIRD_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["3m", "3M"],
    choices: [
      "Minor 3rd",
      "Major 3rd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["3m", "3M"],
    choices: [
      "Minor 3rd",
      "Major 3rd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["3m", "3M"],
    choices: [
      "Minor 3rd",
      "Major 3rd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_THIRD_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["3m", "3M"],
    choices: [
      "Minor 3rd",
      "Major 3rd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_THIRD_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["3m", "3M"],
    choices: [
      "Minor 3rd",
      "Major 3rd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_THIRD_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["3m", "3M"],
    choices: [
      "Minor 3rd",
      "Major 3rd",
    ]
  },
  [EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["4P", "5P"],
    choices: [
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["4P", "5P"],
    choices: [
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["4P", "5P"],
    choices: [
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_SECOND_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["2m", "2M"],
    choices: [
      "Minor 2nd",
      "Major 2nd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["2m", "2M"],
    choices: [
      "Minor 2nd",
      "Major 2nd",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_SECOND_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["2m", "2M"],
    choices: [
      "Minor 2nd",
      "Major 2nd",
    ]
  },
  [EAR_TRAINING_INTERVALS_BEGINNER_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["3m", "3M", "4P", "5P", "2m", "2M"],
    choices: [
      "Minor 2nd",
      "Major 2nd",
      "Minor 3rd",
      "Major 3rd",
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_TRITONE_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["4P", "5P", "4A"],
    choices: [
      "Tritone",
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_TRITONE_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["4P", "5P", "4A"],
    choices: [
      "Tritone",
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_TRITONE_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["4P", "5P", "4A"],
    choices: [
      "Tritone",
      "Perfect 4th",
      "Perfect 5th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_6THS_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["6m", "6M"],
    choices: [
      "Minor 6th",
      "Major 6th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_6THS_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["6m", "6M"],
    choices: [
      "Minor 6th",
      "Major 6th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_6THS_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["6m", "6M"],
    choices: [
      "Minor 6th",
      "Major 6th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_7THS_ID]: {
    ...EASY_LESSON_OPTIONS,
    intervals: ["7m", "7M"],
    choices: [
      "Minor 7th",
      "Major 7th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_7THS_1_ID]: {
    ...MEDIUM_LESSON_OPTIONS,
    intervals: ["7m", "7M"],
    choices: [
      "Minor 7th",
      "Major 7th",
    ]
  },
  [EAR_TRAINING_MINOR_MAJOR_7THS_2_ID]: {
    ...HARD_LESSON_OPTIONS,
    intervals: ["7m", "7M"],
    choices: [
      "Minor 7th",
      "Major 7th",
    ]
  }
};
