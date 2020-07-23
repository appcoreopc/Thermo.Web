import { USER_ADD_REQUESTED, LIST_USER, USER_FETCH_REQUESTED } from './userActionTypes';

export const addUser = (content: string) => ({
  type: USER_ADD_REQUESTED,
  newuser : content
});

export const getUsers = (content: string) => ({
  type: USER_FETCH_REQUESTED,
  payload: {
    content: content,
    count: 0
  }
});

export const listUser = (content: string) => ({
  type: LIST_USER,
  payload: {
    content,
    count: 3
  }
});