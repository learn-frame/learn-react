import { put, call, takeLatest, delay } from 'redux-saga/effects';

const bitcoinApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function* fetchBitCoin() {
  try {
    yield put({
      type: 'FETCH_REQUEST',
      payload: {
        loading: true,
      },
    });
    const res = yield call(fetch, bitcoinApi);
    const json = yield res.json();
    const data = Object.values(json.bpi);
    yield delay(2000);
    yield put({
      type: 'FETCH_SUCCESSED',
      payload: {
        data,
      },
    });
  } catch (e) {
    yield put({ type: 'FETCH_FAILED', payload: { err: e.message } });
  } finally {
    yield put({
      type: 'FETCH_FINISHED',
      payload: {
        loading: false,
      },
    });
  }
}

export function* watchBitCoinAsync() {
  yield takeLatest('FETCH_BITCOIN', fetchBitCoin);
}
