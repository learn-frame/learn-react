import { combineReducers } from 'redux'
import AddAndSubtractReducers from './AddAndSubtract/reducers'
import MultiplicationAndDivisionReducers from './MultiplicationAndDivision/reducers'
import AsyncReducers from './Async/reducers'
import StargazersReducers from './Stargazers/reducers'

const rootReducer = combineReducers({
  AddAndSubtractReducers,
  MultiplicationAndDivisionReducers,
  AsyncReducers,
  StargazersReducers,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
