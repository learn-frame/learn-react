import { put, takeLatest } from 'redux-saga/effects';
import { getStars } from 'apis/github.service';

interface Action {
  type: string;
  payload: {
    userName: string;
    repoName: string;
    params: GitHub.Params;
  };
}

function* fetchStargazers(action: Action) {
  try {
    const { userName, repoName, params } = action.payload;
    const res = yield getStars(userName, repoName, params);
    yield put({
      type: 'FETCH_SUCCESSED',
      payload: {
        data: res.data,
      },
    });
  } catch (e) {
    yield put({ type: 'FETCH_FAILED', payload: { err: e.message } });
  }
}

export function* watchStargazersAsync() {
  yield takeLatest('FETCH_STARGAZERS', fetchStargazers);
}
