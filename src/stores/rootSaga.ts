import { all } from 'redux-saga/effects'
import { watchIncrementAsync } from './AddAndSubtract/sagas'
import { watchAndLog } from './MultiplicationAndDivision/sagas'
import watchBitCoinAsync from './BitCoins/sagas'
import watchStargazersAsync from './Stargazers/sagas'

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchAndLog(),
    watchBitCoinAsync(),
    watchStargazersAsync(),
  ])
}
