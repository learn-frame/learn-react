import { combineReducers } from 'redux';
import AddAndSubtract from './AddAndSubtract/reducers';
import MultiplicationAndDivision from './MultiplicationAndDivision/reducers';

export default combineReducers({
  AddAndSubtract,
  MultiplicationAndDivision,
});
