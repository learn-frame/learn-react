import { put, takeEvery, delay } from 'redux-saga/effects';

export function* incrementAsync() {
  yield delay(2000);
  // redux-saga 通过 dispatch 发起一个 INCREMENT 的 action
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  // takeEvery 用于监听所有 INCREMENT_ASYNC 的 action
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
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
