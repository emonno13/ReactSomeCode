import { all, takeEvery } from 'redux-saga/effects'
import {PayloadAction} from '@reduxjs/toolkit'
import { increment } from 'features/counter/counterSlice'

function helloSaga() {
    console.log('Hello saga')
}

function log(action: PayloadAction) {
    console.log(action)
}

function* counterSaga() {
    console.log('Counter saga')
    yield takeEvery('*', log) // * : listen all actions
    yield takeEvery('counter/increment', log)
    yield takeEvery(increment().type,log)
}

export default function* rootSaga() {
    console.log('Root saga')
    yield all([helloSaga(),counterSaga()])
}