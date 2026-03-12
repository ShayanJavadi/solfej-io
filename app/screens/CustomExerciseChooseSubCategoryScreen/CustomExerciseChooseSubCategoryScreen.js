
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../common/components/Container";
import Header from "../../common/components/Header";
import ProgressBar from "../../common/components/ProgressBar";
import Screen from "../../common/components/Screen";
import SectionHeader from "../../common/components/SectionHeader/SectionHeader";
import TextSelectionCard from "../../common/components/TextSelectionCard";
import {
  accentOne, accentOneBoxShadow, primary, primaryBoxShadow, purple, purpleBoxShadow, yellow, yellowBoxShadow 
} from "../../common/consts/colors";
import {
  EAR_TRAINING_CATEGORY_ID, MUSIC_THEORY_CATEGORY_ID, MUSIC_THEORY_EXERCISES_CATEGORY_ID, RHYTHM_CATEGORY_ID 
} from "../../common/consts/lessonCategoryIds";
import { CHORD_IDENTIFICATION_SUBCATEGORY, INTERVAL_IDENTIFICATION_SUBCATEGORY } from "../../common/consts/lessonSubcategoryIds";
import { CUSTOM_EXERCISES_CHOOSE_SUB_CATEGORY_SCREEN, CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN } from "../../common/consts/routes";
import { customExerciseSetSubCategoryId } from "../../store/customExercises/actions";
import "./CustomExerciseChooseSubCategoryScreen.scss";
import { logCustomExerciseSubcategorySelected } from "../../common/consts/analytics";

const EXERCISE_TYPES = {
  [EAR_TRAINING_CATEGORY_ID]: {
    color: primary,
    boxShadow: primaryBoxShadow,
    types: [
      {
        id: INTERVAL_IDENTIFICATION_SUBCATEGORY,
        name: "Interval Identification"
      },
      {
        id: CHORD_IDENTIFICATION_SUBCATEGORY,
        name: "Chord Identification"
      }
    ]
  }
};

export default function CustomExerciseChooseSubCategoryScreen(props) {
  const dispatch = useDispatch();
  const { categoryId } = useSelector(({ customExercises = {} }) => ({ categoryId: customExercises.categoryId }));
  const { types = [], color, boxShadow } = EXERCISE_TYPES[categoryId] || {};

  const onSubCategorySelected = (selectedSubCategoryId) => {
    logCustomExerciseSubcategorySelected(selectedSubCategoryId);
    dispatch(customExerciseSetSubCategoryId(selectedSubCategoryId));
    props.history.push(CUSTOM_EXERCISES_CHOOSE_OPTIONS_SCREEN);
  };

  return (
    <Screen className="custom-exercise-choose-sub-category-screen" hasGrayBackground>
      <Header
        hasBackButton
        onBackButtonPress={() => props.history.goBack()}
      />
      <SectionHeader
        text="Choose Exercise Type"
      />
      <Container className="sub-category-container">
        {
          types.map(({ name, id }) => (
            <TextSelectionCard backgroundColor={color} boxShadow={boxShadow} onClick={() => onSubCategorySelected(id)}>
              {name}
            </TextSelectionCard>
          ))
        }
      </Container>
    </Screen>
  );
}
