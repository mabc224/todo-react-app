import { take, put, call, fork, all } from 'redux-saga/effects'
import { apiToDoCall } from './../services/api';
import { apiLoadSuccess, apiLoadError } from './../actions/apiTodo';




/*
    // (1)
    //One way to use
    // define watcher in function...like below funtion to wait yield take('LOAD_API_REQUEST');
function* apiLoadRequest() {
    //Wait for the action to start
    yield take('LOAD_API_REQUEST');
    try {
        const response = yield call(apiToDoCall);
        yield put(apiLoadSuccess(response));
    } catch (e) {
        yield put(apiLoadError(e));
    }
    
}

export default function * rootSaga() {
    yield all([apiLoadRequest()]);
}

*/

/*
    // (2)
    // Second way is by watcher, writing seperately
function* apiLoadRequest() {
    try {
        const response = yield call(apiToDoCall);
        yield put(apiLoadSuccess(response));
    } catch (e) {
        yield put(apiLoadError(e));
    }
}

export function* watchAPITodos() {
    // one way in loop
    while (true) {
        const action = yield take('LOAD_API_REQUEST');
        yield fork(apiLoadRequest);
    }

    // second way
    // yield take('LOAD_API_REQUEST', apiLoadRequest);
}


export default function * rootSaga() {
    yield all([watchAPITodos()]);
}
*/

function* apiLoadRequest() {
    try {
        const response = yield call(apiToDoCall);
        yield put(apiLoadSuccess(response));
    } catch (e) {
        yield put(apiLoadError(e));
    }
    
}

export function* watchAPITodos() {
    while (true) {
        yield take('LOAD_API_REQUEST');
        yield fork(apiLoadRequest);
    }
}


export default function * rootSaga() {
    yield all([watchAPITodos()]);
}


/*
Redux saga expose several methods called Effects, we are going to define several of them:
Fork performs a non-blocking operation on the function passed.
Take pauses until action received.
Race runs effects simultaneously, then cancels them all once one finishes.
Call runs a function. If it returns a promise, pauses the saga until the promise is resolved.
Put dispatches an action.
Select Runs a selector function to get data from the state
takeLatest means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
takeEvery will return results for all the calls triggered.

*/