
import React from "react";
import { useDispatch } from "react-redux";
import Container from "../../common/components/Container";
import Header from "../../common/components/Header";
import ProgressBar from "../../common/components/ProgressBar";
import Screen from "../../common/components/Screen";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import TextSelectionCard from "../../common/components/TextSelectionCard";
import {
  accentOne, accentOneBoxShadow, primary, primaryBoxShadow, purple, purpleBoxShadow, yellow, yellowBoxShadow 
} from "../../common/consts/colors";
import { customExerciseSetCategoryId } from "../../store/customExercises/actions";

import "./CustomExerciseChooseCategoryScreen.scss";
import { CUSTOM_EXERCISES_CHOOSE_SUB_CATEGORY_SCREEN } from "../../common/consts/routes";
import { logCustomExerciseCategorySelected } from "../../common/consts/analytics";
import {
  EAR_TRAINING_CATEGORY_ID, MUSIC_THEORY_EXERCISES_CATEGORY_ID, RHYTHM_CATEGORY_ID, MUSIC_THEORY_CATEGORY_ID 
} from "../../common/consts/lessonCategoryIds";

export default function CustomExerciseChooseCategoryScreen(props) {
  const dispatch = useDispatch();
  const onCategorySelected = (selectedCategoryId) => {
    logCustomExerciseCategorySelected(selectedCategoryId);
    dispatch(customExerciseSetCategoryId(selectedCategoryId));
    props.history.push(CUSTOM_EXERCISES_CHOOSE_SUB_CATEGORY_SCREEN);
  };

  return (
    <Screen className="custom-exercise-choose-category-screen" hasGrayBackground>
      <Header 
        hasBackButton
        onBackButtonPress={() => props.history.goBack()}
      />
      <SectionHeader
        text="Choose Exercise Category"
      />
      <Container className="category-container">
        <TextSelectionCard backgroundColor={primary} boxShadow={primaryBoxShadow} onClick={() => onCategorySelected(EAR_TRAINING_CATEGORY_ID)}>
          Ear Training
        </TextSelectionCard>
        <TextSelectionCard backgroundColor={yellow} boxShadow={yellowBoxShadow} isDisabled>
          Rhythm
        </TextSelectionCard>
        <TextSelectionCard backgroundColor={purple} boxShadow={purpleBoxShadow} isDisabled>
          Music Theory Exercises
        </TextSelectionCard>
        <TextSelectionCard backgroundColor={accentOne} boxShadow={accentOneBoxShadow}  isDisabled>
          Music Theory
        </TextSelectionCard>
      </Container>
    </Screen>
  );
}
