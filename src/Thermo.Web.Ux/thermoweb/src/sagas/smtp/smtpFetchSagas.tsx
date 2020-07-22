import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

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
        yield put({ type: "SMTP_FETCH_SUCCEEDED", users });
    } catch (e) {
        yield put({ type: "SMTP_FETCH_FAILED", message: e.message });
    }
}

export function* smtpFetchSaga() {
    yield takeLatest("SMTP_FETCH_REQUESTED", fetchUser);
}

