
import { ADD_USER, DELETE_USER, UPDATE_USER, LIST_USER } from './userActionTypes';

export const userReducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case ADD_USER: {
            debugger;
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
        default: {
            return state;
        }
    }
};
