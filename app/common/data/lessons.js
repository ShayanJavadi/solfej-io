import {
  EAR_TRAINING_SCREEN, SINGLE_NOTE_PRACTICE_SCREEN, INTERVAL_IDENTIFICATION_SCREEN, CHORD_QUALITY_SCREEN 
} from "../consts/routes";
import {
  primary, secondary, yellow, accentOne 
} from "../consts/colors";

// TODO: extract box shadow out of this
export const lessonData = [
  {
    title: "Ear Training",
    route: EAR_TRAINING_SCREEN,
    isAvailable: true,
    backgroundColor: primary,
    boxShadow: "0px 4px 1px rgba(255, 181, 181, 0.25)",
    currentLesson: 1,
    lessons: [
      {
        title: "Single Note Identification",
        route: SINGLE_NOTE_PRACTICE_SCREEN,
        description: "Listen and identify the played note",
        started: true,
        finished: true,
        displayOrder: 0,
      },
      {
        title: "Interval Identification",
        route: INTERVAL_IDENTIFICATION_SCREEN,
        description: "Listen and identify the played note",
        started: false,
        finished: false,
        displayOrder: 1,
      },
      {
        title: "Chord Tone Identification",
        route: CHORD_QUALITY_SCREEN,
        description: "Listen and identify the played note",
        started: false,
        finished: false,
        displayOrder: 2,
      },
    ],
  },
  {
    title: "Music Theory",
    route: undefined,
    isAvailable: false,
    backgroundColor: secondary,
    boxShadow: "0px 4px 1px rgba(19, 39, 67, 0.25)",
    lessons: [
      {
        title: "Music Lorem I",
        route: SINGLE_NOTE_PRACTICE_SCREEN,
        started: false,
        finished: true,
      },
      {
        title: "Music Lorem II",
        route: INTERVAL_IDENTIFICATION_SCREEN,
        started: false,
        finished: true,
      },
      {
        title: "Music Lorem III",
        route: CHORD_QUALITY_SCREEN,
        started: false,
        finished: true,
      },
    ]
  },
  {
    title: "Rhythm",
    route: undefined,
    isAvailable: false,
    backgroundColor: yellow,
    boxShadow: "0px 4px 1px rgba(255, 185, 2, 0.25)",
    lessons: [
      {
        title: "Rhythm Lorem I",
        route: SINGLE_NOTE_PRACTICE_SCREEN,
        started: false,
        finished: false,
      },
      {
        title: "Rhythm Lorem II",
        route: INTERVAL_IDENTIFICATION_SCREEN,
        started: false,
        finished: false,
      },
      {
        title: "Rhythm Lorem III",
        route: CHORD_QUALITY_SCREEN,
        started: false,
        finished: false,
      },
    ]
  },
  {
    title: "Library",
    route: undefined,
    isAvailable: false,
    backgroundColor: accentOne,
    boxShadow: "0px 4px 1px rgba(19, 39, 67, 0.25)",
    isHidden: true
  },
];