import { userFetchSaga } from '../sagas/users/userFetchSaga';
import { smtpFetchSaga } from '../sagas/smtp/smtpFetchSaga';
import { userAddSaga } from '../sagas/users/userAddSaga';
import { userDeleteSaga } from '../sagas/users/userDeleteSaga';
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
    yield fork(userFetchSaga)
    yield fork(smtpFetchSaga)
    yield fork(userAddSaga)
    yield fork(userDeleteSaga)
}