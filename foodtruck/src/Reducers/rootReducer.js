import {combineReducers} from 'redux';
import TruckReducer from './TruckReducer';
import DinerReducer from './dinerReducer';
import OperatorReducer from './operatorReducer';

 const rootReducer = combineReducers({
   truck: TruckReducer,
   diner: DinerReducer,
   operator: OperatorReducer,
})
export default rootReducer;