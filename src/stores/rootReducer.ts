import { combineReducers } from 'redux';
import AddAndSubtract from './AddAndSubtract/reducers';
import MultiplicationAndDivision from './MultiplicationAndDivision/reducers';
import AsyncReducers from './Async/reducers';

export default combineReducers({
  AddAndSubtract,
  MultiplicationAndDivision,
  AsyncReducers,
});
