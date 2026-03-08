import {
  EAR_TRAINING_CHORD_IDENTIFICATION_ID, EAR_TRAINING_MINOR_MAJOR_CHORD_ID, EAR_TRAINING_DIMINISHED_ID, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_ID, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_ID, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_ID, EAR_TRAINING_DOMINANT_7TH_CHORD_ID, EAR_TRAINING_7TH_CHORDS_ID, EAR_TRAINING_MINOR_MAJOR_CHORD_1_ID, EAR_TRAINING_MINOR_MAJOR_CHORD_2_ID, EAR_TRAINING_DIMINISHED_1_ID, EAR_TRAINING_DIMINISHED_2_ID, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_ID, EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_ID, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_ID, EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_ID, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_ID, EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_ID, EAR_TRAINING_DOMINANT_7TH_CHORD_2_ID, EAR_TRAINING_DOMINANT_7TH_CHORD_1_ID 
} from "../../store/firebase/accountSetup";
import { TWELVE_TONE_NOTES } from "./twelveToneConsts";
import { OCTAVE_RANGE, ROOT_NOTE_MODES } from "./earTrainingLessonCommonOptions";

export const CHORDS = {
  "major": {
    displayName: "Major",
    machineName: "major",
    intervals: ["1P", "3M", "5P"],
  },
  "minor": {
    displayName: "Minor",
    machineName: "minor",
    intervals: ["1P", "3m", "5P"],
  },
  "diminished": {
    displayName: "Diminished",
    machineName: "diminished",
    intervals: ["1P", "3m", "5d"],
  },
  "suspended 2nd": {
    displayName: "Suspended 2nd",
    machineName: "suspended 2nd",
    intervals: ["1P", "2M", "5P"],
  },
  "suspended 4th": {
    displayName: "Suspended 4th",
    machineName: "suspended 4th",
    intervals: ["1P", "4P", "5P"],
  },
  "minor sixth": {
    displayName: "Minor 6th",
    machineName: "minor sixth",
    intervals: ["1P", "3m", "5P", "6M"],
  },
  "sixth": {
    displayName: "Major 6th",
    machineName: "sixth",
    intervals: ["1P", "3M", "5P", "6M"],
  },
  "major 7th": {
    displayName: "Major 7th",
    machineName: "major 7th",
    intervals: ["1P", "3M", "5P", "7M"],
  },
  "minor 7th": {
    displayName: "Minor 7th",
    machineName: "minor 7th",
    intervals: ["1P", "3m", "5P", "7m"],
  },
  "augmented seventh": {
    displayName: "Augmented 7th",
    machineName: "augmented seventh",
    intervals: ["1P", "3M", "5A", "7M"],
  },
  "half-diminished": {
    displayName: "Half-Diminished 7th",
    machineName: "half-diminished",
    intervals: ["1P", "3m", "5d", "7m"],
  },
  "dominant seventh": {
    displayName: "Dominant 7th",
    machineName: "dominant seventh",
    intervals: ["1P", "3M", "5P", "7m"],
  }
};

export const CHORDS_VALUE_LABEL = Object.values(CHORDS)
  .map(({ displayName, machineName }) => ({ value: machineName, label: displayName }));

export const EAR_TRAINING_CHORD_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS = {
  chords: CHORDS_VALUE_LABEL,
  rootNoteModes: ROOT_NOTE_MODES,
  octaveRange: OCTAVE_RANGE,
  referenceNoteRange: TWELVE_TONE_NOTES,
};

const EASY_LESSON_OPTIONS = {
  octavesRange: [3],
  wrongAnswerPenalty: 1,
  referenceNoteRange: ["C"]
};

const MEDIUM_LESSON_OPTIONS = {
  octavesRange: [2, 3],
  wrongAnswerPenalty: 1,
  referenceNoteRange: TWELVE_TONE_NOTES
};

const HARD_LESSON_OPTIONS = {
  octavesRange: [1, 2, 3, 4],
  wrongAnswerPenalty: 2,
  referenceNoteRange: TWELVE_TONE_NOTES
};

