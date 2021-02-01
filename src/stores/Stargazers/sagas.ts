import { put, call, takeLatest } from 'redux-saga/effects'
import { getStars } from 'src/apis/github.service'
import { StargazersActionTypes } from './types'

function* fetchStargazers(action: any) {
  try {
    yield put({
      type: StargazersActionTypes.FETCH_REQUEST,
      payload: {
        loading: true,
      },
    })
    const { data } = yield call(getStars, action.payload)
    yield put({
      type: StargazersActionTypes.FETCH_SUCCESSED,
      payload: {
        users: data,
      },
    })
  } catch (e) {
    yield put({
      type: StargazersActionTypes.FETCH_FAILED,
      payload: { errMsg: e.message },
    })
  }
}

export default function* watchStargazersAsync() {
  yield takeLatest(StargazersActionTypes.FETCH_STARGAZERS, fetchStargazers)
}
