import { LESSON_DATA_SET_IS_LOADING } from "../types";

export const setLessonDataIsLoading = isLoading => dispatch => {
  dispatch({
    type: LESSON_DATA_SET_IS_LOADING,
    payload: isLoading
  });
};