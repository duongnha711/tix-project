import { all } from "redux-saga/effects";
import homeSagas from "./../../modules/home/sagas";
import authSagas from "./../../modules/auth/sagas";

export default () => {
  function* rootSaga() {
    yield all([...homeSagas, ...authSagas]);
  }
  return rootSaga;
};
