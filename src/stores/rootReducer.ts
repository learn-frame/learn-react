import { combineReducers } from 'redux'
import AddAndSubtractReducers from './AddAndSubtract/reducers'
import MultiplicationAndDivisionReducers from './MultiplicationAndDivision/reducers'
import BitCoinsReducers from './BitCoins/reducers'
import StargazersReducers from './Stargazers/reducers'

const rootReducer = combineReducers({
  AddAndSubtractReducers,
  MultiplicationAndDivisionReducers,
  BitCoinsReducers,
  StargazersReducers,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
