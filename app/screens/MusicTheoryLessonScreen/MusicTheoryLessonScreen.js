
import React, { useState, useEffect } from "react";
import Tone from "tone";
import "./MusicTheoryLessonScreen.scss";
import Screen from "../../common/components/Screen/Screen";
import BuildingBlocks from "./lessons/BuildingBlocks";
import NoteDurations from "./lessons/NoteDurations";
import Button from "../../common/components/Button/Button";
import {
  MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_NOTE_DURATIONS_ID, MUSIC_THEORY_HARMONY_ID, MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID, MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID, MUSIC_THEORY_MINOR_MAJOR_CHORD_ID, MUSIC_THEORY_MINOR_MAJOR_SECOND_ID, MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID, MUSIC_THEORY_DIMINISHED_ID, MUSIC_THEORY_TRITONE_ID, MUSIC_THEORY_MAJOR_SCALE_ID, MUSIC_THEORY_CHECKPOINT_I_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID, MUSIC_THEORY_RHYTHM_ID, MUSIC_THEORY_DOTTED_NOTES_ID, MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID, MUSIC_THEORY_MINOR_MAJOR_6THS_ID, EAR_TRAINING_MINOR_MAJOR_7THS_ID, MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID, MUSIC_THEORY_MINOR_MAJOR_7THS_ID, MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID, MUSIC_THEORY_EXTENDED_CHORDS_ID, MUSIC_THEORY_DOMINANT_7TH_CHORD_ID, MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID 
} from "../../store/firebase/accountSetup";
import Harmony from "./lessons/Harmony";
import MinorAndMajorThirds from "./lessons/MinorAndMajorThirds";
import { MdArrowBack } from "react-icons/md";
import Header from "../../common/components/Header";
import ProgressBar from "../../common/components/ProgressBar";
import PerfectFourthAndFifths from "./lessons/PerfectFourthAndFifths";
import MinorAndMajorChords from "./lessons/MinorAndMajorChords";
import MinorMajorSecond from "./lessons/MinorMajorSeconds";
import IntervalsReview from "./lessons/IntervalsReview";
import DiminishedChords from "./lessons/DiminishedChords";
import TritoneInterval from "./lessons/TritoneInterval";
import { blueGray } from "../../common/consts/colors";
import useSetNotchColor from "../../common/hooks/useSetNotchColor";
import MajorScale from "./lessons/MajorScale";
import CheckpointOne from "./lessons/CheckpointOne";
import SharpsAndFlats from "./lessons/SharpsAndFlat";
import scrollUp from "../../util/browser/scrollUp";
import Rhythm from "./lessons/Rhythm";
import DottedNotes from "./lessons/DottedNotes";
import MinorAndMajor6ths from "./lessons/MinorAndMajor6ths";
import MinorAndMajor6thsChords from "./lessons/MinorAndMajor6thsChords";
import MinorAndMajor7ths from "./lessons/MinorAndMajor7ths";
import MinorAndMajor7thsChords from "./lessons/MinorAndMajor7thsChords";
import Sus2And4Chords from "./lessons/Sus2And4Chords";
import ExtendedChords from "./lessons/ExtendedChords";
import Dominant7thChords from "./lessons/Dominant7thChords";
import HalfDiminished7thChords from "./lessons/HalfDiminished7thChords";

