import { ADD_USER, DELETE_USER, UPDATE_USER, LIST_USER } from './userActionTypes';

export const addUser = (content: string) => ({
  type: ADD_USER,
  payload: {
    content : content,
    count : 0
  }
});

export const updateUser = (content: string) => ({
  type: UPDATE_USER,
  payload: {
    content
  }
});

export const removeUser = (content: string) => ({
  type: DELETE_USER,
  payload: {
    content
  } 
});

export const listUser = (content: string) => ({
  type: LIST_USER,
  payload: {
    content
  }
});






