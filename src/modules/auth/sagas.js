import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  actCloseGlobalLoading,
  actCloseLogin,
  actCloseRegister,
  actOpenGlobalLoading,
  actOpenLogin,
} from "./../../commons/actions";
import Alert from "./../../components/Alert";
import {
  actChangePasswordSuccess,
  actGetInfoBookingUserSuccess,
  actLogInSuccess,
} from "./actions";
import {
  CHANGE_PASSWORD,
  GET_INFO_BOOKING_USER,
  LOG_IN,
  REGISTER,
} from "./constants";
import {
  changePasswordAPI,
  getInfoAccountApi,
  logInApi,
  registerApi,
} from "./handler";
import STATUS from "./status";

function* registerSaga({ account }) {
  try {
    const response = yield call(registerApi, account);
    const { status } = response;
    if (status === STATUS.SUCCESS) {
      Alert({
        icon: "success",
        title: "Đăng ký thành công !",
        timer: 5000,
        html: "Chuyển đến trang Đăng Nhập sau <b></b> milliseconds.",
        showConfirmButton: false,
      });
      yield delay(5000);
      yield put(actCloseRegister());
      yield put(actOpenLogin());
    }
  } catch (err) {
    if (err.response.data) {
      Alert({ icon: "error", text: err.response.data });
    }
  }
}

function* logInSaga({ account }) {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(logInApi, account);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actCloseLogin());
      yield put(actLogInSuccess(data));
    }
    yield delay(1000);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    if (err.response.data) {
      Alert({ icon: "error", text: err.response.data });
    }
    yield put(actCloseGlobalLoading());
  }
}

function* getInfoBookingUserSaga({ account }) {
  try {
    const response = yield call(getInfoAccountApi, account);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetInfoBookingUserSuccess(data));
    }
  } catch (err) {
    if (err.response) {
      console.log("function*getInfoBookingUserSaga -> err", err.response);
    }
  }
}

function* changePasswordSaga({ account, token }) {
  try {
    const response = yield call(changePasswordAPI, account, token);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actChangePasswordSuccess(data));
      Alert({
        icon: "success",
        html: "Đổi mật khẩu thành công",
      });
    }
  } catch (err) {
    if (err.response) {
      console.log("function*changePasswordSaga -> err", err.response);
    }
  }
}

//watch~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function* watchRegister() {
  yield takeLatest(REGISTER, registerSaga);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN, logInSaga);
}

function* watchGetInfoBookingUser() {
  yield takeLatest(GET_INFO_BOOKING_USER, getInfoBookingUserSaga);
}

function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePasswordSaga);
}
export default [
  watchRegister(),
  watchLogIn(),
  watchGetInfoBookingUser(),
  watchChangePassword(),
];
