import AddAndSubtract from './AddAndSubtract/reducers';
import MultiplicationAndDivision from './MultiplicationAndDivision/reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  AddAndSubtract,
  MultiplicationAndDivision,
});

export default rootReducer;
