
import classNames from "classnames";
import { isEmpty } from "lodash";
import React, { Component, createRef } from "react";
import { MdArrowBack, MdPause, MdReplay } from "react-icons/md";
import Tone from "tone";
import Button from "../../common/components/Button/Button";
import ChoicesContainer from "../../common/components/ChoicesContainer/ChoicesContainer";
import Confetti from "../../common/components/Confetti/Confetti";
import Header from "../../common/components/Header";
import ProgressBar from "../../common/components/ProgressBar";
import Screen from "../../common/components/Screen/Screen";
import { RHYTHM_CHOICES } from "../../common/consts/rhythmChoices";
import setLessonFinished from "../../store/firebase/setLessonFinished";
import getRhythmStringLength from "../../util/noteUtils/getRhythmStringLength";
import splitRhythmString from "../../util/noteUtils/splitRhythmString";
import getPartFromRhythm from "../../util/tone/getPartFromRhythm";
import createLoop from "../../util/tone/createLoop";
import clearLoops from "../../util/tone/clearLoops";
import "./RhythmTranscriptionScreen.scss";
import goToDailyLesson from "../../util/lessons/goToDailyLesson";
import DotProgress from "../../common/components/DotProgress";
import setDailyLessonFinished from "../../store/firebase/setDailyLessonFinished";
import { HOME_SCREEN } from "../../common/consts/routes";
import LessonFinishButtons from "../../common/components/LessonFinishButtons/LessonFinishButtons";
import LessonQuestionCopy from "../../common/components/LessonQuestionCopy/LessonQuestionCopy";
import LessonScore from "../../common/components/LessonScore";

export default class RhythmTranscriptionScreen extends Component {
  state = {
    choice: [],
    playingDotIndex: -1,
    isFirstTimePlayingQuestion: true,
    startedAt: Date.now(),
    shouldShowStreakCopy: false
  }

  loops = React.createRef();

  onReplayButtonClick = () => {
    const { isQuestionStandby } = this.props;

    if (isQuestionStandby) {
      this.playRhythm();
    }
  }

  onStopButtonClick = () => {
    const { isQuestionPlaying } = this.props;
    if (isQuestionPlaying) {
      this.stopRhythm();
    }
  }

  onChoiceClick = (clickedChoice) => {
    const {
      correctChoice,
      didQuestionFinish,
      onNotePlay
    } = this.props;
    const { choice } = this.state;
    const choiceLength = getRhythmStringLength(choice);
    const correctChoiceLength = getRhythmStringLength(correctChoice);

    if (didQuestionFinish) {
      return;
    }

    const newChoice = [...choice];

    // max choice inputs
    if (correctChoiceLength <= choiceLength) {
      newChoice[correctChoiceLength - 1] = clickedChoice;
      this.setState({ choice: newChoice });
      return;
    }

    // this is so if they remove a note before the "last " note by tapping it
    const firstMissingNote = choice.indexOf(undefined);
    const noteIndexToPushTo = firstMissingNote === -1 ? choiceLength : firstMissingNote;
    newChoice[noteIndexToPushTo] = clickedChoice;

    this.setState({ choice: newChoice });
  }

  onSubmitButtonClick = () => {
    const {
      correctChoice,
      didQuestionFinish,
      onNotePlay
    } = this.props;

    if (correctChoice === this.state.choice.join("")) {
      this.props.onCorrectGuess();
      return;
    }

    this.props.onWrongGuess();
  }

  onUndoButtonClick = () => {
    const newChoice = [...this.state.choice];
    newChoice.pop();

    this.setState({ choice: newChoice });
  }

  onFilledDotClick = index => {
    const { choice } = this.state;
    const choiceToUpdate = [...choice];
    choiceToUpdate[index] = undefined;

    this.setState({ choice: choiceToUpdate });
  }

  stopRhythm = () => {
    const { setIsQuestionPlaying, } = this.props;
    const { isFirstTimePlayingQuestion } = this.state;
    clearLoops(this.loops);

    if (isFirstTimePlayingQuestion) {
      this.setState({ isFirstTimePlayingQuestion: false });
    }

    setIsQuestionPlaying(false);
    Tone.Transport.cancel(0);
    Tone.Transport.stop();
    this.setState({ playingDotIndex: -1 });
  }

  playRhythm = () => {
    const {
      correctChoice,
      setIsQuestionPlaying,
      instrument,
      metronome
    } = this.props;
    setIsQuestionPlaying(true);
    const partToPlay = getPartFromRhythm(correctChoice);
    const part = new Tone.Part((time, value) => {
      instrument.triggerAttackRelease(value.note, value.duration, time, value.velocity);
      this.setState({ playingDotIndex: this.state.playingDotIndex + 1 });

      if (value.end) {
        // need to clear metronome before the ned of the last note since
        // if it ends too late you get an additional beat
        setTimeout(() => { clearLoops(this.loops); }, (Tone.Time(value.duration).toSeconds() * 1000) / 2);
        // stop after the last note
        setTimeout(() => this.stopRhythm(), Tone.Time(value.duration).toSeconds() * 1000);
      }
    }, partToPlay).start(0);
    
    // start metronome
    const loopId = createLoop("", "", "4n", undefined, time => {
      metronome.start(time);
    });
    
    this.loops.current.push(loopId);

    Tone.Transport.start();
  }

