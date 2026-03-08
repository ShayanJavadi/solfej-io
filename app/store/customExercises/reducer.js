import {
  CUSTOM_EXERCISES_SET_SUB_CATEGORY_ID, CUSTOM_EXERCISES_SET_CATEGORY_ID, CUSTOM_EXERCISES_SET_OPTIONS_AND_TITLE, CUSTOM_EXERCISES_SET_IS_EDITING 
} from "../types";

const initialState = {
  title: undefined,
  categoryId: undefined,
  subCategoryId: undefined,
  options: {},
  isEditing: false,
  lessonIdToEdit: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
  case CUSTOM_EXERCISES_SET_OPTIONS_AND_TITLE:
    return {
      ...state,
      title: action.payload.title,
      options: action.payload.options
    };
  case CUSTOM_EXERCISES_SET_CATEGORY_ID:
    return {
      ...state,
      categoryId: action.payload,
      subCategoryId: undefined,  // need to reset subcategory ids since if user goes a-b and then back b won't be valid anymore
    };
  case CUSTOM_EXERCISES_SET_SUB_CATEGORY_ID:
    return {
      ...state,
      subCategoryId: action.payload,
      options: {} // need to reset options since if user goes A-b-c sets options and then goes a-b-d options won't be valid
    };
  case CUSTOM_EXERCISES_SET_IS_EDITING:
    return {
      ...state,
      isEditing: action.payload.isEditing,
      lessonIdToEdit: action.payload.lessonId
    };
  default:
    return state;
  }
};
