
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";
import Container from "../../common/components/Container";
import Header from "../../common/components/Header";
import ProgressBar from "../../common/components/ProgressBar";
import Screen from "../../common/components/Screen";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import TextSelectionCard from "../../common/components/TextSelectionCard";
import { primary, primaryBoxShadow, accentTwo } from "../../common/consts/colors";
import { EAR_TRAINING_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";
import { CHORD_IDENTIFICATION_SUBCATEGORY, INTERVAL_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";
import { CUSTOM_EXERCISES_SCREEN, SUBSCRIPTION_CAROUSEL_SCREEN_MODAL } from "../../common/consts/routes";
import { customExerciseSetSubCategoryId, customExerciseSetIsEditing } from "../../store/customExercises/actions";
import "./CustomExerciseChooseOptionsScreen.scss";
import Select from "react-select";
import SubHeader from "../../common/components/SubHeader/SubHeader";
import HeaderText from "../../common/components/HeaderText";
import Slider, { Range, Handle } from "rc-slider";
import {
  EAR_TRAINING_INTERVAL_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS, ROOT_NOTE_MODE_RANGE, ROOT_NOTE_MODE_FIXED, INTERVALS_VALUE_LABEL 
} from "../../common/consts/earTrainingLessonIntervalsOptions";
import scrollUp from "../../util/browser/scrollUp";
import Button from "../../common/components/Button/Button";
import { NOTES } from "../../common/consts/twelveToneConsts";
import createPersistedState from "use-persisted-state";
import usePersistedState from "../../common/hooks/usePersistedState";
import CustomIntervalIdentificationOptions from "./CustomIntervalIdentificationOptions";
import createCustomLesson from "../../store/firebase/createCustomLesson";
import editCustomLesson from "../../store/firebase/editCustomLesson";
import { useFirebase } from "react-redux-firebase";
import clearLocalStorageNamespace from "../../util/clearLocalStorageNamespace";
import { CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE } from "../../common/consts/localStorage";
import CustomChordIdentificationOptions from "./CustomChordIdentificationOptions";
import { EAR_TRAINING_CHORD_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS } from "../../common/consts/earTrainingLessonChordsOptions";
const Modals = {
  alert: async ({ title, message }) => window.alert(`${title}\n\n${message}`)
};

const EXERCISE_OPTIONS = {
  [INTERVAL_IDENTIFICATION_SUBCATEGORY]: EAR_TRAINING_INTERVAL_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS,
  [CHORD_IDENTIFICATION_SUBCATEGORY]: EAR_TRAINING_CHORD_IDENTIFICATION_AVAILABLE_CUSTOM_OPTIONS
};

const EXERCISE_DEFAULTS = {
  [INTERVAL_IDENTIFICATION_SUBCATEGORY]: {
    defaultName: "My Custom Interval Identification Lesson",
    defaultIntervals: [],
    defaultRootNoteMode: { value: "range", label: "Range" },
    defaultNoteRange: [12, NOTES.length - 13],
    defaultFixedRootNote: 24,
    defaultPlaySpeed: { value: "normal", label: "Normal" },
    defaultPlayMode: [{ value: "ascending", label: "Ascending" }],
    defaultPointsToFinish: 10,
    defaultPenaltyPoints: 1,
  },
  [CHORD_IDENTIFICATION_SUBCATEGORY]: {
    defaultName: "My Custom Chord Identification Lesson",
    defaultChords: [],
    defaultRootNoteMode: { value: "range", label: "Range" },
    defaultNoteRange: [12, NOTES.length - 13],
    defaultFixedRootNote: 24,
    defaultPointsToFinish: 10,
    defaultPenaltyPoints: 1,
  }
};

const OPTIONS_FORM_COMPONENTS = {
  [INTERVAL_IDENTIFICATION_SUBCATEGORY]: CustomIntervalIdentificationOptions,
  [CHORD_IDENTIFICATION_SUBCATEGORY]: CustomChordIdentificationOptions
};

const getValueLabelPairFromString = string => ({ value: string, label: capitalize(string) });

// plugs in stuff to edit as props into the form
const mapCustomExerciseOptionsToDefaults = lesson => {
  if (lesson.subCategoryId === INTERVAL_IDENTIFICATION_SUBCATEGORY) {
    const { title = "", lessonOptions = {} } = lesson;
    const {
      choices,
      fixedRootNote,
      intervals,
      noteRange,
      playModes,
      playSpeed,
      pointsToFinish,
      rootNoteMode,
      wrongAnswerPenalty
    } = lessonOptions;

    return {
      defaultName: title,
      defaultIntervals: INTERVALS_VALUE_LABEL.filter(interval => intervals.includes(interval.value) && choices.includes(interval.label)),
      defaultRootNoteMode: getValueLabelPairFromString(rootNoteMode),
      defaultNoteRange: noteRange ? [NOTES.indexOf(noteRange[0]), NOTES.indexOf(noteRange[1])] : [12, NOTES.length - 13],
      defaultFixedRootNote: NOTES.indexOf(fixedRootNote),
      defaultPlaySpeed: getValueLabelPairFromString(playSpeed),
      defaultPlayMode: playModes.map(playMode => getValueLabelPairFromString(playMode)),
      defaultPointsToFinish: pointsToFinish,
      defaultPenaltyPoints: wrongAnswerPenalty,
    };
  }

  if (lesson.subCategoryId === CHORD_IDENTIFICATION_SUBCATEGORY) {
    const { title = "", lessonOptions = {} } = lesson;
    const {
      choices,
      fixedRootNote,
      chords,
      noteRange,
      playModes,
      playSpeed,
      pointsToFinish,
      rootNoteMode,
      wrongAnswerPenalty
    } = lessonOptions;
    
    return {
      defaultName: title,
      defaultChords: Object.values(chords)
        .map(({ displayName, machineName }) => ({ value: machineName, label: displayName })),
      defaultRootNoteMode: getValueLabelPairFromString(rootNoteMode),
      defaultNoteRange: noteRange ? [NOTES.indexOf(noteRange[0]), NOTES.indexOf(noteRange[1])] : [12, NOTES.length - 13],
      defaultFixedRootNote: NOTES.indexOf(fixedRootNote),
      defaultPointsToFinish: pointsToFinish,
      defaultPenaltyPoints: wrongAnswerPenalty,
    };
  }
};

export default function CustomExerciseChooseOptionsScreen(props) {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const { customLessons = [] } = props;
  const {
    subCategoryId, auth, isEditing, lessonIdToEdit, previousLocation 
  } = useSelector(({ customExercises = {}, firebase = {}, navigation = {} }) => ({ 
    subCategoryId: customExercises.subCategoryId,
    isEditing: customExercises.isEditing,
    auth: firebase.auth,
    lessonIdToEdit: customExercises.lessonIdToEdit,
    previousLocation: navigation.previousLocation
  }));
  const lessonToEdit = customLessons && customLessons.find(lesson => lesson.lessonId === lessonIdToEdit) || {};
  const subCategoryIdToUse = isEditing ? lessonToEdit.subCategoryId : subCategoryId;

  if (!subCategoryIdToUse) {
    return null;
  }

  const exerciseOptions = EXERCISE_OPTIONS[subCategoryIdToUse] || {};
  const exerciseDefaults = isEditing ?
    mapCustomExerciseOptionsToDefaults(lessonToEdit) ||EXERCISE_DEFAULTS[subCategoryIdToUse] || {} :
    EXERCISE_DEFAULTS[subCategoryIdToUse] || {};

  const OptionsComponent = OPTIONS_FORM_COMPONENTS[subCategoryIdToUse] || null;

  const onSubmit = async (options, localStorageNameSpace) => {
    // get rid of form cache
    clearLocalStorageNamespace(localStorageNameSpace);

    if (isEditing) {
      editCustomLesson(firebase, auth.uid, options, lessonIdToEdit);
      dispatch(customExerciseSetIsEditing(false));
      props.history.goBack();

      return;
    }

    if (customLessons && customLessons.length >= 20) {
      await Modals.alert({
        title: "Max Number Of Custom Lessons Reached (20)",
        message: "Please delete a custom lesson before creating another one."
      });

      return;
    }

    createCustomLesson(firebase, auth.uid, options);
    props.history.push(CUSTOM_EXERCISES_SCREEN);
  };

  const onBackButtonPress = () => {
    if (isEditing) {
      clearLocalStorageNamespace(CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE);
      dispatch(customExerciseSetIsEditing(false));
    }

    props.history.goBack();
  };
  return (
    <OptionsComponent
      {...props}
      exerciseOptions={exerciseOptions}
      exerciseDefaults={exerciseDefaults}
      onSubmit={onSubmit}
      onBackButtonPress={onBackButtonPress}
    />
  );
}
