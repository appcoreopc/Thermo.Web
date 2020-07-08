
import { ADD_USER, DELETE_USER, UPDATE_USER, LIST_USER } from './userActionTypes';

export const userReducer = (state = LIST_USER, action: any) => {
    switch (action.type) {
        case ADD_USER: {
            console.log('ADD_USER');
            return action.payload;
        }
        case UPDATE_USER: {
            console.log(UPDATE_USER);
            return action.payload;
        }
        case DELETE_USER: {
            console.log(DELETE_USER);
            return action.payload;
        }
        case UPDATE_USER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
