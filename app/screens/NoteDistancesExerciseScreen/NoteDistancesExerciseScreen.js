import { isEmpty, isEqual } from "lodash";
import React, { Component } from "react";
import { MdArrowBack, MdReplay } from "react-icons/md";
import Button from "../../common/components/Button/Button";
import ChoicesContainer from "../../common/components/ChoicesContainer/ChoicesContainer";
import Confetti from "../../common/components/Confetti/Confetti";
import Header from "../../common/components/Header";
import ProgressBar from "../../common/components/ProgressBar/ProgressBar";
import Screen from "../../common/components/Screen/Screen";
import SoundButton from "../../common/components/SoundButton";
import setLessonFinished from "../../store/firebase/setLessonFinished";
import "./NoteDistancesExerciseScreen.scss";
import PianoRoll from "../../common/components/PianoRoll";
import { TWELVE_TONE_NOTES } from "../../common/consts/twelveToneConsts";
import noteDistanceChoices from "../../common/consts/noteDistanceChoices";
import Modal from "../../common/components/Modal";
import LessonHint from "../../common/components/LessonHint";
import isBlackKey from "../../util/noteUtils/isBlackKey";
import LessonFinishButtons from "../../common/components/LessonFinishButtons/LessonFinishButtons";
import LessonQuestionCopy from "../../common/components/LessonQuestionCopy/LessonQuestionCopy";
import goToDailyLesson from "../../util/lessons/goToDailyLesson";
import LessonScore from "../../common/components/LessonScore";
import DotProgress from "../../common/components/DotProgress";
import { HOME_SCREEN } from "../../common/consts/routes";

const NOTE_BUTTON_SIZE = 150;

class NoteDistancesExerciseScreen extends Component {
  state = {
    reverseButtonColors: false,
    wrongPressedNotes: [],
    correctPressedNotes: [],
    startedAt: Date.now(),
    isHintModalOpen: false,
    shouldShowStreakCopy: false
  }

  onChoiceClick = (clickedChoice) => {
    const {
      correctChoiceName,
      didQuestionFinish,
    } = this.props;
    if (didQuestionFinish) {
      return;
    }

    if (correctChoiceName === clickedChoice) {
      this.props.onCorrectGuess();
      this.setState({ 
        correctPressedNotes: [
          ...this.state.correctPressedNotes,
          ...[clickedChoice]
        ],
        wrongPressedNotes: []
      });
      return;
    }

    this.setState({
      wrongPressedNotes: [
        ...this.state.wrongPressedNotes,
        ...[clickedChoice]
      ]
    });
    this.props.onWrongGuess();
  }

  componentDidUpdate(prevProps) {
    const {
      didQuestionFinish,
      loopThroughQuestionSounds,
      playableSounds,
      noteToGuess,
      getNewQuestion,
      didLessonFinish
    } = this.props;
    const shouldInitNewQuestion = !prevProps.didQuestionFinish && didQuestionFinish;

    if (shouldInitNewQuestion && !didLessonFinish) {
      setTimeout(() => {
        this.setState({ 
          reverseButtonColors: !this.state.reverseButtonColors,
          wrongPressedNotes: [],
          correctPressedNotes: [],
        });
        getNewQuestion();
      }, 1000);
    }

    if (!prevProps.didLessonFinish && didLessonFinish) {
      const { lessonAnalyticsData, streaks = {} } = this.props;
      const { startedAt } = this.state;
      const lessonData = { ...lessonAnalyticsData, secondsToFinish: (Date.now() - startedAt) / 1000 };
      this.setState({ shouldShowStreakCopy: !streaks || !streaks.todayInStreak });
      setLessonFinished(this.props.firebase, this.props.auth.uid, this.props.lessonId, true, lessonData);
    }
  }

  async componentDidMount() {
    const availableChoices = noteDistanceChoices[this.props.lessonId];
    await this.props.setAvailableChoices(availableChoices);
    this.props.getNewQuestion();
  }

  renderQuestionCopy = () => {
    const {
      referenceNote, didLessonFinish, intervalToGuessName, streaks 
    } = this.props;
    const { shouldShowStreakCopy } = this.state;
    
    return (
      <LessonQuestionCopy 
        didLessonFinish={didLessonFinish}
        questionCopy={`What note is a ${intervalToGuessName} above ${referenceNote}`}
        shouldShowStreakCopy={shouldShowStreakCopy}
        streaks={streaks}
      />
    );
  }

