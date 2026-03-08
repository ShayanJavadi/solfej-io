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
import ProgressBar from "../../common/components/ProgressBar";
import Screen from "../../common/components/Screen/Screen";
import SoundButton from "../../common/components/SoundButton";
import { CHORD_QUALITY_CHOICES } from "../../common/consts/earTrainingLessonChordsOptions";
import { defaultPlaybleSoundsFunction } from "../../common/consts/earTrainingLessonIntervalsOptions";
import { HOME_SCREEN } from "../../common/consts/routes";
import setCustomLessonIsFinished from "../../store/firebase/setCustomLessonIsFinished";
import setDailyLessonFinished from "../../store/firebase/setDailyLessonFinished";
import setLessonFinished from "../../store/firebase/setLessonFinished";
import getChordFromDisplayName from "../../util/chordUtils/getChordFromDisplayName";
import goToDailyLesson from "../../util/lessons/goToDailyLesson";
import "./ChordQualityScreen.scss";
import { CHORD_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";

const NOTE_BUTTON_SIZE = 150;

export default class ChordQualityScreen extends Component {
  state = {
    startedAt: Date.now(),
    shouldShowStreakCopy: false
  }

  onReplayButtonClick = () => {
    const { isQuestionStandby, loopThroughQuestionSounds, playableSounds } = this.props;
    if (isQuestionStandby) {
      loopThroughQuestionSounds(playableSounds);
    }
  }

  onChoiceClick = (clickedChoice) => {
    const {
      didQuestionFinish,
      correctChoiceName,
      onNotePlay,
    } = this.props;

    if (didQuestionFinish) {
      return;
    }
    const clickedChord = getChordFromDisplayName(clickedChoice, this.props.availableChoices);
    const isCorrectChoice = correctChoiceName === clickedChoice;

    if (isCorrectChoice) {
      this.props.onCorrectGuess();
      return;
    }

    this.props.onWrongGuess();
  }

  onSoundButtonClick = () => this.props.onNotePlay(this.props.chordToGuess.notes);

  componentDidUpdate(prevProps) {
    const {
      didQuestionFinish,
      activeNotes,
      loopThroughQuestionSounds,
      playableSounds,
      chordToGuess,
      getNewQuestion,
      didLessonFinish,
      isCustomLesson,
      activeCustomLessonId
    } = this.props;
    const shouldLoopThroughQuestionNotes = !Object.is(prevProps.chordToGuess, chordToGuess);
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
      const { lessonAnalyticsData, isDailyLesson, streaks = {} } = this.props;
      const { startedAt } = this.state;
      const lessonData = { ...lessonAnalyticsData, secondsToFinish: (Date.now() - startedAt) / 1000 };
      this.setState({ shouldShowStreakCopy: !streaks || !streaks.todayInStreak });

      if (isDailyLesson) {
        setDailyLessonFinished(this.props.firebase, this.props.auth.uid, this.props.dailyLesson, this.props.dailyLessonId, lessonData);
      } else if (isCustomLesson) {
        setCustomLessonIsFinished(this.props.firebase, this.props.auth.uid, activeCustomLessonId, true, lessonData, CHORD_IDENTIFICATION_SUBCATEGORY);
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
      CHORD_QUALITY_CHOICES[this.props.lessonId];
    await this.props.setOptions(options);

    this.props.getNewQuestion();
  }
  
  renderQuestionCopy = () => {
    const { didLessonFinish, streaks } = this.props;
    const { shouldShowStreakCopy } = this.state;

    return (
      <LessonQuestionCopy
        didLessonFinish={didLessonFinish}
        questionCopy="What is the quality of the played chord?"
        shouldShowStreakCopy={shouldShowStreakCopy}
        streaks={streaks}
      />
    );
  }

  renderSoundButtons = () => {
    const {
      didQuestionFinish,
      activeNotes,
      correctChoiceName,
      isQuestionPlaying
    } = this.props;

    const soundButtons = [
      {
        name: correctChoiceName,
        size: NOTE_BUTTON_SIZE * 1.2,
        isTextHidden: !didQuestionFinish,
        isLongText: !didQuestionFinish ? false : true, // when text is not hidden it's a long text TODO: find a better way to do this
        onClick: () => !isQuestionPlaying && this.onSoundButtonClick(),
        isLong: true
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

  renderChordQualityChoices = () => {
    const { isQuestionPlaying, correctChoiceName, availableChoices } = this.props;
    const choicesDisplayNames = Object.values(availableChoices)
      .map(choice => choice.displayName);
    
    return (
      <div className="interval-choices-container">
        <ChoicesContainer
          choices={choicesDisplayNames}
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
      didLessonFinish 
    } = this.props;

    return (
      <Screen className="chord-quality-screen">
        <Header
          hasBackButton
          onBackButtonPress={() => {
            if (this.props.isDailyLesson) {
              this.props.history.push(HOME_SCREEN);
              return;
            }

            this.props.history.goBack();
          }}
          headerMiddleNode={!isDailyLesson && <LessonScore />}
          hasMenu={!isDailyLesson}
          showSettings
          isDailyLesson={isDailyLesson}
          isCustomLesson={isCustomLesson}
          activeCustomLessonId={activeCustomLessonId}
          isMenuDisabled={isQuestionPlaying || didLessonFinish}
          headerRightNode={
            this.props.isDailyLesson &&
            <DotProgress
              dailyLesson={this.props.dailyLesson}
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
        {this.renderChordQualityChoices()}
        <Confetti active={this.props.didLessonFinish} />
      </Screen>
    );
  }
}
