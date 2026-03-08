import {
  CUSTOM_EXERCISES_SET_OPTIONS_AND_TITLE, CUSTOM_EXERCISES_SET_SUB_CATEGORY_ID, CUSTOM_EXERCISES_SET_CATEGORY_ID, CUSTOM_EXERCISES_SET_IS_EDITING 
} from "../types";
import { CUSTOM_EXERCISES_CATEGORY_ID } from "../../common/consts/lessonCategoryIds";

export const customExerciseSetOptionsAndTitle = (options, title) => dispatch => {
  dispatch({
    type: CUSTOM_EXERCISES_SET_OPTIONS_AND_TITLE,
    payload: {
      options,
      title
    }
  });
};

export const customExerciseSetCategoryId = categoryId => dispatch => {
  dispatch({
    type: CUSTOM_EXERCISES_SET_CATEGORY_ID,
    payload: categoryId
  });
};

export const customExerciseSetSubCategoryId = subCategoryId => dispatch => {
  dispatch({
    type: CUSTOM_EXERCISES_SET_SUB_CATEGORY_ID,
    payload: subCategoryId
  });
};

export const customExerciseSetIsEditing = (isEditing, lessonId) => dispatch => {
  dispatch({
    type: CUSTOM_EXERCISES_SET_IS_EDITING,
    payload: {
      isEditing,
      lessonId
    }
  });
};

