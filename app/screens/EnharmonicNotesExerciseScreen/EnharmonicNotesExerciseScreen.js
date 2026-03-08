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
import "./EnharmonicNotesExerciseScreen.scss";
import Modal from "../../common/components/Modal";
import LessonHint from "../../common/components/LessonHint";
import LessonFinishButtons from "../../common/components/LessonFinishButtons/LessonFinishButtons";
import LessonQuestionCopy from "../../common/components/LessonQuestionCopy/LessonQuestionCopy";
import goToDailyLesson from "../../util/lessons/goToDailyLesson";
import { HOME_SCREEN } from "../../common/consts/routes";
import LessonScore from "../../common/components/LessonScore";
import DotProgress from "../../common/components/DotProgress";

const NOTE_BUTTON_SIZE = 150;

class EnharmonicNotesExerciseScreen extends Component {
  state = {
    reverseButtonColors: false,
    isHintModalOpen: false,
    startedAt: Date.now(),
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
      return;
    }

    this.props.onWrongGuess();
  }

  componentDidUpdate(prevProps) {
    const {
      didQuestionFinish,
      loopThroughQuestionSounds,
      playableSounds,
      noteToGuess,
      getNewQuestion,
      didLessonFinish,
      streaks = {}
    } = this.props;
    const shouldInitNewQuestion = !prevProps.didQuestionFinish && didQuestionFinish;

    if (shouldInitNewQuestion && !didLessonFinish) {
      setTimeout(() => {
        this.setState({ reverseButtonColors: !this.state.reverseButtonColors });
        getNewQuestion();
      }, 1000);
    }

    if (!prevProps.didLessonFinish && didLessonFinish) {
      const { lessonAnalyticsData } = this.props;
      const { startedAt } = this.state;
      const lessonData = { ...lessonAnalyticsData, secondsToFinish: (Date.now() - startedAt) / 1000 };
      this.setState({ shouldShowStreakCopy: !streaks || !streaks.todayInStreak });

      setLessonFinished(this.props.firebase, this.props.auth.uid, this.props.lessonId, true, lessonData);
    }
  }

  async componentDidMount() {
    // await this.props.setNoteRangeAndChoices(range, choices);
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
        questionCopy="Are the following notes enharmonic?"
        shouldShowStreakCopy={shouldShowStreakCopy}
        streaks={streaks}
      />
    );
  }

  renderSoundButtons = () => {
    const {
      didQuestionFinish,
      firstNote,
      secondNote
    } = this.props;

    const soundButtons = [
      {
        name: firstNote,
        size: NOTE_BUTTON_SIZE,
        isText: true
      },
      {
        name: secondNote,
        size: NOTE_BUTTON_SIZE,
        isText: true
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
      <Screen className="enharmonic-notes-exercise-screen">
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
        {this.renderChoices()}
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

export default EnharmonicNotesExerciseScreen;