export const CHORD_QUALITY_CHOICES =  {
  [EAR_TRAINING_MINOR_MAJOR_CHORD_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
    },
    ...EASY_LESSON_OPTIONS,
  },
  [EAR_TRAINING_MINOR_MAJOR_CHORD_1_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
    },
    ...MEDIUM_LESSON_OPTIONS,
  },
  [EAR_TRAINING_MINOR_MAJOR_CHORD_2_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
    },
    ...HARD_LESSON_OPTIONS,
  },
  [EAR_TRAINING_DIMINISHED_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
      "diminished": {
        displayName: "Diminished",
        machineName: "diminished",
        intervals: ["1P", "3m", "5d"],
      },
    },
    ...EASY_LESSON_OPTIONS,
  },
  [EAR_TRAINING_DIMINISHED_1_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
      "diminished": {
        displayName: "Diminished",
        machineName: "diminished",
        intervals: ["1P", "3m", "5d"],
      },
    },
    ...MEDIUM_LESSON_OPTIONS,
  },
  [EAR_TRAINING_DIMINISHED_2_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
      "diminished": {
        displayName: "Diminished",
        machineName: "diminished",
        intervals: ["1P", "3m", "5d"],
      },
    },
    ...HARD_LESSON_OPTIONS,
  },
  [EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_ID]: {
    chords: {
      "minor sixth": {
        displayName: "Minor 6th",
        machineName: "minor sixth",
        intervals: ["1P", "3m", "5P", "6M"],
      },
      "sixth": {
        displayName: "Major 6th",
        machineName: "sixth",
        intervals: ["1P", "3M", "5P", "6M"],
      },
    },
    ...EASY_LESSON_OPTIONS
  },
  [EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_1_ID]: {
    chords: {
      "minor sixth": {
        displayName: "Minor 6th",
        machineName: "minor sixth",
        intervals: ["1P", "3m", "5P", "6M"],
      },
      "sixth": {
        displayName: "Major 6th",
        machineName: "sixth",
        intervals: ["1P", "3M", "5P", "6M"],
      },
    },
    ...MEDIUM_LESSON_OPTIONS
  },
  [EAR_TRAINING_MINOR_MAJOR_6TH_CHORDS_2_ID]: {
    chords: {
      "minor sixth": {
        displayName: "Minor 6th",
        machineName: "minor sixth",
        intervals: ["1P", "3m", "5P", "6M"],
      },
      "sixth": {
        displayName: "Major 6th",
        machineName: "sixth",
        intervals: ["1P", "3M", "5P", "6M"],
      },
    },
    ...HARD_LESSON_OPTIONS
  },
  [EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
    },
    ...EASY_LESSON_OPTIONS
  },
  [EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_1_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
    },
    ...MEDIUM_LESSON_OPTIONS
  },
  [EAR_TRAINING_MINOR_MAJOR_7TH_CHORDS_2_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
    },
    ...HARD_LESSON_OPTIONS
  },
  [EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "half-diminished": {
        displayName: "Half-Diminished 7th",
        machineName: "half-diminished",
        intervals: ["1P", "3m", "5d", "7m"],
      },
    },
    ...EASY_LESSON_OPTIONS
  },
  [EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_1_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "half-diminished": {
        displayName: "Half-Diminished 7th",
        machineName: "half-diminished",
        intervals: ["1P", "3m", "5d", "7m"],
      },
    },
    ...MEDIUM_LESSON_OPTIONS
  },
  [EAR_TRAINING_HALF_DIMINISHED_7TH_CHORD_2_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "half-diminished": {
        displayName: "Half-Diminished 7th",
        machineName: "half-diminished",
        intervals: ["1P", "3m", "5d", "7m"],
      },
    },
    ...HARD_LESSON_OPTIONS
  },
  [EAR_TRAINING_DOMINANT_7TH_CHORD_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "dominant seventh": {
        displayName: "Dominant 7th",
        machineName: "dominant seventh",
        intervals: ["1P", "3M", "5P", "7m"],
      }
    },
    ...EASY_LESSON_OPTIONS
  },
  [EAR_TRAINING_DOMINANT_7TH_CHORD_1_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "dominant seventh": {
        displayName: "Dominant 7th",
        machineName: "dominant seventh",
        intervals: ["1P", "3M", "5P", "7m"],
      }
    },
    ...MEDIUM_LESSON_OPTIONS
  },
  [EAR_TRAINING_DOMINANT_7TH_CHORD_2_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "dominant seventh": {
        displayName: "Dominant 7th",
        machineName: "dominant seventh",
        intervals: ["1P", "3M", "5P", "7m"],
      }
    },
    ...HARD_LESSON_OPTIONS
  },
  [EAR_TRAINING_7TH_CHORDS_ID]: {
    chords: {
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "dominant seventh": {
        displayName: "Dominant 7th",
        machineName: "dominant seventh",
        intervals: ["1P", "3M", "5P", "7m"],
      },
      "half-diminished": {
        displayName: "Half-Diminished 7th",
        machineName: "half-diminished",
        intervals: ["1P", "3m", "5d", "7m"],
      },
    },
    ...MEDIUM_LESSON_OPTIONS
  },
  [EAR_TRAINING_CHORD_IDENTIFICATION_ID]: {
    chords: {
      "major": {
        displayName: "Major",
        machineName: "major",
        intervals: ["1P", "3M", "5P"],
      },
      "minor": {
        displayName: "Minor",
        machineName: "minor",
        intervals: ["1P", "3m", "5P"],
      },
      "diminished": {
        displayName: "Diminished",
        machineName: "diminished",
        intervals: ["1P", "3m", "5d"],
      },
      "suspended 2nd": {
        displayName: "Suspended 2nd",
        machineName: "suspended 2nd",
        intervals: ["1P", "2M", "5P"],
      },
      "suspended 4th": {
        displayName: "Suspended 4th",
        machineName: "suspended 4th",
        intervals: ["1P", "4P", "5P"],
      },
      "minor sixth": {
        displayName: "Minor 6th",
        machineName: "minor sixth",
        intervals: ["1P", "3m", "5P", "6M"],
      },
      "sixth": {
        displayName: "Major 6th",
        machineName: "sixth",
        intervals: ["1P", "3M", "5P", "6M"],
      },
      "major 7th": {
        displayName: "Major 7th",
        machineName: "major 7th",
        intervals: ["1P", "3M", "5P", "7M"],
      },
      "minor 7th": {
        displayName: "Minor 7th",
        machineName: "minor 7th",
        intervals: ["1P", "3m", "5P", "7m"],
      },
      "augmented seventh": {
        displayName: "Augmented 7th",
        machineName: "augmented seventh",
        intervals: ["1P", "3M", "5A", "7M"],
      },
      "half-diminished": {
        displayName: "Half-Diminished 7th",
        machineName: "half-diminished",
        intervals: ["1P", "3m", "5d", "7m"],
      },
      "dominant seventh": {
        displayName: "Dominant 7th",
        machineName: "dominant seventh",
        intervals: ["1P", "3M", "5P", "7m"],
      }
    },
    ...HARD_LESSON_OPTIONS,
  }
};