import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import LessonCardsContainer from "../../common/components/LessonCardsContainer";
import Screen from "../../common/components/Screen/Screen";
import ScreenHeader from "../../common/components/ScreenHeader/ScreenHeader";
import { accentOne, secondary } from "../../common/consts/colors";
import { MUSIC_THEORY_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";
import {
  HOME_SCREEN, MUSIC_THEORY_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL, CUSTOM_EXERCISES_CHOOSE_CATEGORY_SCREEN, CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN 
} from "../../common/consts/routes";
import setCustomLessonIsStarted from "../../store/firebase/setCustomLessonIsStarted";
import "./CustomExerciseScreen.scss";
import {
  SCREEN_VIEW, logDailyLessonStarted, logCustomLessonStarted, createCustomLessonStarted 
} from "../../common/consts/analytics";
import Button from "../../common/components/Button/Button";
import Card from "../../common/components/Card";
import SubscriptionCTAContainer from "../../common/components/SubscriptionCTAContainer/SubscriptionCTAContainer";
import scrollUp from "../../util/browser/scrollUp";
import { MUSIC_THEORY_BUILDING_BLOCKS_ID, MUSIC_THEORY_SHARPS_AND_FLATS_ID } from "../../store/firebase/accountSetup";
import BottomFloatingMenu from "../../common/components/BottomFloatingMenu/BottomFloatingMenu";
import editCustomLesson from "../../store/firebase/editCustomLesson";
import { customExerciseSetIsEditing } from "../../store/customExercises/actions";
import deleteCustomLesson from "../../store/firebase/deleteCustomLesson";
import withConfirmationModal from "../../util/withConfirmationModal";
import { CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE } from "../../common/consts/localStorage";
import clearLocalStorageNamespace from "../../util/clearLocalStorageNamespace";
import { promptSubscription } from "../../util/routing";
import { isEmpty } from "lodash";


export default function CustomExerciseScreen(props) {
  const customLessons = props.customLessons || [];
  const firebase = useFirebase();

  const dispatch = useDispatch();
  const { auth = {}, isSubscribed } = useSelector(({ firebase, account }) => ({
    auth: firebase.auth,
    isSubscribed: account.isSubscribed
  }));

  useEffect(() => {
    document.body.classList.add("long-height-lessons");
    scrollUp();

    return () => document.body.classList.remove("long-height-lessons");
  }, []);

  const onEditClick = async (lesson = {}) => {
    await clearLocalStorageNamespace(CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE);
    dispatch(customExerciseSetIsEditing(true, lesson.lessonId));
    props.history.push(CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN);
  };

  const onDeleteClick = (lesson = {}) => {
    withConfirmationModal(
      () => deleteCustomLesson(firebase, auth.uid, lesson),
      "Delete Custom Lesson?",
      "Are you sure you\'d like to delete your custom lesson? This action cannot be reverted."
    );
  };
  
  return (
    <>
      <Screen className="custom-exercise-screen" hasGrayBackground addBottomNotchPadding>
        <ScreenHeader
          title="Custom Exercises"
          backgroundColor={secondary}
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
            customLessons &&
            <LessonCardsContainer
              noLessonsMessage="Press the [+] button below to create a custom lesson"
              sortLessonByUpdatedAt
              onLessonClick={lesson => {
                // put this is daily lesson started firebase call
                // use transaction to get isDailyLesson or not
                dispatch(customExerciseSetIsEditing(false));
                setCustomLessonIsStarted(firebase, auth.uid, lesson, true);

                props.history.push(
                  lesson.route,
                  { 
                    isCustomLesson: true,
                    activeCustomLessonId: lesson.lessonId
                  }
                );
              }}
              lessons={customLessons}
              hideProgressDots
              allLessonsUnlocked
              onEditClick={lesson => onEditClick(lesson)}
              onDeleteClick={lesson => onDeleteClick(lesson)}
            />
          }
        </div>
      </Screen>
      <Button
        isFixed
        isTextCentered
        isRed
        noBackgroundShadow
        text={isEmpty(customLessons) ? "CREATE FIRST LESSON" : "CREATE NEW LESSON"}
        onClick={() => {
          createCustomLessonStarted();
          dispatch(customExerciseSetIsEditing(false));
          props.history.push(CUSTOM_EXERCISES_CHOOSE_CATEGORY_SCREEN);
        }}
      />
    </>
  );
}
