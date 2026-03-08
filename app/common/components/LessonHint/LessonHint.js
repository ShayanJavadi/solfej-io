import React from "react";
import { isEmpty } from "lodash";
import { 
  EAR_TRAINING_CHORD_IDENTIFICATION_ID,
  EAR_TRAINING_DIMINISHED_ID,
  EAR_TRAINING_INTERVALS_BEGINNER_ID,
  EAR_TRAINING_INTERVAL_IDENTIFICATION_ID,
  EAR_TRAINING_MINOR_MAJOR_CHORD_ID,
  EAR_TRAINING_MINOR_MAJOR_SECOND_ID,
  EAR_TRAINING_MINOR_MAJOR_THIRD_ID,
  EAR_TRAINING_PERFECT_FIFTH_PERFECT_FOURTH_ID,
  EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID,
  EAR_TRAINING_TRITONE_ID,
  RHYTHM_TRANSCRIPTION_III_ID,
  RHYTHM_TRANSCRIPTION_II_ID,
  RHYTHM_TRANSCRIPTION_IV_ID,
  RHYTHM_TRANSCRIPTION_I_ID,
  RHYTHM_TRANSCRIPTION_VI_ID,
  RHYTHM_TRANSCRIPTION_V_ID,
  MUSIC_THEORY_ENHARMONIC_NOTES_ID,
  MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_ID,
  MUSIC_THEORY_SHARPS_AND_FLATS_ID,
  MUSIC_THEORY_MINOR_MAJOR_SECOND_ID,
  MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RD_ID,
  MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID,
  MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4THS_AND_5THS_ID,
  MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID,
  MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_ID,
  MUSIC_THEORY_MINOR_MAJOR_6THS_ID,
  MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_ID,
  MUSIC_THEORY_MINOR_MAJOR_7THS_ID,
} from "../../../store/firebase/accountSetup";
import NoteDistancesMinorMajor2nds from "./hints/NoteDistancesMinorMajor2nds";
import EnharmonicNotes from "./hints/EnharmonicNotes";
import { MdRestore, MdLightbulbOutline } from "react-icons/md";
import { secondary, yellow } from "../../consts/colors";
import LessonCardsContainer from "../LessonCardsContainer";
import HeaderText from "../HeaderText/HeaderText";
import NoteDistancesExerciseScreen from "../../../screens/NoteDistancesExerciseScreen";
import NoteDistancesMinorMajor3rds from "./hints/NoteDistancesMinorMajor3rds";
import NoteDistancesPerfect4thsAnd5ths from "./hints/NoteDistancesPerfect4thsAnd5ths";
import NoteDistancesMinorMajor6ths from "./hints/NoteDistancesMinorMajor6ths";
import NoteDistancesMinorMajor7ths from "./hints/NoteDistancesMinorMajor7ths";

const mapLessonIdsToHints = {
  [MUSIC_THEORY_ENHARMONIC_NOTES_ID]: {
    screen: EnharmonicNotes,
    reviewLessons: [
      MUSIC_THEORY_SHARPS_AND_FLATS_ID,
    ]
  },
  [MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_2NDS_ID]: {
    screen: NoteDistancesMinorMajor2nds,
    reviewLessons: [
      MUSIC_THEORY_MINOR_MAJOR_SECOND_ID,
    ]
  },
  [MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_3RD_ID]: {
    screen: NoteDistancesMinorMajor3rds,
    reviewLessons: [
      MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID,
    ]
  },
  [MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_PERFECT_4THS_AND_5THS_ID]: {
    screen: NoteDistancesPerfect4thsAnd5ths,
    reviewLessons: [
      MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID,
    ]
  },
  [MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_6THS_ID]: {
    screen: NoteDistancesMinorMajor6ths,
    reviewLessons: [
      MUSIC_THEORY_MINOR_MAJOR_6THS_ID,
    ]
  },
  [MUSIC_THEORY_EXERCISES_NOTE_DISTANCES_MINOR_MAJOR_7THS_ID]: {
    screen: NoteDistancesMinorMajor7ths,
    reviewLessons: [
      MUSIC_THEORY_MINOR_MAJOR_7THS_ID,
    ]
  }
};

const renderLessonsToReview = ({ lessonCategories, reviewLessons, history }) => {
  const lessonsToReview = lessonCategories
    .flatMap(category => category.lessons)
    .filter(lesson => lesson.finished && reviewLessons.includes(lesson.lessonId));

  return (
    !isEmpty(lessonCategories) && !isEmpty(lessonsToReview) &&
    <>
      <HeaderText>
        <MdRestore
          color={secondary}
        />
        Review
      </HeaderText>
      {
        <LessonCardsContainer
          isEmbedded
          onLessonClick={lesson =>  history.push(lesson.route)}
          lessons={lessonsToReview}
        />
      }
    </>
  );
};

const renderHintHeader = () => (
  <HeaderText>
    <MdLightbulbOutline
      color={yellow}
    />
    Hints
  </HeaderText>
);

export default function LessonHint({ lessonId, lessonCategories, history }) {
  const { screen: LessonHintComponent, reviewLessons } = mapLessonIdsToHints[lessonId];
  
  return (
    <LessonHintComponent 
      lessonCategories={lessonCategories}
      lessonsToReview={renderLessonsToReview({ lessonCategories, reviewLessons, history })}
      history={history}
      hintHeader={renderHintHeader()}
    />
  );
}
