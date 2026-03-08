import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import LessonCardsContainer from "../../common/components/LessonCardsContainer";
import Screen from "../../common/components/Screen/Screen";
import ScreenHeader from "../../common/components/ScreenHeader/ScreenHeader";
import { accentOne, yellow } from "../../common/consts/colors";
import { MUSIC_THEORY_CATEGORY_ID, RHYTHM_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";
import { HOME_SCREEN, MUSIC_THEORY_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../../common/consts/routes";
import setLessonStarted from "../../store/firebase/setLessonStarted";
import "./RhythmScreen.scss";
import { SCREEN_VIEW } from "../../common/consts/analytics";
import SubscriptionCTAContainer from "../../common/components/SubscriptionCTAContainer/SubscriptionCTAContainer";
import scrollUp from "../../util/browser/scrollUp";
import { RHYTHM_TRANSCRIPTION_I_ID } from "../../store/firebase/accountSetup";
import { promptSubscription, routeToLesson } from "../../util/routing";
import { isEmpty } from "lodash";
import Button from "../../common/components/Button/Button";
import getCurrentLesson from "../../util/lessons/getCurrentLesson";

export default function RhythmScreen(props) {
  const { history } = props;
  const rhythmLessonCategories = props.lessonCategories
    .find(category => category.categoryId === RHYTHM_CATEGORY_ID) || {};
  const firebase = useFirebase();

  const { auth, isSubscribed } = useSelector(({ firebase, account }) => ({
    auth: firebase.auth,
    isSubscribed: account.isSubscribed
  }));

  useEffect(() => {
    document.body.classList.add("long-height-lessons");
 
    scrollUp();
    return () => document.body.classList.remove("long-height-lessons");
  }, []);

  const { lessons = [] } = rhythmLessonCategories;
  const currentLessonIndex = getCurrentLesson(lessons, false);
  const currentLesson = lessons[currentLessonIndex];

  return (
    <Screen className="ear-training-screen" hasGrayBackground addBottomNotchPadding addBottomPadding>
      <ScreenHeader
        title="Rhythm"
        backgroundColor={yellow}
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
            lockWhiteList={[RHYTHM_TRANSCRIPTION_I_ID]}
            onLessonClick={lesson => routeToLesson(history, lesson, firebase, auth.uid)}
            lessons={lessons}
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
