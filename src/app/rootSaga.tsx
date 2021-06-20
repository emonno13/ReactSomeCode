import { all, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment } from 'features/counter/counterSlice';

function helloSaga(): void {
  console.log('Hello saga');
}

function log(action: PayloadAction): void {
  console.log(action);
}

function* counterSaga(): any {
  console.log('Counter saga');
  yield takeEvery('*', log); // * : listen all actions
  yield takeEvery('counter/increment', log);
  yield takeEvery(increment().type, log);
}

export default function* rootSaga(): any {
  console.log('Root saga');
  yield all([helloSaga(), counterSaga()]);
}
