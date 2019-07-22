import { combineReducers } from 'redux';
import AddAndSubtractReducers from './AddAndSubtract/reducers';
import MultiplicationAndDivisionReducers from './MultiplicationAndDivision/reducers';
import AsyncReducers from './Async/reducers';
import StargazersReducers from './Stargazers/reducers';

export default combineReducers({
  AddAndSubtractReducers,
  MultiplicationAndDivisionReducers,
  AsyncReducers,
  StargazersReducers,
});
