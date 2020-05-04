import { takeLatest, call, delay, put } from "redux-saga/effects";
import { REGISTER, LOG_IN, GET_INFO_BOOKING_USER } from "./constants";
import { registerApi, logInApi, getInfoAccountApi } from "./handler";
import Alert from "./../../components/Alert";
import STATUS from "./status";
import {
  actCloseRegister,
  actOpenLogin,
  actCloseLogin,
  actOpenGlobalLoading,
  actCloseGlobalLoading,
} from "./../../commons/actions";
import { actLogInSuccess, actGetInfoBookingUserSuccess } from "./actions";

function* registerSaga({ account }) {
  try {
    const response = yield call(registerApi, account);
    const { status } = response;
    if (status === STATUS.SUCCESS) {
      Alert({
        icon: "success",
        title: "Register Successfully !",
        timer: 5000,
        html: "Redirect to Log In after <b></b> milliseconds.",
        showConfirmButton: false,
      });
      yield delay(5000);
      yield put(actCloseRegister());
      yield put(actOpenLogin());
    }
  } catch (err) {
    Alert({ icon: "error", text: err.response.data });
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
    Alert({ icon: "error", text: err.response.data });
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
    console.log("function*getInfoBookingUserSaga -> err", err);
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
export default [watchRegister(), watchLogIn(), watchGetInfoBookingUser()];
