import { put, call, takeLatest, delay } from 'redux-saga/effects'
import { bitcoinApi } from 'constants/constants'
import * as constants from './constants'

function* fetchBitCoins() {
  try {
    yield put({
      type: constants.FETCH_REQUEST,
      payload: {
        loading: true,
      },
    })
    const res = yield call(fetch, bitcoinApi)
    const json = yield res.json()
    const data = Object.values(json.bpi)
    yield delay(2000)
    yield put({
      type: constants.FETCH_SUCCESSED,
      payload: {
        bitCoins: data,
      },
    })
  } catch (e) {
    yield put({
      type: constants.FETCH_FAILED,
      payload: { errMsg: e.message },
    })
  } finally {
    yield put({
      type: constants.FETCH_FINISHED,
      payload: {
        loading: false,
      },
    })
  }
}

export default function* watchBitCoinAsync() {
  yield takeLatest(constants.FETCH_BITCOIN, fetchBitCoins)
}
