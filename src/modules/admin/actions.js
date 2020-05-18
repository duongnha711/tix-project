import {
  ADD_USER,
  CLOSE_USER_MODAL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_PAGINATION,
  GET_USERS_LIST_PAGINATION_SUCCESS,
  GET_USERS_LIST_SUCCESS,
  SUBMIT_ADD_USER,
  SUBMIT_EDIT_USER,
  SEARCH_USER,
} from "./constants";

export const actGetUsersList = () => {
  return {
    type: GET_USERS_LIST,
  };
};

export const actGetUsersListSuccess = (payload) => {
  return {
    type: GET_USERS_LIST_SUCCESS,
    payload,
  };
};

export const actGetUsersListPagination = (params) => {
  return {
    type: GET_USERS_LIST_PAGINATION,
    params,
  };
};

export const actGetUsersListPaginationSuccess = (payload) => {
  return {
    type: GET_USERS_LIST_PAGINATION_SUCCESS,
    payload,
  };
};

export const actAddUser = () => {
  return {
    type: ADD_USER,
  };
};

export const actEditUser = (payload) => {
  return {
    type: EDIT_USER,
    payload,
  };
};

export const actCloseUserModal = () => {
  return {
    type: CLOSE_USER_MODAL,
  };
};

export const actDeleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

export const actDeleteUserSuccess = (taiKhoan) => {
  return {
    type: DELETE_USER_SUCCESS,
    taiKhoan,
  };
};

export const actSubmitAddUser = (payload) => {
  return {
    type: SUBMIT_ADD_USER,
    payload,
  };
};

export const actSubmitEditUser = (payload) => {
  return {
    type: SUBMIT_EDIT_USER,
    payload,
  };
};

export const actSearchUser = (payload) => {
  return {
    type: SEARCH_USER,
    payload,
  };
};
