import { put, call, takeLatest } from 'redux-saga/effects'
import * as constants from './constants'

function* fetchBitCoins() {
  try {
    yield put({
      type: constants.FETCH_REQUEST,
      payload: {
        loading: true,
      },
    })
    // @ts-ignore
    const res = yield call(
      fetch,
      'https://api.coindesk.com/v1/bpi/currentprice.json',
    )

    // @ts-ignore
    const json = yield res.json()
    const data = Object.values(json.bpi)
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
