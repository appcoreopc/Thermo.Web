import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { USER_ADD_SUCCEEDED, USER_ADD_FAILED, USER_ADD_REQUESTED } from '../../redux/reducers/userActionTypes';
import { createExectionStatusResponse } from '../../components/users/userUtil';
import axios, { AxiosStatic } from 'axios';
import { AppConfiguration } from '../../config/config';

async function createNewUser(userInfo: any): Promise<any> {
    return await axios.post(AppConfiguration.host + AppConfiguration.userUrl, userInfo);
}

function* addUserData(action: any) {
    debugger;
    try {
        const userAddStatus = yield call(createNewUser, action.getUsers.filter);
        console.log(userAddStatus);
        yield put({ type: USER_ADD_SUCCEEDED, userAddStatus });
    } catch (e) {
        var execResult = createExectionStatusResponse(-1, e.message, null);
        console.log(execResult);
        yield put({ type: USER_ADD_FAILED, result: execResult });
    }
}

export function* smtpAddSaga() {
    debugger;
    console.log('add user data');
    yield takeEvery(USER_ADD_REQUESTED, addUserData);
}