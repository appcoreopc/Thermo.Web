import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED, USER_FETCH_REQUESTED } from '../../redux/reducers/userActionTypes';

function fetchUserData(user: any) {
    return [
        {
            id: 1,
            firstname: '11111',
            lastName: '11111'
        },
        {
            id: 2,
            firstname: '22222',
            lastName: '2222222'
        },
        {
            id: 3,
            firstname: '3333333',
            lastName: '33333'
        },
    ];
}

function* fetchUser(action: any) {
    try {
        const users = yield call(fetchUserData, action.payload.userId);
        console.log(users);
        yield put({ type: USER_FETCH_SUCCEEDED, users });
    } catch (e) {
        yield put({ type: USER_FETCH_FAILED, message: e.message });
    }
}

export function* userFetchSaga() {
    yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}