import { isEmpty, isEqual } from "lodash";
import React, { Component } from "react";
import { MdArrowBack, MdReplay } from "react-icons/md";
import Header from "../../common/components/Header";
import PianoRoll from "../../common/components/PianoRoll";
import ProgressBar from "../../common/components/ProgressBar/ProgressBar";
import Screen from "../../common/components/Screen/Screen";
import SoundButton from "../../common/components/SoundButton";
import "./SingleNotePractice.scss";
import setLessonFinished from "../../store/firebase/setLessonFinished";
import Button from "../../common/components/Button/Button";
import Confetti from "../../common/components/Confetti/Confetti";
import { EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID, EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID } from "../../store/firebase/accountSetup";
import { HOME_SCREEN } from "../../common/consts/routes";
import LessonScore from "../../common/components/LessonScore";
import DotProgress from "../../common/components/DotProgress";

const NOTE_BUTTON_SIZE = 150;
class SingleNotePractice extends Component {
  state = {
    startedAt: Date.now()
  }

  onReplayButtonClick = () => {
    const {
      isQuestionStandby, loopThroughQuestionSounds, lessonId, referenceNote, noteToGuess 
    } = this.props;

    if (isQuestionStandby) {
      if (lessonId === EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID) {
        loopThroughQuestionSounds([[noteToGuess]]);
      }

      if (lessonId === EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID) {
        loopThroughQuestionSounds([[referenceNote], [noteToGuess]]);
      }
    }
  }
  
  onSoundButtonClick = noteName => this.props.onNotePlay([{ noteName, release: 2 }]);

  onChoiceClick = (clickedChoice) => {
    const { didQuestionFinish } = this.props;

    if (didQuestionFinish) {
      return;
    }

    this.props.onNotePlay([{ noteName: clickedChoice }]);

    if (clickedChoice === this.props.noteToGuess.noteName) {
      this.props.onCorrectGuess();
      return;
    }

    this.props.onWrongGuess();
  }

  componentDidUpdate(prevProps) {
    const {
      activeNotes,
      didQuestionFinish,
      loopThroughQuestionSounds,
      playableSounds,
      noteToGuess,
      referenceNote,
      lessonId,
      getNewQuestion,
      onNotePlay,
      didLessonFinish
    } = this.props;

    const shouldLoopThroughQuestionNotes = !Object.is(prevProps.noteToGuess, noteToGuess);
    const shouldInitNewQuestion = !prevProps.didQuestionFinish && didQuestionFinish;
    const shouldPlayActiveNotes = !isEqual(prevProps.activeNote, activeNotes)
      && activeNotes
      && !isEmpty(activeNotes);

    if (shouldInitNewQuestion && !didLessonFinish) {
      setTimeout(getNewQuestion, 1000);
    }

    if (shouldLoopThroughQuestionNotes && !didLessonFinish) {
      if (lessonId === EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID) {
        loopThroughQuestionSounds([[noteToGuess]]);
      }

      if (lessonId === EAR_TRAINING_SINGLE_NOTE_IDENTIFICATION_ID) {
        loopThroughQuestionSounds([[referenceNote], [noteToGuess]]);
      }
    }

    if (shouldPlayActiveNotes && !didLessonFinish) {
      onNotePlay(activeNotes);
    }

    if (!prevProps.didLessonFinish && didLessonFinish) {
      const { lessonAnalyticsData } = this.props;
      const { startedAt } = this.state;
      const lessonData = { ...lessonAnalyticsData, secondsToFinish: (Date.now() - startedAt) / 1000 };
      setLessonFinished(this.props.firebase, this.props.auth.uid, this.props.lessonId, true, lessonData);
    }
  }

  componentDidMount() {
    this.props.getNewQuestion();
  }

  renderHeader = () => {
    const {
      isDailyLesson,
      isCustomLesson,
      lessonId,
      isQuestionPlaying,
      activeCustomLessonId,
      didLessonFinish,
      userNeedsHint,
      history,
      dailyLesson
    } = this.props;

    return (
      <Header
        hasBackButton
        onBackButtonPress={() => {
          if (isDailyLesson) {
            history.push(HOME_SCREEN);
            return;
          }

          history.goBack();
        }}
        headerMiddleNode={!isDailyLesson && <LessonScore />}
        hasMenu={!isDailyLesson}
        showSettings
        isDailyLesson={isDailyLesson}
        isCustomLesson={isCustomLesson}
        activeCustomLessonId={activeCustomLessonId}
        isMenuDisabled={isQuestionPlaying || didLessonFinish}
        headerRightNode={
          isDailyLesson &&
          <DotProgress
            dailyLesson={dailyLesson}
          />
        }
      />
    );
  }

