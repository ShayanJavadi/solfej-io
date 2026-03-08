import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import LessonCardsContainer from "../../common/components/LessonCardsContainer";
import Screen from "../../common/components/Screen/Screen";
import ScreenHeader from "../../common/components/ScreenHeader/ScreenHeader";
import { accentOne } from "../../common/consts/colors";
import { MUSIC_THEORY_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";
import { HOME_SCREEN, MUSIC_THEORY_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../../common/consts/routes";
import setLessonStarted from "../../store/firebase/setLessonStarted";
import "./MusicTheoryScreen.scss";
import { SCREEN_VIEW } from "../../common/consts/analytics";
import Button from "../../common/components/Button/Button";
import Card from "../../common/components/Card";
import SubscriptionCTAContainer from "../../common/components/SubscriptionCTAContainer/SubscriptionCTAContainer";
import scrollUp from "../../util/browser/scrollUp";
import { MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID } from "../../store/firebase/accountSetup";
import { promptSubscription, routeToLesson } from "../../util/routing";
import getCurrentLesson from "../../util/lessons/getCurrentLesson";

export default function MusicTheoryScreen(props) {
  const { history } = props;
  const musicTheoryLessons = props.lessonCategories
    .find(category => category.categoryId === MUSIC_THEORY_CATEGORY_ID) || {};
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
  const { lessons = [] } = musicTheoryLessons;
  const currentLessonIndex = getCurrentLesson(lessons, false);
  const currentLesson = lessons[currentLessonIndex];

  return (
    <Screen className="ear-training-screen" hasGrayBackground addBottomNotchPadding addBottomPadding>
      <ScreenHeader
        title="Music Theory"
        backgroundColor={accentOne}
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
            lockWhiteList={[MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID]}
            onLessonClick={lesson => routeToLesson(history, lesson, firebase, auth.uid)}
            lessons={musicTheoryLessons.lessons}
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
