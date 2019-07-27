import { select, takeEvery } from 'redux-saga/effects'

export function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('%c action: ', 'background: #000; color: #fff', action)
    console.log('%c state after: ', 'background: #000; color: #fff', state)
  })
}
