import { select, takeEvery, take } from 'redux-saga/effects'

// select 对标 getState()
// 
export function* watchAndLog1() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('%c action: ', 'background: #000; color: #fff', action)
    console.log('%c state after: ', 'background: #000; color: #fff', state)
  })
}

export function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('%c action: ', 'background: #000; color: #fff', action)
    console.log('%c state after: ', 'background: #000; color: #fff', state)
  }
}