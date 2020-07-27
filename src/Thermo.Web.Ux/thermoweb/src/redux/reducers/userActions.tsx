import { USER_ADD_REQUESTED, 
  USER_DELETE_REQUESTED, 
  USER_FETCH_REQUESTED } from './userActionTypes';

export const addUser = (userAddJson: string) => ({
  type: USER_ADD_REQUESTED,
  newuser: userAddJson
});

export const getUsers = (filter: string) => ({
  type: USER_FETCH_REQUESTED,
  getUsers: {
    filter
  }
});

export const deleteUsers = (content: string) => ({
  type: USER_DELETE_REQUESTED,
  deleteTargetUsers: content
});