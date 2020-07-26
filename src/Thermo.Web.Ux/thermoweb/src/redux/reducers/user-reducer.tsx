
import {
    USER_ADD_REQUESTED, USER_ADD_SUCCEEDED,
    USER_FETCH_SUCCEEDED, USER_FETCH_REQUESTED, USER_DELETE_REQUESTED, USER_ADD_FAILED, USER_DELETE_SUCCEEDED
} from './userActionTypes';

export const userReducer = (state: any = {}, action: any) => {
    debugger;
    switch (action.type) {
        case USER_ADD_REQUESTED: {
            let newuser = action.newuser;
            return { ...state, newuser };
        }
        case USER_FETCH_REQUESTED: {
            return { ...state };
        }
        case USER_DELETE_REQUESTED: {
            let deleteTargetUsers = action.deleteTargetUsers;
            return { ...state, deleteTargetUsers };
        }
        case USER_DELETE_SUCCEEDED: {
            let userDeleteStatus = action.userDeleteStatus;
            return { ...state, userDeleteStatus };
        }
        case USER_ADD_SUCCEEDED: {
            let userAddStatus = action.userAddStatus;
            return { ...state, userAddStatus };
        }
        case USER_ADD_FAILED: {
            return { ...state };
        }
        case USER_FETCH_SUCCEEDED: {
            return { ...state, users: action.users };
        }
        case USER_ADD_SUCCEEDED: {
            return { ...state, userAddStatus: action.userAddStatus };
        }
        default: {
            return state;
        }
    }
};
