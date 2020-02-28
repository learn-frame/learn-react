import { put, call, takeLatest } from 'redux-saga/effects'
import { getStars } from '../../apis/github.service'
import { constants } from './actions'

function* fetchStargazers(action: any) {
  try {
    yield put({
      type: constants.FETCH_REQUEST,
      payload: {
        loading: true,
      },
    })
    const { userName, repoName, params } = action.payload
    // call 第一个参数接收一个函数，后面是该函数接收的参数列表
    const { data } = yield call(getStars, userName, repoName, params)
    // 成功时将请求数据 put 出去 (dispatch)
    yield put({
      type: constants.FETCH_SUCCESSED,
      payload: {
        users: data,
      },
    })
  } catch (e) {
    // 失败时将错误信息 put 出去 (dispatch)
    yield put({ type: constants.FETCH_FAILED, payload: { errMsg: e.message } })
  } finally {
    yield put({
      type: constants.FETCH_FINISHED,
      payload: {
        loading: false,
      },
    })
  }
}

export default function* watchStargazersAsync() {
  yield takeLatest(constants.FETCH_STARGAZERS, fetchStargazers)
}
