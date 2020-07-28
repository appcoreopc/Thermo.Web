import { userFetchSaga } from '../sagas/users/userFetchSaga';
import { userAddSaga } from '../sagas/users/userAddSaga';
import { userDeleteSaga } from '../sagas/users/userDeleteSaga';
import { fork } from 'redux-saga/effects';

import { smtpFetchSaga } from '../sagas/smtp/smtpFetchSaga';
import { smtpAddSaga } from '../sagas/smtp/smtpAddSaga';
import { smtpDeleteSaga } from '../sagas/smtp/smtpDeleteSaga';

export function* rootSaga() {
    yield fork(userFetchSaga)
    yield fork(smtpFetchSaga)
    yield fork(userAddSaga)
    yield fork(userDeleteSaga)
    yield fork(smtpAddSaga)
    yield fork(smtpDeleteSaga)
}