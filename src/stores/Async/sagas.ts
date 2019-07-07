import { put, call, takeLatest } from 'redux-saga/effects';

const bitcoinApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function* fetchBitCoin() {
  try {
    const res = yield call(fetch, bitcoinApi);
    const json = yield res.json();
    const payload = Object.values(json.bpi);
    yield put({ type: 'FETCH_SUCCESSED', payload });
  } catch (e) {
    yield put({ type: 'FETCH_FAILED', payload: e.message });
  } finally {
    // TODO
  }
}

export function* watchBitCoinAsync() {
  yield takeLatest('FETCH_BITCOIN', fetchBitCoin);
}
