import { combineReducers } from 'redux'
import addAndSubtractReducers from './addAndSubtract/reducers'
import multiplicationAndDivisionReducers from './multiplicationAndDivision/reducers'
import bitCoinsReducers from './bitCoins/reducers'
import stargazersReducers from './stargazers/reducers'

const rootReducer = combineReducers({
  addAndSubtractReducers,
  multiplicationAndDivisionReducers,
  bitCoinsReducers,
  stargazersReducers,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
