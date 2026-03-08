import { transpose } from "@tonaljs/tonal";
import { isEmpty, isEqual } from "lodash";
import React, { Component } from "react";
import { MdReplay } from "react-icons/md";
import ChoicesContainer from "../../common/components/ChoicesContainer/ChoicesContainer";
import Confetti from "../../common/components/Confetti/Confetti";
import DotProgress from "../../common/components/DotProgress";
import Header from "../../common/components/Header";
import LessonFinishButtons from "../../common/components/LessonFinishButtons/LessonFinishButtons";
import LessonQuestionCopy from "../../common/components/LessonQuestionCopy/LessonQuestionCopy";
import LessonScore from "../../common/components/LessonScore";
import ProgressBar from "../../common/components/ProgressBar/ProgressBar";
import Screen from "../../common/components/Screen/Screen";
import SoundButton from "../../common/components/SoundButton";
import { defaultPlaybleSoundsFunction, EAR_TRAINING_INTERVAL_IDENTIFICATION_OPTIONS } from "../../common/consts/earTrainingLessonIntervalsOptions";
import { HOME_SCREEN } from "../../common/consts/routes";
import setCustomLessonIsFinished from "../../store/firebase/setCustomLessonIsFinished";
import setDailyLessonFinished from "../../store/firebase/setDailyLessonFinished";
import setLessonFinished from "../../store/firebase/setLessonFinished";
import getIntervalFromDisplayName from "../../util/intervalUtils/getIntervalFromDisplayName";
import goToDailyLesson from "../../util/lessons/goToDailyLesson";
import "./IntervalIdentificationScreen.scss";
import { INTERVAL_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";

const NOTE_BUTTON_SIZE = 150;

class IntervalIdentificationScreen extends Component {
  state = {
    isHintModalOpen: false,
    startedAt: Date.now(),
    shouldShowStreakCopy: false
  }

  onReplayButtonClick = () => {
    // playable sounds is the order that the sounds will play in
    const { isQuestionStandby, loopThroughQuestionSounds, playableSounds } = this.props;
    
    if (isQuestionStandby) {
      loopThroughQuestionSounds(playableSounds);
    }
  }

  onSoundButtonClick = (noteName, octave) => this.props.onNotePlay([{ noteName, release: 2, octave }]);

  onChoiceClick = (clickedChoice) => {
    const {
      correctChoiceName,
      referenceNote: { noteName: referenceNoteName },
      didQuestionFinish,
      onNotePlay
    } = this.props;

    if (didQuestionFinish) {
      return;
    }

    const clickedChoiceInterval = getIntervalFromDisplayName(clickedChoice);
    const clickedChoiceNote = transpose(referenceNoteName, clickedChoiceInterval);

    // onNotePlay([
    //   { noteName: referenceNoteName },
    //   { noteName: clickedChoiceNote }
    // ]);

    if (correctChoiceName === clickedChoice) {

      this.props.onCorrectGuess();
      return;
    }

    this.props.onWrongGuess();
  }

  componentDidUpdate(prevProps) {
    const {
      didQuestionFinish,
      activeNotes,
      loopThroughQuestionSounds,
      playableSounds,
      noteToGuess,
      getNewQuestion,
      didLessonFinish,
      streaks,
      isCustomLesson,
      activeCustomLessonId
    } = this.props;
    const shouldLoopThroughQuestionNotes = !Object.is(prevProps.noteToGuess, noteToGuess);
    const shouldInitNewQuestion = !prevProps.didQuestionFinish && didQuestionFinish;
    const shouldPlayActiveNotes = !isEqual(prevProps.activeNote, activeNotes) 
      && activeNotes
      && !isEmpty(activeNotes);

    if (shouldPlayActiveNotes && !didLessonFinish) {
      this.props.onNotePlay(activeNotes);
    }

    if (shouldLoopThroughQuestionNotes && !didLessonFinish) {
      loopThroughQuestionSounds(playableSounds);
    }

    if (shouldInitNewQuestion && !didLessonFinish) {
      setTimeout(() => getNewQuestion(), 1000);
    }

    if (!prevProps.didLessonFinish && didLessonFinish) {
      const { lessonAnalyticsData, isDailyLesson } = this.props;
      const { startedAt } = this.state;
      const lessonData = { ...lessonAnalyticsData, secondsToFinish: (Date.now() - startedAt) / 1000 };
      this.setState({ shouldShowStreakCopy: !streaks || !streaks.todayInStreak });

      if (isDailyLesson) {
        setDailyLessonFinished(this.props.firebase, this.props.auth.uid, this.props.dailyLesson, this.props.dailyLessonId, lessonData);
      } else if (isCustomLesson) {
        setCustomLessonIsFinished(this.props.firebase, this.props.auth.uid, activeCustomLessonId, true, lessonData, INTERVAL_IDENTIFICATION_SUBCATEGORY);
      } else {
        setLessonFinished(this.props.firebase, this.props.auth.uid, this.props.lessonId, true, lessonData);
      }
    }
  }

  async componentDidMount() {
    const options = this.props.lessonOptions ? 
      { 
        ...this.props.lessonOptions,
        ...{ getPlayableSounds: defaultPlaybleSoundsFunction }, // HACK: temp fix to address not being able to put functions in firebase
      } :
      EAR_TRAINING_INTERVAL_IDENTIFICATION_OPTIONS[this.props.lessonId];
    await this.props.setOptions(options);
    this.props.getNewQuestion();
  }

  renderQuestionCopy = () => {
    const { referenceNote = {}, didLessonFinish } = this.props;
    const { noteName } = referenceNote;

    return (
      <div className="question-copy-container">
        {
          didLessonFinish ?
            <h2>{" Nice work! 🎉"}</h2> :
            <h2>{noteName && `What interval is played after ${noteName}?`}</h2>
        }
      </div>
    );
  }

  renderQuestionCopy = () => {
    const {
      referenceNote = {}, didLessonFinish, intervalToGuessName, streaks 
    } = this.props;
    const { shouldShowStreakCopy } = this.state;
    const { noteName } = referenceNote;

    return (
      <LessonQuestionCopy
        didLessonFinish={didLessonFinish}
        questionCopy={noteName && `What interval is played after ${noteName}?`}
        shouldShowStreakCopy={shouldShowStreakCopy}
        streaks={streaks}
      />
    );
  }

  renderSoundButtons = () => {
    const {
      didQuestionFinish, activeNotes, noteToGuess,
      referenceNote,
      correctChoiceName,
      isQuestionPlaying 
    } = this.props;

    const { noteName: referenceNoteName, octave: referenceNoteOctave } = referenceNote;
    const { noteName: noteToGuessName, octave: noteToGuessOctave } = noteToGuess;
    
    const soundButtons = [
      {
        name: referenceNoteName,
        size: NOTE_BUTTON_SIZE,
        onClick: () => !isQuestionPlaying && this.onSoundButtonClick(referenceNoteName, referenceNoteOctave),
      },
      {
        name: correctChoiceName,
        size: NOTE_BUTTON_SIZE,
        isTextHidden: !didQuestionFinish,
        hasWhiteText: true,
        hasSecondaryBackgroundColor: true,
        isLongText: !didQuestionFinish ? false : true, // when text is not hidden it's a long text TODO: find a better way to do this
        onClick: () => !isQuestionPlaying && this.onSoundButtonClick(noteToGuessName, noteToGuessOctave),
      }
    ];

    return (
      <div className="notes-container">
        {
          soundButtons.map(
            (props, index) => (
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
          <MdReplay
            onClick={this.onReplayButtonClick}
            size={30}
            color={isQuestionPlaying ? "#c6c6c6" : "black"}
          />
        </div>
      </div>
    );
  }

  renderIntervalChoices = () => {
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
      dailyLesson,
      history
    } = this.props;

    return (
      <Screen className="interval-identification-screen">
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
      
        {this.renderQuestionCopy()}
        {
          this.props.didLessonFinish ?
            this.renderFinishButtons() :
            this.renderSoundButtons()
        }
        {this.renderProgressBar()}
        {this.renderMenuBar()}
        {this.renderIntervalChoices()}
        {/* <Modal 
          open={this.state.isHintModalOpen}
          onClose={() => this.setState({ isHintModalOpen: false})} 
        >
          <LessonHint 
            lessonId={this.props.lessonId}
            lessonCategories={this.props.lessonCategories}
            history={this.props.history}
          />
        </Modal> */}
        <Confetti active={this.props.didLessonFinish} />
      </Screen>
    );
  }
}

export default IntervalIdentificationScreen;