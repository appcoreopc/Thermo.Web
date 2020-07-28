

import { call, put, takeEvery } from 'redux-saga/effects'
import { USER_DELETE_SUCCEEDED, USER_DELETE_FAILED, USER_DELETE_REQUESTED } from '../../redux/reducers/userActionTypes';
import { createExectionStatusResponse } from '../../components/users/userUtil';
import axios, { AxiosStatic } from 'axios';
import { AppConfiguration } from '../../config/config';

async function deleteUserExecute(users: any): Promise<any> {
    return await axios.delete(AppConfiguration.host + AppConfiguration.userUrl, users);
}

function* deleteUserData(action: any) {
    debugger;
    try {
        const userDeleteStatus = yield call(deleteUserExecute, action.newuser);
        console.log("user delete operation.");
        yield put({ type: USER_DELETE_SUCCEEDED, userDeleteStatus });
    } catch (e) {
        var execResult = createExectionStatusResponse(-1, e.message, null);
        console.log(execResult);
        yield put({ type: USER_DELETE_FAILED, result: execResult });
    }
}

export function* smtpDeleteSaga() {
    debugger;
    console.log('delete data');
    yield takeEvery(USER_DELETE_REQUESTED, deleteUserData);
}

