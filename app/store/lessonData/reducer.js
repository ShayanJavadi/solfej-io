import { LESSON_DATA_SET_IS_LOADING } from "../types";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LESSON_DATA_SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  default:
    return state;
  }
};
