import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { getBitCoin } from 'src/services/bitCoin.service'
import { fetchSuccess, fetchError } from './actions'
import { BitCoinsActionTypes, Response } from './types'

function* handleFetch() {
  try {
    const res: Response = yield call(getBitCoin)
    yield put(fetchSuccess(res.data))
  } catch (err) {
    yield put(fetchError(err.message))
  }
}

function* watchFetchRequest() {
  yield takeLatest(BitCoinsActionTypes.FETCH_REQUEST, handleFetch)
}

function* bitCoinsSaga() {
  yield all([fork(watchFetchRequest)])
}

export default bitCoinsSaga
