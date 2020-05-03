import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  actCloseGlobalLoading,
  actOpenGlobalLoading,
} from "./../../commons/actions";

import {
  actFilterByName,
  actFilterByNameSuccess,
  actGetCinemaBranchSuccess,
  actGetCinemaListSuccess,
  actGetMovieDetailSuccess,
  actGetMovieListSuccess,
  actGetShowTimeAllSuccess,
  actGetSeatListSuccess,
} from "./actions";

import * as ActionType from "./constants";
import {
  getCinemaBranchesApi,
  getCinemaListApi,
  getMovieDetailApi,
  getMovieListApi,
  getShowTimeAllApi,
  getSeatListApi,
} from "./handler";
import STATUS from "./status";

function* getMovieListSaga() {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getMovieListApi);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetMovieListSuccess(data));
      yield put(actFilterByName({ MaPhim: data[0].maPhim })); //lấy đc list name -> thi set cinema là cinema đầu tiên
    }
    yield delay(1000);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    console.log(err.response);
    yield put(actCloseGlobalLoading());
  }
}

function* getMovieDetailSaga({ params }) {
  yield put(actOpenGlobalLoading());
  const response = yield call(getMovieDetailApi, params);
  const { status, data } = response;
  if (status === STATUS.SUCCESS) {
    yield put(actGetMovieDetailSuccess(data));
  }
  yield put(actCloseGlobalLoading());
}

function* getCinemaListSaga() {
  yield put(actOpenGlobalLoading());
  const response = yield call(getCinemaListApi);
  const { data, status } = response;
  if (status === STATUS.SUCCESS) {
    yield put(actGetCinemaListSuccess(data));
  }
  yield delay(1000);
  yield put(actCloseGlobalLoading());
}

function* getCinemaBrachSaga({ maHeThongRap }) {
  const response = yield call(getCinemaBranchesApi, maHeThongRap);
  const { data, status } = response;
  if (status === STATUS.SUCCESS) {
    yield put(actGetCinemaBranchSuccess(data));
  }
}

function* getCinemaBrachFirstSaga({ maHeThongRap }) {
  yield put(actOpenGlobalLoading());

  const response = yield call(getCinemaBranchesApi, maHeThongRap);
  const { data, status } = response;
  if (status === STATUS.SUCCESS) {
    yield put(actGetCinemaBranchSuccess(data));
  }
  yield delay(1000);
  yield put(actCloseGlobalLoading());
}

function* getShowTimeAllSaga({ maHeThongRap }) {
  const response = yield call(getShowTimeAllApi, maHeThongRap);
  const { status, data } = response;
  if (status === STATUS.SUCCESS) {
    yield put(actGetShowTimeAllSuccess(data));
  }
}

function* filterByNameSaga({ MaPhim }) {
  try {
    yield put(actOpenGlobalLoading());

    const response = yield call(getMovieDetailApi, MaPhim);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actFilterByNameSuccess(data));
    }
    yield put(actCloseGlobalLoading());
  } catch (err) {
    console.log("function*filterByNameSaga -> err", err.response);
    yield put(actCloseGlobalLoading());
  }
}

function* getSeatListSaga({ maLichChieu }) {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getSeatListApi, maLichChieu);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetSeatListSuccess(data));
    }
    yield put(actCloseGlobalLoading());
  } catch (err) {
    console.log("function*getSeatListSaga -> err", err.response);
    yield put(actCloseGlobalLoading());
  }
}
//watch~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function* watchGetMovieList() {
  yield takeLatest(ActionType.GET_MOVIE_LIST, getMovieListSaga);
}

function* watchGetMovieDetail() {
  yield takeLatest(ActionType.GET_MOVIE_DETAIL, getMovieDetailSaga);
}

function* watchGetCinemaList() {
  yield takeLatest(ActionType.GET_CINEMA_LIST, getCinemaListSaga);
}

function* watchGetCinemaBrach() {
  yield takeLatest(ActionType.GET_CINEMA_BRANCH, getCinemaBrachSaga);
}

function* watchGetCinemaBrachFirst() {
  yield takeLatest(ActionType.GET_CINEMA_BRANCH_FIRST, getCinemaBrachFirstSaga);
}

function* watchGetShowTimeAll() {
  yield takeLatest(ActionType.GET_SHOWTIME_ALL, getShowTimeAllSaga);
}

function* watchFilterByName() {
  yield takeLatest(ActionType.FILTER_BY_MOVIE_NAME, filterByNameSaga);
}

function* watchGetSeatList() {
  yield takeLatest(ActionType.GET_SEAT_LIST, getSeatListSaga);
}

export default [
  watchGetMovieList(),
  watchGetMovieDetail(),
  watchGetCinemaList(),
  watchGetCinemaBrach(),
  watchGetCinemaBrachFirst(),
  watchGetShowTimeAll(),
  watchFilterByName(),
  watchGetSeatList(),
];