  componentDidUpdate(prevProps) {
    const {
      didQuestionFinish,
      correctChoice,
      choiceId,
      loopThroughQuestionSounds,
      playableSounds,
      noteToGuess,
      getNewQuestion,
      didLessonFinish,
      isDailyLesson
    } = this.props;
    const shouldLoopThroughQuestionNotes = !Object.is(prevProps.noteToGuess, noteToGuess);
    const shouldInitNewQuestion = !prevProps.didQuestionFinish && didQuestionFinish;
    const shouldPlayRhythm = prevProps.choiceId !== choiceId
      && correctChoice
      && !isEmpty(correctChoice);
    if (shouldPlayRhythm && !didLessonFinish) {
      this.setState({ choice: [] }, () => {
        this.playRhythm();
      });
    }

    if (shouldLoopThroughQuestionNotes && !didLessonFinish) {
      loopThroughQuestionSounds(playableSounds);
    }

    if (shouldInitNewQuestion && !didLessonFinish) {
      setTimeout(() => {
        getNewQuestion();
        this.setState({ isFirstTimePlayingQuestion: true });
      }, 1000);
      
    }

    if (!prevProps.didLessonFinish && didLessonFinish) {
      const { lessonAnalyticsData, streaks = {} } = this.props;
      const { startedAt } = this.state;
      const lessonData = { ...lessonAnalyticsData, secondsToFinish: (Date.now() - startedAt) / 1000 };
      this.setState({ shouldShowStreakCopy: !streaks || !streaks.todayInStreak });

      if (isDailyLesson) {
        setDailyLessonFinished(this.props.firebase, this.props.auth.uid, this.props.dailyLesson, this.props.dailyLessonId, lessonData);
      } else {
        setLessonFinished(this.props.firebase, this.props.auth.uid, this.props.lessonId, true, lessonData);
      }
    }
  }

  async componentDidMount() {
    // set loops to []
    // since can't push to undefined
    // this should probably be part of state
    this.loops.current = [];

    const { choices, choiceLength } = this.props.lessonOptions || RHYTHM_CHOICES[this.props.lessonId];

    await this.props.setChoicesAndChoiceLength(choices, choiceLength);
    this.props.getNewQuestion();
  }

  componentWillUnmount() {
    this.stopRhythm();
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
    const { didLessonFinish, streaks } = this.props;
    const { shouldShowStreakCopy } = this.state;
    
    return (
      <LessonQuestionCopy
        didLessonFinish={didLessonFinish}
        questionCopy="Transcribe the played rhythm"
        shouldShowStreakCopy={shouldShowStreakCopy}
        streaks={streaks}
      />
    );
  }

  renderRhythmButtons = () => {
    const {
      didQuestionFinish,
      correctChoice
    } = this.props;
    const { choice } = this.state;
    const firstMissingNote = choice.indexOf(undefined);
    const choiceLength = getRhythmStringLength(choice);
    const currentIndex = firstMissingNote === -1 ? choiceLength: firstMissingNote;

    return (
      <>
        <div className="notes-container">
          {/* {this.state.choice.join("")} */}
          <div className="oval-dots-container">
            {
              splitRhythmString(correctChoice).map((_, index) => {
                if (choice[index] === undefined) {
                  const classes = classNames(
                    "oval-dot",
                    index === currentIndex && this.state.playingDotIndex === -1 && "current",
                    index < this.state.playingDotIndex && "show-background",
                    index === this.state.playingDotIndex && "playing",
                    index === 0 && "active",
                  );

                  return (
                    <div key={Math.random()} className={classes} />
                  );
                }

                const classes = classNames(
                  "oval-dot filled",
                  index === this.state.playingDotIndex && "playing"
                );

                return (
                  <div 
                    className={classes}
                    onClick={() => this.onFilledDotClick(index)}
                    key={Math.random()}
                  >
                    <p> {choice[index]}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </>
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
    const { isQuestionPlaying, correctChoice } = this.props;
    const { choice, isFirstTimePlayingQuestion } = this.state;
    const choiceLength = getRhythmStringLength(choice);
    const correctChoiceLength = getRhythmStringLength(correctChoice);
    const hasNotReachedRequiredInputs = choiceLength !== correctChoiceLength;

    return (
      <div className="menu-bar-container">
        <div className="menu-bar-items">
          <Button
            text="Undo"
            isYellow
            isTextCentered
            isDisabled={isQuestionPlaying || choiceLength < 1}
            onClick={() => !isQuestionPlaying && this.onUndoButtonClick()}
          />
          {
            isQuestionPlaying && !isFirstTimePlayingQuestion ?
              <MdPause
                onClick={this.onStopButtonClick}
                size={30}
                color={"black"}
                className="replay"
              /> :
              <MdReplay
                onClick={this.onReplayButtonClick}
                size={30}
                color={isQuestionPlaying ? "#c6c6c6" : "black"}
                className="replay"
              />
          }
          
          <Button
            text="Check"
            isSuccess
            isTextCentered
            isDisabled={isQuestionPlaying || hasNotReachedRequiredInputs}
            onClick={() => (!isQuestionPlaying && !hasNotReachedRequiredInputs) && this.onSubmitButtonClick()}
          />
        </div>
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

  renderRhythmChoices = () => {
    const { isQuestionPlaying, correctChoiceName, availableChoices } = this.props;

    return (
      <div className="rhythm-choices-container">
        <ChoicesContainer
          choices={availableChoices}
          onChoiceClick={this.onChoiceClick}
          disabled={isQuestionPlaying}
          isRhythmChoices
          noRightOrWrong
        />
      </div>
    );
  }

  render() {

    return (
      <Screen className="rhythm-transcription-screen">
        {this.renderHeader()}
        {this.renderQuestionCopy()}
        {
          this.props.didLessonFinish ?
            this.renderFinishButtons() :
            this.renderRhythmButtons()
        }
        {this.renderProgressBar()}
        {this.renderMenuBar()}
        {this.renderRhythmChoices()}
        <Confetti active={this.props.didLessonFinish} />
      </Screen>
    );
  }
}