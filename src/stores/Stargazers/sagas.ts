import { put, takeLatest, delay } from 'redux-saga/effects';
import { getStars } from 'apis/github.service';

function* fetchStargazers(action: any) {
  try {
    yield put({
      type: 'FETCH_REQUEST',
      payload: {
        loading: true,
      },
    });
    const res = yield getStars(
      action.payload.userName,
      action.payload.repoName,
      action.payload.params,
    );

    yield delay(2000);
    yield put({
      type: 'FETCH_SUCCESSED',
      payload: {
        data: res.data,
      },
    });
  } catch (e) {
    yield put({ type: 'FETCH_FAILED', payload: { err: e.message } });
  } finally {
    yield put({
      type: 'FETCH_FINISHED',
      payload: {
        loading: false,
      },
    });
  }
}

export function* watchStargazersAsync() {
  yield takeLatest('FETCH_STARGAZERS', fetchStargazers);
}