  renderSoundButtons = () => {
    const {
      didQuestionFinish,
      referenceNote,
      correctChoiceName
    } = this.props;
    
    const soundButtons = [
      {
        name: referenceNote,
        size: NOTE_BUTTON_SIZE,
        isText: true
      },
      {
        name: correctChoiceName,
        size: NOTE_BUTTON_SIZE,
        isText: true,
        isTextHidden: !didQuestionFinish,
      },
    ];

    return (
      <div className="notes-container">
        {
          soundButtons.map(
            (props, index) => (
              <SoundButton
                {...props}
                key={index}
                className={this.state.reverseButtonColors && "reverse"}
              />
            )
          )
        }
      </div>
    );
  }

  renderProgressBar = () => {
    const { progressPercentage, didLessonFinish } = this.props;

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
        
        </div>
      </div>
    );
  }

  renderChoices = () => {
    const { isQuestionPlaying, correctChoiceName, availableChoices } = this.props;

    return (
      <div className="interval-choices-container">
        <ChoicesContainer
          choices={availableChoices}
          correctChoice={correctChoiceName}
          onChoiceClick={this.onChoiceClick}
          disabled={isQuestionPlaying}
        />
      </div>
    );
  }

  renderFinishButtons = () => {
    const { isDailyLesson, nextLessonId, dailyLesson = {} } = this.props;

    if (isDailyLesson) {
      return (
        <LessonFinishButtons
          disableReplay
          onContinueClick={() => {
            const nextLesson = dailyLesson.lessons[nextLessonId];

            goToDailyLesson(this.props.history, nextLesson);
          }}
        />
      );
    }

    return (
      <LessonFinishButtons
        onReplayClick={() => {
          this.setState({
            reverseButtonColors: !this.state.reverseButtonColors,
            wrongPressedNotes: [],
            correctPressedNotes: [],
          });
          this.props.resetQuestion();
          this.props.getNewQuestion();
          this.setState({ startedAt: Date.now() });
        }}
        onContinueClick={() => this.props.history.goBack()}
      />
    );
  }

  renderPianoRoll = () => {
    const {
      instrument,
      isQuestionPlaying,
      noteToGuess,
      noteRange,
      referenceNote
    } = this.props;
    const {
      wrongPressedNotes,
      correctPressedNotes,
    } = this.state;
    const threeOctaves = [...TWELVE_TONE_NOTES, ...TWELVE_TONE_NOTES, ...TWELVE_TONE_NOTES];
    const firstIndex = threeOctaves.indexOf(referenceNote);
    // indexOf second argument starts at given index
    // adding one here so we get the next one

    // this adds padding to the piano roll so the black keys are not the last or first note
    // TOOD: move to somewhere else
    const isFirstNoteSharp = isBlackKey(referenceNote);
    const secondNoteIndex = threeOctaves.indexOf(referenceNote, firstIndex + 1);
    const isLastNoteSharp = isBlackKey(threeOctaves[secondNoteIndex + 11]);
    const notesStartIndex = secondNoteIndex - (isFirstNoteSharp ? 1 : 0);
    const notesEndIndex = secondNoteIndex + 12 + (isLastNoteSharp ? 1 : 0);
    const notes = threeOctaves.slice(notesStartIndex, notesEndIndex);
    return (
      <div className="piano-roll-container">
        <PianoRoll
          notes={notes}
          onKeyClick={this.onChoiceClick}
          pianoInstrument={instrument}
          isDisabled={isQuestionPlaying}
          wrongPressedNotes={wrongPressedNotes}
          correctPressedNotes={correctPressedNotes}
        />
      </div>
    );
  }
  
  render() {
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
      <Screen className="note-distances-exercise-screen">
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
          showHints
          onHintButtonPress={() => this.setState({ isHintModalOpen: true })}
          highlightHints={userNeedsHint}
        />
        {this.renderQuestionCopy()}
        {
          this.props.didLessonFinish ?
            this.renderFinishButtons() :
            this.renderSoundButtons()
        }
        {this.renderProgressBar()}
        {this.renderMenuBar()}
        {this.renderPianoRoll()}
        <Modal
          open={this.state.isHintModalOpen}
          onClose={() => this.setState({ isHintModalOpen: false })}
        >
          <LessonHint 
            lessonId={this.props.lessonId}
            lessonCategories={this.props.lessonCategories}
            history={this.props.history}
          />
        </Modal>
        <Confetti active={this.props.didLessonFinish} />
      </Screen>
    );
  }
}

export default NoteDistancesExerciseScreen;