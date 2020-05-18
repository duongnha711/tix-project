import { all } from "redux-saga/effects";
import homeSagas from "./../../modules/home/sagas";
import authSagas from "./../../modules/auth/sagas";
import adminSagas from "./../../modules/admin/sagas";

export default () => {
  function* rootSaga() {
    yield all([...homeSagas, ...authSagas, ...adminSagas]);
  }
  return rootSaga;
};
