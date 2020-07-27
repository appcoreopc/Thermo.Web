import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED, USER_FETCH_REQUESTED } from '../../redux/reducers/userActionTypes';
import { createExectionStatusResponse } from '../../components/users/userUtil';

function fetchUserData(user: any) {
    return [
        {
            id: 1,
            firstname: '11111',
            lastname: '11111'
        },
        {
            id: 2,
            firstname: '22222',
            lastname: '2222222'
        },
        {
            id: 30,
            firstname: '3333333',
            lastname: '33333'
        },
    ];
}

function* fetchUser(action: any) {

    debugger;

    try {
        const users = yield call(fetchUserData, action.getUsers.filter);
        console.log(users);
        yield put({ type: USER_FETCH_SUCCEEDED, users });
    } catch (e) {
        var execResult = createExectionStatusResponse(-1, e.message, null);
        console.log(execResult);
        yield put({ type: USER_FETCH_FAILED, result: execResult });
    }
}

export function* userFetchSaga() {
    yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}