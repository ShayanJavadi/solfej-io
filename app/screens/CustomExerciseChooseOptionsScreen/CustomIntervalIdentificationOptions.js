
import Slider, { Range } from "rc-slider";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Button from "../../common/components/Button/Button";
import Container from "../../common/components/Container";
import Header from "../../common/components/Header";
import Screen from "../../common/components/Screen";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import { accentTwo, primary } from "../../common/consts/colors";
import { ROOT_NOTE_MODE_FIXED, ROOT_NOTE_MODE_RANGE } from "../../common/consts/earTrainingLessonCommonOptions";
import { INTERVAL_IDENTIFICATION_CUSTOM_LESSON_SCREEN } from "../../common/consts/routes";
import { NOTES } from "../../common/consts/twelveToneConsts";
import usePersistedState from "../../common/hooks/usePersistedState";
import scrollUp from "../../util/browser/scrollUp";
import splitValueAndLabel from "../../util/splitValueAndLabel";
import "./CustomExerciseChooseOptionsScreen.scss";
import { CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE } from "../../common/consts/localStorage";
import getReactSelectTheme from "../../util/getReactSelectTheme";
import useLongHeight from "../../common/hooks/useLongHeight";
import getFixedRootNoteText from "../../util/getFixedRootNoteText";
import getNoteRangeText from "../../util/getNoteRangeText";
import { INTERVAL_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";
import { EAR_TRAINING_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";

export default function CustomIntervalIdentificationOptions(props) {
  const dispatch = useDispatch();
  useLongHeight();
  const { 
    subCategoryId,
    categoryId,
    isEditing,
    lessonIdToEdit
  } = useSelector(({ customExercises = {} }) => ({ 
    subCategoryId: customExercises.subCategoryId,
    categoryId: customExercises.categoryId ,
    isEditing: customExercises.isEditing,
    lessonIdToEdit: customExercises.lessonIdToEdit
  }));
  const { 
    exerciseOptions = {},
    exerciseDefaults = {},
    onSubmit = () => null,
    onBackButtonPress
  } = props;
  const {
    intervals = [],
    playModes = [],
    rootNoteModes = [],
    playSpeeds = [],
    octaveRange = [],
    referenceNoteRange = []
  } = exerciseOptions;
  const {
    defaultName,
    defaultRootNoteMode,
    defaultNoteRange,
    defaultFixedRootNote,
    defaultPlaySpeed,
    defaultPlayMode,
    defaultPointsToFinish,
    defaultPenaltyPoints,
    defaultIntervals,
  } = exerciseDefaults;

  const LOCAL_STORAGE_NAMESPACE = "IntervalIdentification";
  
  const [name, setName] = usePersistedState(`selectedName-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultName);
  const [fixedRootNote, setfixedRootNote] = usePersistedState(`fixedRootNote-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultFixedRootNote);
  const [noteRange, setNoteRange] = usePersistedState(`noteRange-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultNoteRange);
  const [rootNoteMode, setRootNoteMode] = usePersistedState(`rootNoteMode-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultRootNoteMode);
  const [playSpeed, setPlaySpeed] = usePersistedState(`playSpeed-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultPlaySpeed);
  const [playMode, setPlayMode] = usePersistedState(`playMode-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultPlayMode);
  const [pointsToFinish, setPointsToFinish] = usePersistedState(`pointsToFinish-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultPointsToFinish);
  const [penaltyPoints, setPenaltyPoints] = usePersistedState(`penaltyPoints-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultPenaltyPoints);
  const [selectedIntervals, setSelectedIntervals] = usePersistedState(`selectedIntervals-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultIntervals);
  
  const lessonOptions = {
    fixedRootNote: NOTES[fixedRootNote],
    noteRange: [NOTES[noteRange[0]], NOTES[noteRange[1]]],
    rootNoteMode: rootNoteMode.value,
    playSpeed: playSpeed.value,
    playModes: splitValueAndLabel(playMode).values,
    pointsToFinish,
    wrongAnswerPenalty: penaltyPoints,
    intervals: splitValueAndLabel(selectedIntervals).values,
    choices: splitValueAndLabel(selectedIntervals).labels
  };
  const customLesson = {
    lessonOptions,
    subCategoryId: INTERVAL_IDENTIFICATION_SUBCATEGORY,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: name,
    route: INTERVAL_IDENTIFICATION_CUSTOM_LESSON_SCREEN,
    tag: "Ear Training",
    description: "Custom interval identification lesson"
  };

  const fixedRootNoteText = getFixedRootNoteText(fixedRootNote);
  const noteRangeText = getNoteRangeText(noteRange);

  const canSubmit = !isEmpty(name) && !isEmpty(selectedIntervals) && !isEmpty(playMode);

  return (
    <Screen className="custom-exercise-choose-options-screen" hasGrayBackground>
      <Header
        hasBackButton
        onBackButtonPress={onBackButtonPress}
      />
      <SectionHeader>
        {
          isEditing ?
            "Edit Exercise Settings" :
            "Choose Exercise Settings"
        }
      </SectionHeader>
      <Container className="options-container">
        <SectionHeader isSubHeader>
          Name
        </SectionHeader>
        <input
          className="input"
          value={name}
          onChange={({ target }) => setName(target.value)}
          maxLength={42}
          placeholder="Enter a name for your exercise"
        />
        <SectionHeader isSubHeader>
          Intervals
        </SectionHeader>
        <Select
          closeMenuOnSelect={false}
          blurInputOnSelect={false}
          isMulti
          options={intervals}
          defaultValue={selectedIntervals}
          value={selectedIntervals}
          onChange={newIntervals => setSelectedIntervals(newIntervals)}
          theme={getReactSelectTheme}
          isSearchable={false}
        />
        <SectionHeader isSubHeader>
          Root Note Mode
        </SectionHeader>
        <Select
          options={rootNoteModes}
          value={rootNoteMode}
          defaultValue={rootNoteMode}
          onChange={(newRootNoteMode) => setRootNoteMode(newRootNoteMode)}
          theme={getReactSelectTheme}
          isSearchable={false}
        />
        {
          rootNoteMode.value === ROOT_NOTE_MODE_RANGE &&
          <>
            <SectionHeader isSubHeader>
              Root Note Range: {noteRangeText}
            </SectionHeader>
            <Range
              allowCross={false}
              defaultValue={noteRange}
              max={NOTES.length - 1}
              onChange={newNoteRange => {
                setNoteRange(newNoteRange);
              }}
            />
          </>
        }
        {
          rootNoteMode.value === ROOT_NOTE_MODE_FIXED &&
          <>
            <SectionHeader isSubHeader>
              Root Note: {fixedRootNoteText}
            </SectionHeader>
            <Slider
              className="fixed-root-range-selector"
              max={NOTES.length - 1}
              defaultValue={fixedRootNote}
              onChange={newFixedRootNote => {
                setfixedRootNote(newFixedRootNote);
              }}
            />
          </>
        }
        <SectionHeader isSubHeader>
          Play Speed
        </SectionHeader>
        <Select
          options={playSpeeds}
          defaultValue={playSpeed}
          value={playSpeed}
          onChange={(newPlaySpeed) => setPlaySpeed(newPlaySpeed)}
          theme={getReactSelectTheme}
          isSearchable={false}
        />
        <SectionHeader isSubHeader>
          Play Modes
        </SectionHeader>
        <Select
          closeMenuOnSelect={false}
          blurInputOnSelect={false}
          isMulti
          options={playModes}
          defaultValue={playMode}
          value={playMode}
          onChange={(newPlayMode) => setPlayMode(newPlayMode)}
          theme={getReactSelectTheme}
          isSearchable={false}
        />
        <SectionHeader isSubHeader>
          Points To Finish: {pointsToFinish}
        </SectionHeader>
        <Slider
          defaultValue={pointsToFinish}
          value={pointsToFinish}
          onChange={newPointsToFinish => setPointsToFinish(newPointsToFinish)}
          max={100}
          min={1}
        />
        <SectionHeader isSubHeader>
          Penalty Points Per Wrong Answer: {penaltyPoints}
        </SectionHeader>
        <Slider
          defaultValue={penaltyPoints}
          value={penaltyPoints}
          onChange={newPenaltyPoints => setPenaltyPoints(newPenaltyPoints)}
          max={pointsToFinish}
        />
        <div className="button-container">
          <Button
            isTextCentered
            isSuccess
            text={isEditing ? "UPDATE EXERCISE" : "CREATE EXERCISE"}  
            isDisabled={!canSubmit}
            onClick={() => canSubmit && onSubmit(customLesson, LOCAL_STORAGE_NAMESPACE)}
          />
        </div>
      </Container>
    </Screen>
  );
}
