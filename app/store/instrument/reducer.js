import { 
  INSTRUMENT_PROVDER_SET_IS_LOADING,
  INSTRUMENT_PROVIDER_SET_PIANO, 
  INSTRUMENT_PROVIDER_SET_SELECTED_INSTRUMENT
} from "../types";

const initialState =  {
  isLoading: false,
  piano: undefined,
  selectedInstrument: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case INSTRUMENT_PROVDER_SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.payload
    };
  case INSTRUMENT_PROVIDER_SET_SELECTED_INSTRUMENT:
    return {
      ...state,
      selectedInstrument: action.payload
    };
  case INSTRUMENT_PROVIDER_SET_PIANO:
    return {
      ...state,
      piano: action.payload,
    };
  default:
    return state;
  }
};
