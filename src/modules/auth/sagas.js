import { takeLatest, call, delay, put } from "redux-saga/effects";
import * as ActionType from "./constants";
import { registerApi, logInApi } from "./handler";
import Alert from "./../../components/Alert";
import STATUS from "./status";
import { actCloseRegister, actOpenLogin } from "./../../commons/actions";

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
    const response = yield call(logInApi, account);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      console.log("function*logInSaga -> data", data);
      //set sesstion account + token
      //close log in
      //dispatch login thanh cong
      //set account len reducer 
      // -> neu account co ton tai -> thi an nut login + register - chi hien ten user 
      
    }
  } catch (err) {
    Alert({ icon: "error", text: err.response.data });
  }
}

//watch~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function* watchRegister() {
  yield takeLatest(ActionType.REGISTER, registerSaga);
}

function* watchLogIn() {
  yield takeLatest(ActionType.LOG_IN, logInSaga);
}
export default [watchRegister(), watchLogIn()];
