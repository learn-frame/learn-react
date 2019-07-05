import { delay } from '../tools/tools';
import { put, takeEvery } from 'redux-saga/effects';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// const bitcoinApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// export function* fetchData() {
//   yield delay(2500);
//   fetch(bitcoinApi).then(res => {
//     res.json().then(data => {
//       const result = Object.values(data.bpi);
//       console.log(result);
//     });
//   });
// }
