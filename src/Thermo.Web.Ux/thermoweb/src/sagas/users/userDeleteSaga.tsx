

import { call, put, takeEvery } from 'redux-saga/effects'
import { USER_DELETE_SUCCEEDED, USER_DELETE_FAILED, USER_DELETE_REQUESTED } from '../../redux/reducers/userActionTypes';

function deleteUserExecute(user: any) {
    return true;
}

function* deleteUserData(action: any) {
    debugger;
    try {
        const userDeleteStatus = yield call(deleteUserExecute, action.newuser);
        console.log("user delete operation.");
        yield put({ type: USER_DELETE_SUCCEEDED, userDeleteStatus });
    } catch (e) {
        yield put({ type: USER_DELETE_FAILED, message: e.message });
    }
}

export function* userDeleteSaga() {
    debugger;
    console.log('delete data');
    yield takeEvery(USER_DELETE_REQUESTED, deleteUserData);
}

