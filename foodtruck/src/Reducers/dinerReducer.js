import {SET_DINER_USERNAME, SET_DINERID} from '../Actions/DinerActions';
const initialState = {
    diner_username: '',
    diner_id: '',
};

const DinerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DINER_USERNAME:
      return ({
        ...state,
        diner_username: action.payload
      })
      case SET_DINERID:
        return ({
          ...state,
          diner_id: action.payload
        })
    default:
      return state;
  }
};

export default DinerReducer;
