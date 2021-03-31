import {
  FETCHING_TRUCKS_START,
  FETCHING_TRUCKS_SUCCESS,
  FETCHING_TRUCKS_FAIL,
} from "../Actions/TruckActions";
const initialState = {
  trucks: [],
  isFetching: false,
  error: "",
};

const TruckReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TRUCKS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_TRUCKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        trucks: action.payload,
      };
    case FETCHING_TRUCKS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TruckReducer;