  renderQuestionCopy = () => {
    const { referenceNote = {}, didLessonFinish, lessonId } = this.props;
    const { noteName } = referenceNote;

    return (
      <div className="question-copy-container">
        {
          didLessonFinish ?
            <h2>{" Nice work! 🎉"}</h2> :
            <h2>{
              lessonId === EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID ?
                "What is the played note?" :
                noteName && `What note is played after ${noteName}?`
            }</h2>
        }
      </div>
    );
  }

  renderSoundButtons = () => {
    const {
      didQuestionFinish, activeNotes = [], noteToGuess, referenceNote, lessonId
    } = this.props;

    const { noteName: referenceNoteName } = referenceNote;
    const { noteName: noteToGuessName } = noteToGuess;
    
    const soundButtons = lessonId === EAR_TRAINING_PERFECT_PITCH_SINGLE_NOTE_IDENTIFICATION_ID ?
      [
        {
          hidden: true
        },
        {
          name: noteToGuessName,
          size: NOTE_BUTTON_SIZE,
          isTextHidden: !didQuestionFinish,
          hasWhiteText: true,
          onClick: () => this.onSoundButtonClick(noteToGuessName),
        }
      ] :
      [
        {
          name: referenceNoteName,
          size: NOTE_BUTTON_SIZE,
          onClick: () => this.onSoundButtonClick(referenceNoteName),
        },
        {
          name: noteToGuessName,
          size: NOTE_BUTTON_SIZE,
          isTextHidden: !didQuestionFinish,
          hasWhiteText: true,
          hasSecondaryBackgroundColor: true,
          onClick: () => this.onSoundButtonClick(noteToGuessName),
        }
      ];

    return (
      <div className="notes-container">
        {
          soundButtons.map(
            (props, index) => (
              !props.hidden &&
              <SoundButton
                {...props}
                isActive={activeNotes.find(note => note.index === index)}
                key={index}
              />
            ) 
          )
        }
      </div>
    );
  }

  renderProgressBar = () => {
    const { progressPercentage } = this.props;

    return (
      <div className="progress-bar-container">
        <ProgressBar percentageFilled={progressPercentage} />
      </div>
    );
  }

  renderMenuBar = () => {
    const { isQuestionPlaying } = this.props;

    return (
      <div className="menu-bar-container">
        <div className="menu-bar-items">
          <MdReplay
            onClick={this.onReplayButtonClick}
            size={30}
            color={isQuestionPlaying ? "#c6c6c6" : "black"}
          />
        </div>
      </div>
    );
  }

  renderPianoRoll = () => {
    const {
      instrument,
      isQuestionPlaying,
      noteToGuess,
      noteRange,
    } = this.props;

    return (
      <div className="piano-roll-container">
        <PianoRoll
          notes={noteRange}
          noteToGuess={noteToGuess}
          onKeyClick={this.onChoiceClick}
          pianoInstrument={instrument}
          isDisabled={isQuestionPlaying}
        />
      </div>
    );
  }

  renderFinishButtons = () => {
    return (
      <div className="notes-container">
        <Button
          text="Play Again"
          isTextCentered
          onClick={() => {
            this.props.resetQuestion();
            this.props.getNewQuestion();
            this.setState({ startedAt: Date.now() });
          }}
        />
        <Button
          text="Continue"
          isTextCentered
          onClick={() => this.props.history.goBack()}
        />
      </div>
    );
  }

  render() {
    return (
      <Screen className="single-note-practice-view">
        {this.renderHeader()}
        {this.renderQuestionCopy()}
        {
          this.props.didLessonFinish ?
            this.renderFinishButtons() :
            this.renderSoundButtons()
        }
        {this.renderProgressBar()}
        {this.renderMenuBar()}
        {this.renderPianoRoll()}
        <Confetti active={this.props.didLessonFinish} />
      </Screen>
    );
  }
}

export default SingleNotePractice;