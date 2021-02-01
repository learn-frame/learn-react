import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { getStars } from 'src/apis/github.service'
import { fetchSuccess, fetchError } from './actions'
import { StargazersActionTypes } from './types'

function* handleFetch() {
  try {
    const res = yield call(getStars, {
      userName: 'Yancey-Blog',
      repoName: 'BLOG_FE',
      ext: { page: 1 },
    })

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res.data))
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(StargazersActionTypes.FETCH_REQUEST, handleFetch)
}

function* stargazersSaga() {
  yield all([fork(watchFetchRequest)])
}

export default stargazersSaga