const lessons = {
  [MUSIC_THEORY_BUILDING_BLOCKS_ID]: {
    screen: BuildingBlocks,
    pageCount: 4,
  },
  [MUSIC_THEORY_SHARPS_AND_FLATS_ID]: {
    screen: SharpsAndFlats,
    pageCount: 5,
  },
  [MUSIC_THEORY_RHYTHM_ID]: {
    screen: Rhythm,
    pageCount: 3,
  },
  [MUSIC_THEORY_NOTE_DURATIONS_ID]: {
    screen: NoteDurations,
    pageCount: 3,
  },
  [MUSIC_THEORY_HARMONY_ID]: {
    screen: Harmony,
    pageCount: 4,
  },
  [MUSIC_THEORY_MINOR_MAJOR_SECOND_ID]: {
    screen: MinorMajorSecond,
    pageCount: 7,
  },
  [MUSIC_THEORY_MAJOR_SCALE_ID]: {
    screen: MajorScale,
    pageCount: 7
  },
  [MUSIC_THEORY_CHECKPOINT_I_ID]: {
    screen: CheckpointOne,
    pageCount: 2
  },
  [MUSIC_THEORY_MINOR_MAJOR_THIRDS_ID]: {
    screen: MinorAndMajorThirds,
    pageCount: 5,
  },
  [MUSIC_THEORY_DOTTED_NOTES_ID]: {
    screen: DottedNotes,
    pageCount: 2,
  },
  [MUSIC_THEORY_PERFECT_FIFTH_PERFECT_FROUTH_ID]: {
    screen: PerfectFourthAndFifths,
    pageCount: 4
  },
  [MUSIC_THEORY_MINOR_MAJOR_CHORD_ID]: {
    screen: MinorAndMajorChords,
    pageCount: 5
  },
  [MUSIC_THEORY_INTERVALS_CHECKPOINT_ONE_ID]: {
    screen: IntervalsReview,
    pageCount: 2,
  },
  [MUSIC_THEORY_TRITONE_ID]: {
    screen: TritoneInterval,
    pageCount: 2,
  },
  [MUSIC_THEORY_DIMINISHED_ID]: {
    screen: DiminishedChords,
    pageCount: 3,
  },
  [MUSIC_THEORY_MINOR_MAJOR_6THS_ID]: {
    screen: MinorAndMajor6ths,
    pageCount: 4,
  },
  [MUSIC_THEORY_MINOR_MAJOR_6TH_CHORDS_ID]: {
    screen: MinorAndMajor6thsChords,
    pageCount: 3,
  },
  [MUSIC_THEORY_MINOR_MAJOR_7THS_ID]: {
    screen: MinorAndMajor7ths,
    pageCount: 4,
  },
  [MUSIC_THEORY_MINOR_MAJOR_7TH_CHORDS_ID]: {
    screen: MinorAndMajor7thsChords,
    pageCount: 3,
  },
  [MUSIC_THEORY_SUS_2_AND_4_CHORDS_ID]: {
    screen: Sus2And4Chords,
    pageCount: 3,
  },
  [MUSIC_THEORY_EXTENDED_CHORDS_ID]: {
    screen: ExtendedChords,
    pageCount: 3
  },
  [MUSIC_THEORY_HALF_DIMINISHED_7TH_CHORD_ID]: {
    screen: HalfDiminished7thChords,
    pageCount: 2

  },
  [MUSIC_THEORY_DOMINANT_7TH_CHORD_ID]: {
    screen: Dominant7thChords,
    pageCount: 1
  }

};

export default function MusicTheoryLessonScreen(props) {
  const [index, setIndex] = useState(0);
  
  const { screen: LessonComponent, pageCount } = lessons[props.lessonId] || {};
  const [percentageDone, setPercentageDone] = useState(((index + 1) / pageCount) * 100);
  useSetNotchColor(blueGray);

  useEffect(() => {
    document.body.classList.add("long-height-lessons");
    scrollUp();
    return () => document.body.classList.remove("long-height-lessons");
  }, []);

  const pageIndex = index + 1;
  return (
    <Screen className="music-theory-lesson-screen" hasGrayBackground>
      <Header
        headerLeftNode={
          <MdArrowBack
            size={24}
            color="#c6c6c6"
            onClick={() => props.history.goBack()}
          />
        }
        headerRightNode={
          <ProgressBar
            isOnlyGreen
            percentageFilled={percentageDone}
          />
        }
      />
      <LessonComponent index={index} instrument={props.instrument} />
      <div className="floating-buttons-container">
        {
            <>
              <Button
                text="Back"
                isTextCentered
                isGhost
                className={index === 0 && "hidden"}
                onClick={() => {
                  Tone.Transport.stop();
                  scrollUp();

                  setPercentageDone(((pageIndex - 1) / pageCount) * 100);
                  setIndex(index - 1);
                }}
              />
              <Button
                text={pageCount === pageIndex ? "Quiz" : "Next"}
                isSuccess
                isTextCentered
                onClick={() => {
                  if (pageCount === pageIndex) {
                    props.history.push(props.lessonRoute + "/quiz");
                    return;
                  }

                  Tone.Transport.stop();
                  scrollUp();
                  setPercentageDone(((pageIndex + 1) / pageCount) * 100);
                  setIndex(index + 1);
                }}
              />
            </>
        }
      </div>
    </Screen>
  );
}
