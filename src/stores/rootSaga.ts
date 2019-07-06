import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './AddAndSubtract/sagas';
import { helloSaga } from './MultiplicationAndDivision/sagas';

export default function* rootSaga() {
  yield all([watchIncrementAsync(), helloSaga()]);
}
