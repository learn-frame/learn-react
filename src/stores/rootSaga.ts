import { all, fork } from 'redux-saga/effects'
import incrementSaga from './addAndSubtract/sagas'
import multiplicationAndDivisionSaga from './multiplicationAndDivision/sagas'
import bitCoinSaga from './bitCoins/sagas'
import stargazersSaga from './stargazers/sagas'

export default function* rootSaga() {
  yield all([
    incrementSaga(),
    multiplicationAndDivisionSaga(),
    fork(bitCoinSaga),
    fork(stargazersSaga),
  ])
}
