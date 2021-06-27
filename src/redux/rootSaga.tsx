import { all } from 'redux-saga/effects';
import { helloSaga, counterSaga } from 'redux/counterSaga';

export default function* rootSaga(): Generator<unknown> {
  console.log('Root saga');
  // yield will pause generator function
  yield all([helloSaga(), counterSaga()]);
}

/** */
