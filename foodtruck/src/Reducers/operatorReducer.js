import {SET_OPERATOR_USERNAME,SET_OPERATORID} from '../Actions/OperatorActions';

const initialState = {
operator_username: '',
operator_id:''
}

const OperatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPERATOR_USERNAME:
          return ({
            ...state,
            operator_username: action.payload
          })
          case SET_OPERATORID:
            return ({
              ...state,
              operator_id: action.payload
            })
        default:
          return state;
    }
}
export default OperatorReducer;