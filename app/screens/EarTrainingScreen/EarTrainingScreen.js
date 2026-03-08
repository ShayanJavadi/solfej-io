import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import LessonCardsContainer from "../../common/components/LessonCardsContainer";
import Screen from "../../common/components/Screen/Screen";
import ScreenHeader from "../../common/components/ScreenHeader/ScreenHeader";
import { primary } from "../../common/consts/colors";
import { EAR_TRAINING_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";
import { HOME_SCREEN, EAR_TRAINING_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../../common/consts/routes";
import setLessonStarted from "../../store/firebase/setLessonStarted";
import "./EarTrainingScreen.scss";
import { SCREEN_VIEW } from "../../common/consts/analytics";
import SubscriptionCTAContainer from "../../common/components/SubscriptionCTAContainer/SubscriptionCTAContainer";
import scrollUp from "../../util/browser/scrollUp";
import { EAR_TRAINING_MINOR_MAJOR_SECOND_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID } from "../../store/firebase/accountSetup";
import { promptSubscription, routeToLesson } from "../../util/routing";
import Button from "../../common/components/Button/Button";
import getCurrentLesson from "../../util/lessons/getCurrentLesson";

export default function EarTrainingScreen(props) {
  const { history } = props;
  const earTrainingLessonsCategory = props.lessonCategories
    .find(category => category.categoryId === EAR_TRAINING_CATEGORY_ID) || {};
  const firebase = useFirebase();

  const { auth, isSubscribed } = useSelector(({ firebase, account }) => ({
    auth: firebase.auth,
    isSubscribed: account.isSubscribed
  }));
  const { lessons = [] } = earTrainingLessonsCategory;
  const currentLessonIndex = getCurrentLesson(lessons, false);
  const currentLesson = lessons[currentLessonIndex];


  useEffect(() => {
    document.body.classList.add("long-height-lessons");
    scrollUp();

    return () => document.body.classList.remove("long-height-lessons");
  }, []);

  return (
    <Screen className="ear-training-screen" hasGrayBackground addBottomNotchPadding>
      <ScreenHeader
        title="Ear Training"
        backgroundColor={primary}
        hasWhiteText
        onClose={() => props.history.push(HOME_SCREEN)}
      />
      {
        !isSubscribed &&
        <SubscriptionCTAContainer
          onClick={() => promptSubscription(props.history, props.history.location.pathname)}
        />
      }
      <div className="lessons-container">
        {
          lessons &&
          <LessonCardsContainer
            lockLessons={!isSubscribed}
            lockWhiteList={[EAR_TRAINING_MINOR_MAJOR_SECOND_ID, EAR_TRAINING_MINOR_MAJOR_SECOND_1_ID]}
            onLessonClick={lesson => routeToLesson(history, lesson, firebase, auth.uid)}
            lessons={earTrainingLessonsCategory.lessons}
          />
        }
      </div>
      <Button
        isFixed
        isTextCentered
        isRed
        text={currentLessonIndex === 0 ? "START FIRST LESSON" : "START NEXT LESSON"}
        noBackgroundShadow
        onClick={() => routeToLesson(history, currentLesson, firebase, auth.uid)}
      />
    </Screen>
  );
}
