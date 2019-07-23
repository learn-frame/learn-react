import { put, call, takeLatest, delay } from 'redux-saga/effects'
import { bitcoinApi } from 'constants/constants'

function* fetchBitCoins() {
  try {
    yield put({
      type: 'bitCoins/FETCH_REQUEST',
      payload: {
        loading: true,
      },
    })
    const res = yield call(fetch, bitcoinApi)
    const json = yield res.json()
    const data = Object.values(json.bpi)
    yield delay(2000)
    yield put({
      type: 'bitCoins/FETCH_SUCCESSED',
      payload: {
        bitCoins: data,
      },
    })
  } catch (e) {
    yield put({
      type: 'bitCoins/FETCH_FAILED',
      payload: { errMsg: e.message },
    })
  } finally {
    yield put({
      type: 'bitCoins/FETCH_FINISHED',
      payload: {
        loading: false,
      },
    })
  }
}

export default function* watchBitCoinAsync() {
  yield takeLatest('FETCH_BITCOIN', fetchBitCoins)
}
