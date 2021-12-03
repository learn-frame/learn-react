import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { getStars } from 'src/services/github.service'
import { fetchSuccess, fetchError } from './actions'
import { StargazersActionTypes, Response } from './types'

function* handleFetch(action: any) {
  try {
    const res: Response = yield call(getStars, action.payload)
    yield put(fetchSuccess(res.data))
  } catch (err: any) {
    yield put(fetchError(err.message))
  }
}

function* watchFetchRequest() {
  yield takeLatest(StargazersActionTypes.FETCH_REQUEST, handleFetch)
}

function* stargazersSaga() {
  yield all([fork(watchFetchRequest)])
}

export default stargazersSaga
