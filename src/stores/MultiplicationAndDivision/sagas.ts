import { select, takeEvery, take } from 'redux-saga/effects'


export function* watchMultiplicationAndDivisionAsyncByTakeEvery() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('%c action: ', 'background: #000; color: #fff', action)
    console.log('%c state after: ', 'background: #000; color: #fff', state)
  })
}

export default function* watchMultiplicationAndDivisionAsync() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('%c action: ', 'background: #000; color: #fff', action)
    console.log('%c state after: ', 'background: #000; color: #fff', state)
  }
}