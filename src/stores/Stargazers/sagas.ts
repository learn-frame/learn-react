import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { getStars } from 'src/apis/github.service'
import { fetchSuccess, fetchError } from './actions'
import { StargazersActionTypes, Response } from './types'

function* handleFetch() {
  try {
    const res: Response = yield call(getStars, {
      userName: 'Yancey-Blog',
      repoName: 'BLOG_FE',
      ext: { page: 1 },
    })
    yield put(fetchSuccess(res.data))
  } catch (err) {
    yield put(fetchError(err.message))
  }
}

function* watchFetchRequest() {
  yield takeEvery(StargazersActionTypes.FETCH_REQUEST, handleFetch)
}

function* stargazersSaga() {
  yield all([fork(watchFetchRequest)])
}

export default stargazersSaga
