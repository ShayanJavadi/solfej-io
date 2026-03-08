
import classNames from "classnames";
import { sample } from "lodash";
import React, { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import Tone from "tone";
import Button from "../../common/components/Button/Button";
import Header from "../../common/components/Header";
import LessonQuestionCopy from "../../common/components/LessonQuestionCopy/LessonQuestionCopy";
import ProgressBar from "../../common/components/ProgressBar";
import Screen from "../../common/components/Screen/Screen";
import { blueGray } from "../../common/consts/colors";
import { HOME_SCREEN } from "../../common/consts/routes";
import useSetNotchColor from "../../common/hooks/useSetNotchColor";
import quizes from "../../quizes/quizes";
import setLessonFinished from "../../store/firebase/setLessonFinished";
import "./QuizScreen.scss";
import { logCorrectGuess, logWrongGuess } from "../../common/consts/analytics";

const CORRECT = "correct";
const WRONG = "wrong";

const renderChoice = (choice, isSelected, onClick, isDisabled) => {
  const classes = classNames("choice", isSelected && "selected", isDisabled && "disabled");
  
  return (
    <div key={choice} className={classes} onClick={isDisabled ? null : onClick}>{choice}</div>
  );
};

export default function QuizScreen(props) {
  const {
    lessonRoute, streaks = {}, correctSoundEffect, wrongSoundEffect 
  } = props;
  const { questions: quizQuestions, lessonId } = quizes[lessonRoute];
  const [questions, setQuestions] = useState(quizQuestions);
  const [totalQuestions] = useState(questions.length);
  const [selectedChoice, setselectedChoice] = useState(undefined);
  const [percentageDone, setPercentageDone] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(sample(questions));
  const [questionStatus, setQuestionStatus] = useState(undefined);
  const [shouldShowStreakCopy, setShouldShowStreakCopy] = useState(undefined);
  const finished = questions.length === 1 && questionStatus === CORRECT;
  const firebase = useFirebase();
  const analytics = firebase.analytics();
  const { auth } = useSelector(({ firebase }) => ({
    auth: firebase.auth,
  }));
  useEffect(() => {
    if (finished) {
      setShouldShowStreakCopy(!streaks || !streaks.todayInStreak);
    }
  }, [finished]);
  useSetNotchColor(blueGray);

  const onCheckAnswer = () => {
    if (selectedChoice !== undefined) {
      if (selectedChoice === currentQuestion.correctChoice) {
        if (correctSoundEffect) {
          correctSoundEffect.start();
          Tone.Transport.start();
          Tone.Transport.stop();
        }

        setTimeout(() => logCorrectGuess(props.history.location.pathname), 300);
        setPercentageDone(((totalQuestions - (questions.length - 1)) / totalQuestions) * 100);
        setQuestionStatus(CORRECT);
      } else {
        if (wrongSoundEffect) {
          wrongSoundEffect.start();
          Tone.Transport.start();
          Tone.Transport.stop();
        }

        setTimeout(() => logWrongGuess(props.history.location.pathname), 300);
        setQuestionStatus(WRONG);
      }
    }
  };

  const onContinuePress = () => {
    
    if (questionStatus === CORRECT) {
      // quiz completed

      if (questions.length === 1) {
        setLessonFinished(firebase, auth.uid, props.lessonId, true);
        props.history.push(HOME_SCREEN);
        return;
      }
      const prevQuestions = [...questions];
      const questionsWithoutCorrectGuess = prevQuestions.filter(question => question.id !== currentQuestion.id);
      setQuestions(questionsWithoutCorrectGuess);

      setselectedChoice(undefined);
      setQuestionStatus(undefined);
      setCurrentQuestion(sample(questionsWithoutCorrectGuess));
    } else {
      setselectedChoice(undefined);
      setQuestionStatus(undefined);
      setCurrentQuestion(sample(questions));
    }
  };

  useSetNotchColor(blueGray);

  const { title, choices, correctChoice } = currentQuestion || {};

  let buttonProps;

  if (questionStatus === CORRECT) {
    buttonProps = { isSuccess: true };
  } else if (questionStatus === WRONG) {
    buttonProps = { isDanger: true };
  } else if (questionStatus === CORRECT) {
    buttonProps = { isSuccess: true };
  } else if (selectedChoice !== undefined ) {
    buttonProps = { isSuccess: true };
  } else {
    buttonProps = { isDisabled: true };
  }

  return (
    <Screen className="quiz-screen" hasGrayBackground>
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
      <div className="title-container">
        {
          !finished ?
            <h1>{title}</h1> :
            <LessonQuestionCopy
              didLessonFinish
              shouldShowStreakCopy={shouldShowStreakCopy}
              streaks={streaks}
            />
        }
       
      </div>
      <div className="choices-container">
        {
          choices.map(
            (choice, index) => renderChoice(
              choice,
              index === selectedChoice,
              () =>  setselectedChoice(index),
              [CORRECT, WRONG].includes(questionStatus)
            )
          )
        }
      </div>
      {
        [CORRECT, WRONG].includes(questionStatus) ?
          <div className={classNames("message-container", questionStatus === CORRECT && "correct", questionStatus === WRONG && "wrong")}>
            <p>{questionStatus === CORRECT ? "You are correct!" : `Correct solution: ${currentQuestion.choices[currentQuestion.correctChoice]}`}</p>
          </div> :
          <div className="message-container"></div>
      }
      <div className={classNames("button-container", questionStatus === CORRECT && "correct", questionStatus === WRONG && "wrong")}>
        <Button
          isTextCentered
          text={
            [CORRECT, WRONG].includes(questionStatus) ?
              "Continue" :
              "Check"
          }
          onClick={[CORRECT, WRONG].includes(questionStatus) ? onContinuePress : onCheckAnswer}
          {...buttonProps}
        />
      </div>
    </Screen>
  );
}
 