import { call, delay, put, takeLatest } from "redux-saga/effects";
import Alert from "../../components/Alert";
import {
  actCloseUserModal,
  actDeleteUserSuccess,
  actGetUsersListPagination,
  actGetUsersListPaginationSuccess,
  actGetUsersListSuccess,
} from "./actions";
import {
  DELETE_USER,
  GET_USERS_LIST,
  GET_USERS_LIST_PAGINATION,
  SEARCH_USER,
  SUBMIT_ADD_USER,
  SUBMIT_EDIT_USER,
} from "./constants";
import {
  addUserApi,
  deleteUserApi,
  editUserApi,
  getUsersListApi,
  getUsersListPaginationApi,
  searchUserApi,
} from "./handler";
import STATUS from "./status";

function* getUserListSaga() {
  try {
    const response = yield call(getUsersListApi);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetUsersListSuccess(data));
    }
  } catch (err) {
    if (err.response) {
      console.log("function*getUserListSaga -> err.response", err.response);
    }
  }
}

function* getUserListPaginationSaga({ params }) {
  try {
    const response = yield call(getUsersListPaginationApi, params);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetUsersListPaginationSuccess(data));
    }
  } catch (err) {
    if (err.response) {
      console.log("function*getUserListSaga -> err.response", err.response);
    }
  }
}

function* deleteUserSaga({ payload }) {
  try {
    const response = yield call(deleteUserApi, payload);
    const { status } = response;
    if (status === STATUS.SUCCESS) {
      Alert({
        icon: "success",
        text: `Đã xóa tài khoản: ${payload.TaiKhoan.TaiKhoan}`,
      });
      yield put(actDeleteUserSuccess(payload.TaiKhoan.TaiKhoan));
    }
  } catch (err) {
    if (err.response.data) {
      console.log("function*deleteUserSaga -> (err.response", err.response);
      Alert({ icon: "error", text: err.response.data });
    }
  }
}

function* editUserSaga({ payload }) {
  try {
    const response = yield call(editUserApi, payload);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetUsersListPagination(payload.pagination));
      yield put(actCloseUserModal());
      Alert({
        icon: "success",
        text: `Edit successfully - Accout: ${data.taiKhoan}`,
      });
    }
  } catch (err) {
    if (err.response.data) {
      Alert({ icon: "warning", text: err.response.data });
    }
  }
}

function* addUserSaga({ payload }) {
  try {
    const response = yield call(addUserApi, payload);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetUsersListPagination(payload.pagination));
      yield put(actCloseUserModal());
      Alert({
        icon: "success",
        text: `Add successfully - Accout: ${data.taiKhoan}`,
      });
    }
  } catch (err) {
    if (err.response.data) {
      Alert({ icon: "warning", text: err.response.data });
    }
  }
}

function* searchUserSaga({ payload }) {
  try {
    yield delay(500);
    const response = yield call(searchUserApi, payload);
    console.log("function*searchUserSaga -> response", response.data.items);
  } catch (err) {
    if (err.response)
      console.log("function*searchUserSaga -> err.response", err.response);
  }
}

//watch ~~~~~~~~~~~~~~~~~~~~~~~~~~

function* watchGetUsersPaginationList() {
  yield takeLatest(GET_USERS_LIST, getUserListSaga);
}
function* watchGetUsersList() {
  yield takeLatest(GET_USERS_LIST_PAGINATION, getUserListPaginationSaga);
}
function* watchDeleteUser() {
  yield takeLatest(DELETE_USER, deleteUserSaga);
}

function* watchEditUser() {
  yield takeLatest(SUBMIT_EDIT_USER, editUserSaga);
}

function* watchAddUser() {
  yield takeLatest(SUBMIT_ADD_USER, addUserSaga);
}

function* watchSearchUser() {
  yield takeLatest(SEARCH_USER, searchUserSaga);
}

export default [
  watchDeleteUser(),
  watchGetUsersList(),
  watchGetUsersPaginationList(),
  watchEditUser(),
  watchAddUser(),
  watchSearchUser(),
];
