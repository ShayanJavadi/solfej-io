
import React from "react";
import classNames from "classnames";
import "./LessonHeaderIcons.scss";
import { MdSettings, MdLightbulbOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  initNewQuestion, resetQuestion, skipQuestion, resetQuestionAndStartAgain 
} from "../../../store/practiceLoop/actions";
import { customExerciseSetIsEditing } from "../../../store/customExercises/actions";
import withConfirmationModal from "../../../util/withConfirmationModal";
import deleteCustomLesson from "../../../store/firebase/deleteCustomLesson";
import { CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN } from "../../consts/routes";
import { useFirebase } from "react-redux-firebase";
import { CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE } from "../../consts/localStorage";
import clearLocalStorageNamespace from "../../../util/clearLocalStorageNamespace";
import { setShouldShowVolumeWarning } from "../../../store/app/actions";
import { logLessonSettingsButtonPressed, logLessonSettingsOptionSelected, logHintButtonPressed } from "../../consts/analytics";

const ActionSheetOptionStyle = { Destructive: "destructive", Cancel: "cancel" };

// Web-based action sheet using prompt
const Modals = {
  showActions: async ({ options, title }) => {
    const labels = options.map((o, i) => `${i + 1}. ${o.title}`).join("\n");
    const result = window.prompt(`${title}\n\n${labels}\n\nEnter number:`);
    const index = result ? parseInt(result, 10) - 1 : -1;
    return { index: index >= 0 && index < options.length ? index : -1 };
  }
};

export default function LessonHeaderIcons(props) {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const { auth = {} } = useSelector(({ firebase, account }) => ({
    auth: firebase.auth,
  }));
  const {
    showHints,
    showSettings,
    isCustomLesson,
    isDailyLesson,
    onHintButtonPress,
    activeCustomLessonId,
    isDisabled,
    highlightHints
  } = props;
  const EDIT_OPTION = "Edit";
  const DELETE_OPTION = "Delete";
  const SKIP_QUESTION_OPTION = "Skip Question";
  const RESET_LESSON_OPTION = "Reset Lesson";
  const LESSON_FEEDBACK_OPTION = "Lesson Feedback";
  const AUDIO_ISSUES_OPTION = "Experiencing Audio Issues?";

  const customLessonSettings = [
    EDIT_OPTION,
    DELETE_OPTION
  ].map(title => ({ 
    title,
    style: title === DELETE_OPTION && ActionSheetOptionStyle.Destructive
  }));

  const baseLessonSettings = [
    ...[
      SKIP_QUESTION_OPTION,
      RESET_LESSON_OPTION,
      LESSON_FEEDBACK_OPTION,
      AUDIO_ISSUES_OPTION,
    ].map(title => ({ title })),
    {
      title: "Cancel",
      style: ActionSheetOptionStyle.Cancel
    }
  ]

  const onSettingsPress = () => {
    logLessonSettingsButtonPressed();
    const options = isCustomLesson ?
      [
        ...customLessonSettings,
        ...baseLessonSettings
      ] :
      baseLessonSettings;
      
    Modals.showActions({
      options,
      title: "Settings"
    }).then(async ({ index }) => {
      const { title } = options[index] || {};
      logLessonSettingsOptionSelected(title);
      
      if (title === EDIT_OPTION) {
        // TODO: move to util
        await clearLocalStorageNamespace(CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE);
        dispatch(customExerciseSetIsEditing(true, activeCustomLessonId));
        props.history.push(CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN);
      }

      if (title === DELETE_OPTION) {
        withConfirmationModal(
          () => {
            props.history.goBack();
            deleteCustomLesson(firebase, auth.uid, activeCustomLessonId);
          },
          "Delete Custom Lesson?",
          "Are you sure you\'d like to delete your custom lesson? This action cannot be reverted."
        );
      }
      
      if (title === SKIP_QUESTION_OPTION) {
        dispatch(skipQuestion());
      }

      if (title === RESET_LESSON_OPTION) {
        dispatch(resetQuestionAndStartAgain());
      }

      if (title === LESSON_FEEDBACK_OPTION) {
        window.location = "https://solfej.canny.io/admin/board/lesson-feedback";
      }

      if (title === AUDIO_ISSUES_OPTION) {
        dispatch(setShouldShowVolumeWarning(true));
      }
    });
  };

  const classes = classNames(
    "lesson-header-icons menu-icons",
    isDisabled && "disabled"
  );

  const hintButtonClasses = classNames(
    "svg-container",
    highlightHints && "yellow-glow"
  );

  return (
    <div className={classes}>
      {
        showHints &&
        <div className={hintButtonClasses} onClick={() => {
          logHintButtonPressed();
          onHintButtonPress();
        }}>
          <MdLightbulbOutline
            size={20}
          />
        </div>
      }

      {
        showSettings &&
        <div className="svg-container">
          <MdSettings
            size={23}
            color="#485358"
            onClick={!isDisabled ? onSettingsPress : undefined}
          />
        </div>
      }
    </div>
  );
}

