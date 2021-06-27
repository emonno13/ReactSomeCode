import { takeEvery, put, delay, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  increment,
  incrementSaga,
  incrementSagaSuccess,
} from 'features/counter/counterSlice';
import { fetchCount } from 'features/counter/counterAPI';

/**
 * Worker saga will be fired on actions of saga parent: 
   - call api
   - call actions
   - call generator function
 */
function* worker(): Generator<unknown> {
  try {
    const payload = 10;
    /* Saga will yield Effect -> Saga is paused 
        -> Effect is fullfield -> Saga resume
    
        GenFc will suppend until Promise [ delay ] resolve
    */
    yield delay(1000);
    // Resume Saga,  executing code until the next yield.
    /* put: Effect creator : dispatch a action from saga
         a function will return js plain object containing info for saga run it 
         the info instruct the middleware to invoke myfunc('arg1', 'arg2')
    */
    yield put({ type: 'counter/incrementByAmount', payload });

    /** Call a Function */
    // Return a promise - don't use this because it will be hard for testing
    yield fetchCount(2);
    // Return a js object
    yield call(fetchCount, 2);
  } catch (e) {
    console.log(e);
  }
}

// Worker saga
export function helloSaga(): void {
  console.log('Hello saga');
}

function log(action: PayloadAction): void {
  console.log(action);
}

function* handleIncrementSaga(
  action: PayloadAction<number>
): Generator<unknown> {
  console.log('Waiting 1s');
  // Wait 1s
  yield delay(1000);

  console.log('Waiting done, dispatch action');

  // Dispatch action success
  // action.payload is returned by incrementSaga
  // yield put({ type: 'counter/incrementSagaSuccess', action.payload });
  yield put(incrementSagaSuccess(action.payload));
}

/**
 * WATCHER 
 
 *  Yield - Pause Genarator - Effect Creator ( a function )
      => return Effect ( plian object ) -> next (result of yield) | throw(error)
 */
export function* counterSaga(): Generator<unknown> {
  console.log('Counter saga');

  // Effect Creator takeEvery listen action : increment
  // * : listen all actions
  yield takeEvery('*', log);
  // : listen 'counter/increment' : counter is Slice Name
  yield takeEvery('counter/increment', worker);
  yield takeEvery(increment().type, log);
  // yield takeEvery('counter/incrementByAmount', log);

  /* Test Saga
     - toString return type of action
     - incrementSaga give incrementSagaSuccess a payload data 
      through handleIncrementSaga

  */
  // yield takeEvery(incrememntSaga().toString(), handleIncreamentSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}

/**
 * CaLL : invoke function / generator function
 * Put: dispatch an action
 */
