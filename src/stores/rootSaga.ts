import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './sagas';

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
