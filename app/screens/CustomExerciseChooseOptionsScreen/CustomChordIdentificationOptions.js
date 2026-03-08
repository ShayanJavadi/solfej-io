
import { isEmpty } from "lodash";
import Slider, { Range } from "rc-slider";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Button from "../../common/components/Button/Button";
import Container from "../../common/components/Container";
import Header from "../../common/components/Header";
import Screen from "../../common/components/Screen";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import { CHORDS } from "../../common/consts/earTrainingLessonChordsOptions";
import { ROOT_NOTE_MODE_FIXED, ROOT_NOTE_MODE_RANGE } from "../../common/consts/earTrainingLessonCommonOptions";
import { CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE } from "../../common/consts/localStorage";
import { CHORD_IDENTIFICATION_CUSTOM_LESSON_SCREEN } from "../../common/consts/routes";
import { NOTES } from "../../common/consts/twelveToneConsts";
import useLongHeight from "../../common/hooks/useLongHeight";
import usePersistedState from "../../common/hooks/usePersistedState";
import getFixedRootNoteText from "../../util/getFixedRootNoteText";
import getNoteRangeText from "../../util/getNoteRangeText";
import getReactSelectTheme from "../../util/getReactSelectTheme";
import splitValueAndLabel from "../../util/splitValueAndLabel";
import "./CustomExerciseChooseOptionsScreen.scss";
import { CHORD_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";
import { EAR_TRAINING_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";

const mapChordValueLabelsToChordObjects = chordValueLabels => {
  return chordValueLabels.reduce((chords, { value }) => {
    return (
      {
        ...chords,
        [value]: CHORDS[value]
      }
    );
  }, {});
};

export default function CustomChordIdentificationOptions(props) {
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
    chords = [],
    rootNoteModes = [],
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
    defaultChords,
  } = exerciseDefaults;

  const LOCAL_STORAGE_NAMESPACE = "ChordIdentification";
  
  const [name, setName] = usePersistedState(`selectedName-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultName);
  const [fixedRootNote, setfixedRootNote] = usePersistedState(`fixedRootNote-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultFixedRootNote);
  const [noteRange, setNoteRange] = usePersistedState(`noteRange-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultNoteRange);
  const [rootNoteMode, setRootNoteMode] = usePersistedState(`rootNoteMode-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultRootNoteMode);
  const [pointsToFinish, setPointsToFinish] = usePersistedState(`pointsToFinish-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultPointsToFinish);
  const [penaltyPoints, setPenaltyPoints] = usePersistedState(`penaltyPoints-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultPenaltyPoints);
  const [selectedChords, setSelectedChords] = usePersistedState(`selectedChords-${LOCAL_STORAGE_NAMESPACE}-${CUSTOM_EXERCISE_OPTIONS_FORM_NAMESPACE}`, defaultChords);

  const lessonOptions = {
    fixedRootNote: NOTES[fixedRootNote],
    noteRange: [NOTES[noteRange[0]], NOTES[noteRange[1]]],
    rootNoteMode: rootNoteMode.value,
    pointsToFinish,
    wrongAnswerPenalty: penaltyPoints,
    chords: mapChordValueLabelsToChordObjects(selectedChords),
    choices: splitValueAndLabel(selectedChords).labels
  };

  const customLesson = {
    lessonOptions,
    subCategoryId: CHORD_IDENTIFICATION_SUBCATEGORY,
    categoryId: EAR_TRAINING_CATEGORY_ID,
    title: name,
    route: CHORD_IDENTIFICATION_CUSTOM_LESSON_SCREEN,
    tag: "Ear Training",
    description: "Custom chord identification lesson"
  };

  const fixedRootNoteText = getFixedRootNoteText(fixedRootNote);
  const noteRangeText = getNoteRangeText(noteRange);

  const canSubmit = !isEmpty(name) && !isEmpty(selectedChords);

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
          Chords
        </SectionHeader>
        <Select
          closeMenuOnSelect={false}
          blurInputOnSelect={false}
          isMulti
          options={chords}
          defaultValue={selectedChords}
          value={selectedChords}
          onChange={newChords => setSelectedChords(newChords)}
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
