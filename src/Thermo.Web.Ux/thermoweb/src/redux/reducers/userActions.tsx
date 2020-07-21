import { ADD_USER, DELETE_USER, UPDATE_USER, LIST_USER, USER_FETCH_REQUESTED } from './userActionTypes';

export const addUser = (content: string) => ({
  type: ADD_USER,
  payload: {
    content : content,
    count : 0
  }
});

export const getUsers = (content: string) => ({
  type: USER_FETCH_REQUESTED,
  payload: {
    content : content,
    count : 0
  }
});

export const updateUser = (content: string) => ({
  type: UPDATE_USER,
  payload: {
    content,
    count : 1
  }
});

export const removeUser = (content: string) => ({
  type: DELETE_USER,
  payload: {
    content,
    count : 2
  } 
});

export const listUser = (content: string) => ({
  type: LIST_USER,
  payload: {
    content,
    count : 3
  }
});