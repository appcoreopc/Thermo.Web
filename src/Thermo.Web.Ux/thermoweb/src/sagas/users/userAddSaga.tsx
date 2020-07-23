import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { USER_ADD_SUCCEEDED, USER_ADD_FAILED, USER_ADD_REQUESTED } from '../../redux/reducers/userActionTypes';

function fetchUserData(user: any) {
    return true;
}

function* addUserData(action: any) {
    debugger;
    try {
        const userAddStatus = yield call(fetchUserData, action.newuser);
        console.log(userAddStatus);
        yield put({ type: USER_ADD_SUCCEEDED, userAddStatus });
    } catch (e) {
        yield put({ type: USER_ADD_FAILED, message: e.message });
    }
}

export function* userAddSaga() {
    debugger;
    console.log('add user data');
    yield takeEvery(USER_ADD_REQUESTED, addUserData);
}

