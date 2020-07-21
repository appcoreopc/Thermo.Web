
import { ADD_USER, DELETE_USER, UPDATE_USER, LIST_USER, 
    USER_FETCH_SUCCEEDED } from './userActionTypes';

export const userReducer = (state: any = {}, action: any) => {
    debugger;
    switch (action.type) {
        case ADD_USER: {
            
            let payload = action.payload;
            return { ...state, payload };
        }
        case UPDATE_USER: {
            console.log(UPDATE_USER);
            return { ...state };
        }
        case DELETE_USER: {
            console.log(DELETE_USER);
            return { ...state };
        }
        case UPDATE_USER: {
            return { ...state };
        }
        case USER_FETCH_SUCCEEDED: {
            return { ...state, users : action.users };
        }
        default: {
            return state;
        }
    }
};
