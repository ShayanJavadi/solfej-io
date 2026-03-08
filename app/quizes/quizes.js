import {
  MUSIC_THEORY_BUILDING_BLOCKS_SCREEN, MUSIC_THEORY_NOTE_DURATIONS_SCREEN, MUSIC_THEORY_HARMONY_SCREEN, MUSIC_THEORY_MINOR_MAJOR_THIRDS, MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN, MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN, MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN, MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN, MUSIC_THEORY_TRITONE_SCREEN, MUSIC_THEORY_DIMINISHED_SCREEN, MUSIC_THEORY_MAJOR_SCALE_SCREEN, MUSIC_THEORY_CHECKPOINT_I_SCREEN, MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN, MUSIC_THEORY_RHYTHM_SCREEN, MUSIC_THEORY_DOTTED_NOTES_SCREEN, MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN, MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN, MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN, MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN 
} from "../common/consts/routes";
import { MUSIC_THEORY_NOTE_DURATIONS_ID, MUSIC_THEORY_RHYTHM_ID, MUSIC_THEORY_MINOR_MAJOR_6THS_ID } from "../store/firebase/accountSetup";

export default {
  [MUSIC_THEORY_BUILDING_BLOCKS_SCREEN]: {
    lessonId: MUSIC_THEORY_BUILDING_BLOCKS_SCREEN,
    questions: [
      {
        id: 0,
        title: "How many notes are in the musical alphabet?",
        choices: [
          "7",
          "12",
          "14",
          "9",
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "Harmony is how fast or slow a piece of music is.",
        choices: [
          "True",
          "False"
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "Melody is the overarching tune created by playing a succession or series of notes.",
        choices: [
          "True",
          "False"
        ],
        correctChoice: 0,
      },
      {
        id: 3,
        title: "Rhythm is the arrangement of note lengths.",
        choices: [
          "True",
          "False"
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN]: {
    lessonId: MUSIC_THEORY_SHARPS_AND_FLATS_SCREEN,
    questions: [
      {
        id: 1,
        title: "E♭ is 1 note higher than E.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "C♭ is the Enharmonic equivalent of B.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 3,
        title: "E is the Enharmonic equivalent of F♭.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_RHYTHM_SCREEN]: {
    lessonId: MUSIC_THEORY_RHYTHM_SCREEN,
    questions: [
      {
        id: 0,
        title: "A beat is the basic unit of time in music.",
        choices: [
          "true",
          "false"
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A grouping of beats is called a ___",
        choices: [
          "Unit",
          "Bar",
          "Line",
          "Tempo"
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "In music bpm stands for ___",
        choices: [
          "Bars per minute",
          "Bars per measure",
          "Beats per member",
          "Beats per minute"
        ],
        correctChoice: 3,
      },
    ]
  },
  
  [MUSIC_THEORY_NOTE_DURATIONS_SCREEN]: {
    lessonId: MUSIC_THEORY_NOTE_DURATIONS_SCREEN,
    questions: [
      {
        id: 0,
        title: "How many quarter notes is one whole note?",
        choices: [
          "1",
          "16",
          "4",
          "3",
        ],
        correctChoice: 2,
      },
      {
        id: 1,
        title: "Which one is the longest?",
        choices: [
          "Half note",
          "Whole note",
          "Quarter note",
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_HARMONY_SCREEN]: {
    lessonId: MUSIC_THEORY_HARMONY_SCREEN,
    questions: [
      {
        id: 0,
        title: "The distance between 2 notes is called a/an",
        choices: [
          "Interval",
          "Mile",
          "Arpeggio",
          "Minor",
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "Chords that sound unpleasant and harsh are called",
        choices: [
          "Dissonant",
          "Consonant",
        ],
        correctChoice: 0,
      },
      {
        id: 2,
        title: "3 or more notes played simultaneously is called a/an",
        choices: [
          "Chord",
          "Interval",
          "Fractal",
          "Scale"
        ],
        correctChoice: 0,
      },
      {
        id: 3,
        title: "An octave is an interval.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 4,
        title: "An octave is the distance of 15 notes.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_THIRDS]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_THIRDS,
    questions: [
      {
        id: 0,
        title: "A major 3rd is a/an",
        choices: [
          "Chord",
          "Interval",
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "A minor 3rd is the distance of __ half steps.",
        choices: [
          "4",
          "3",
          "2",
          "1",
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "A major 3rd is the distance of __ half steps.",
        choices: [
          "4",
          "3",
          "2",
          "1",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_MAJOR_SCALE_SCREEN]: {
    lessonId: MUSIC_THEORY_MAJOR_SCALE_SCREEN,
    questions: [
      {
        id: 0,
        title: "B major scale has a root note of",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "C major scale has no sharps or flats.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 2,
        title: "What is the formula for a major scale?",
        choices: [
          "W W H W H H W",
          "W W H H W H W",
          "W W H W W W H",
          "W W H W W H W"
        ],
        correctChoice: 2,
      },
    ]
  },
  [MUSIC_THEORY_CHECKPOINT_I_SCREEN]: {
    lessonId: MUSIC_THEORY_CHECKPOINT_I_SCREEN,
    questions: [
      {
        id: 0,
        title: "Did you experiment and play around with the concepts we've learned so far?",
        choices: [
          "Yes!",
          "No",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_DOTTED_NOTES_SCREEN]: {
    lessonId: MUSIC_THEORY_DOTTED_NOTES_SCREEN,
    questions: [
      {
        id: 0,
        title: "A dotted half note is equal to a half note + a quarter note",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A dotted note's length is the original note + twice the length of the original note",
        choices: [
          "True",
          "False"
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN]: {
    lessonId: MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_SCREEN,
    questions: [
      {
        id: 0,
        title: "A perfect 4th is a smaller interval than a perfect 5th.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A perfect 4th is the distance of __ half steps.",
        choices: [
          "5",
          "4",
          "2",
          "1",
        ],
        correctChoice: 0,
      },
      {
        id: 2,
        title: "A perfect 5th is the distance of __ half steps.",
        choices: [
          "9",
          "8",
          "7",
          "4",
        ],
        correctChoice: 2,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN,
    questions: [
      {
        id: 0,
        title: "What's the root note of an A Major triad?",
        choices: [
          "Ab",
          "A",
          "E",
          "G",
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "Which 3rd interval is used in a C Major triad?",
        choices: [
          "Major 3rd",
          "Minor 3rd",
          "Diminished 3rd",
          "Root 3rd",
        ],
        correctChoice: 0,
      },
      {
        id: 2,
        title: "How many notes are in a Triad?",
        choices: [
          "0",
          "1",
          "2",
          "3",
        ],
        correctChoice: 3,
      },
      {
        id: 3,
        title: "A C major triad has the notes C, E and",
        choices: [
          "C",
          "G",
          "B",
          "A",
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_SECOND_SCREEN]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_CHORD_SCREEN,
    questions: [
      {
        id: 0,
        title: "A minor 2nd interval is also called a",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A major 2nd interval is also called a",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "C is a ___ higher than B.",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 0,
      },
      {
        id: 3,
        title: "D is a ___ higher than C.",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN]: {
    lessonId: MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_SCREEN,
    questions: [
      {
        id: 0,
        title: "A minor 2nd interval is also called a",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A major 2nd interval is also called a",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "C is a ___ higher than B.",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 0,
      },
      {
        id: 3,
        title: "D is a ___ higher than C.",
        choices: [
          "Half step",
          "Whole step",
          "One step",
          "2nd step",
        ],
        correctChoice: 1,
      },
      {
        id: 4,
        title: "A major 3rd is a/an.",
        choices: [
          "Chord",
          "Interval",
        ],
        correctChoice: 1,
      },
      {
        id: 5,
        title: "A perfect 4th is a smaller interval than a perfect 5th.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 6,
        title: "A perfect 4th is the distance of __ half steps.",
        choices: [
          "5",
          "4",
          "2",
          "1",
        ],
        correctChoice: 0,
      },
      {
        id: 7,
        title: "A perfect 5th is the distance of __ half steps.",
        choices: [
          "9",
          "8",
          "7",
          "4",
        ],
        correctChoice: 2,
      },
      {
        id: 8,
        title: "A minor 3rd is the distance of __ half steps.",
        choices: [
          "4",
          "3",
          "2",
          "1",
        ],
        correctChoice: 1,
      },
      {
        id: 9,
        title: "A major 3rd is the distance of __ half steps.",
        choices: [
          "4",
          "3",
          "2",
          "1",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_TRITONE_SCREEN]: {
    lessonId: MUSIC_THEORY_TRITONE_SCREEN,
    questions: [
      {
        id: 0,
        title: "A tritone is the distance of __ half steps.",
        choices: [
          "6",
          "5",
          "4",
          "3",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_DIMINISHED_SCREEN]: {
    lessonId: MUSIC_THEORY_DIMINISHED_SCREEN,
    questions: [
      {
        id: 0,
        title: "A diminished triad contains a ___.",
        choices: [
          "Tritone",
          "Major 3rd",
          "Perfect 5th"
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "We've replaced the perfect 5th in a minor triad with a tritone. We now have a:",
        choices: [
          "a Major triad",
          "a Diminished triad",
          "a Perfect triad"
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_6THS_SCREEN,
    questions: [
      {
        id: 0,
        title: "A major 6th is a smaller interval than a minor 6th.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "A minor 6th is the distance of __ half steps.",
        choices: [
          "5",
          "6",
          "7",
          "8",
        ],
        correctChoice: 3,
      },
      {
        id: 2,
        title: "A major 6th is the distance of __ half steps.",
        choices: [
          "9",
          "8",
          "12",
          "4",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_7THS_SCREEN,
    questions: [
      {
        id: 0,
        title: "A major 7th is a smaller interval than a minor 7th.",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "A minor 7th is the distance of __ half steps.",
        choices: [
          "5",
          "6",
          "10",
          "8",
        ],
        correctChoice: 2,
      },
      {
        id: 2,
        title: "A major 7th is the distance of __ half steps.",
        choices: [
          "9",
          "11",
          "12",
          "4",
        ],
        correctChoice: 1,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_SCREEN,
    questions: [
      {
        id: 0,
        title: "A minor 6th chord contains a ___.",
        choices: [
          "Minor 7th",
          "Major 6th",
          "Minor 6th",
          "Major 7th"
        ],
        correctChoice: 1,
      },
      {
        id: 1,
        title: "A minor 6th chord contains a ___.",
        choices: [
          "Minor 7th",
          "Major 6th",
          "Minor 6th",
          "Major 7th"
        ],
        correctChoice: 1,
      },
      {
        id: 2,
        title: "A minor 6th chord is created from a minor triad and a minor 6th",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 1,
      },
      {
        id: 3,
        title: "A major 6th chord is created from a major triad and a major 6th",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
    ]
  },
  [MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN]: {
    lessonId: MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_SCREEN,
    questions: [
      {
        id: 0,
        title: "A minor 7th chord contains a ___.",
        choices: [
          "Minor 7th",
          "Major 6th",
          "Minor 6th",
          "Major 7th"
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A major 7th chord is created from a major triad and a major 7th",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 2,
        title: "A minor 7th chord is created from a minor triad and a minor 7th",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
      {
        id: 3,
        title: "A major 7th chord contains a ___.",
        choices: [
          "Minor 7th",
          "Major 6th",
          "Minor 6th",
          "Major 7th"
        ],
        correctChoice: 3,
      },
    ]
  },
  [MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN]: {
    lessonId: MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_SCREEN,
    questions: [
      {
        id: 0,
        title: "A half diminished 7th chord contains a ___.",
        choices: [
          "Tritone",
          "Major 3rd",
          "Major 2nd",
          "Major 7th"
        ],
        correctChoice: 0,
      },
      {
        id: 1,
        title: "A half diminished 7th chord is created from a diminished triad and ___",
        choices: [
          "Minor 7th",
          "Major 6th",
          "Minor 6th",
          "Major 7th"
        ],
        correctChoice: 0,
      },
      {
        id: 2,
        title: "A half diminished 7th chord is commonly referred to as just a half diminished chord",
        choices: [
          "True",
          "False",
        ],
        correctChoice: 0,
      },
    ],
  },
  [MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN]: {
    lessonId: MUSIC_THEORY_DOMINANT_7TH_CHORD_SCREEN,
    questions: [
      {
        id: 0,
        title: "A dominant 7th chord contains a ___.",
        choices: [
          "Tritone",
          "Minor 3rd",
          "Minor 7th"
        ],
        correctChoice: 2,
      },
      {
        id: 1,
        title: "A dominant 7th chord is created from a major triad and ___",
        choices: [
          "Minor 7th",
          "Major 6th",
          "Minor 6th",
          "Major 7th"
        ],
        correctChoice: 0,
      },

    ]
  }
};