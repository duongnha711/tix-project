import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  actCloseGlobalLoading,
  actOpenGlobalLoading,
  actCloseFilterLoading,
  actOpenFilterLoading,
} from "./../../commons/actions";
import {
  actFilterByName,
  actFilterByNameSuccess,
  actGetCinemaBranchSuccess,
  actGetCinemaListSuccess,
  actGetMovieDetailSuccess,
  actGetMovieListSuccess,
  actGetSeatListSuccess,
  actGetShowTimeAllSuccess,
  actBookTicketSuccess,
  actGetCinemaBranch,
  actGetShowTimeAll,
  actGetShowTimeDetail,
} from "./actions";
import * as ActionType from "./constants";
import {
  getCinemaBranchesApi,
  getCinemaListApi,
  getMovieDetailApi,
  getMovieListApi,
  getSeatListApi,
  getShowTimeAllApi,
  bookTicketApi,
} from "./handler";
import STATUS from "./status";
import Alert from "../../components/Alert";

function* getMovieListSaga() {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getMovieListApi);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetMovieListSuccess(data));
      yield put(actFilterByName({ MaPhim: data[0].maPhim })); //chi lay thang dau tien
    }

    yield delay(1000);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    console.log("function*getMovieListSaga -> err", err.response);
    yield put(actCloseGlobalLoading());
  }
}

function* getMovieDetailSaga({ params }) {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getMovieDetailApi, params);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetMovieDetailSuccess(data));
    }
    yield put(actCloseGlobalLoading());
  } catch (err) {
    console.log("function*getMovieDetailSaga -> err", err.response);
  }
}

function* getCinemaListSaga() {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getCinemaListApi);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetCinemaListSuccess(data));
      //lấy branch theo thằng logo đầu tiên
      yield put(actGetCinemaBranch({ maHeThongRap: data[0].maHeThongRap }));
      yield put(actGetShowTimeAll({ maHeThongRap: data[0].maHeThongRap }));
    }
    yield delay(1000);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    console.log("function*getCinemaListSaga -> err", err.response);
  }
}

function* getCinemaBranchSaga({ maHeThongRap }) {
  try {
    const response = yield call(getCinemaBranchesApi, maHeThongRap);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(
        actGetCinemaBranchSuccess({
          data,
          maHeThongRap: maHeThongRap.maHeThongRap,
        })
      );
    }
    //lấy danh sách phim theo thằng cinema đầu tiên
    yield delay(100);
    yield put(actGetShowTimeDetail(data[0].maCumRap));
  } catch (err) {
    console.log("function*getCinemaBranchSaga -> err", err.response);
  }
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
    yield put(actOpenFilterLoading());

    const response = yield call(getMovieDetailApi, MaPhim);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actFilterByNameSuccess(data));
    }
    yield put(actCloseFilterLoading());
  } catch (err) {
    console.log("function*filterByNameSaga -> err", err.response);
    yield put(actCloseFilterLoading());
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

function* bookTicketSaga({ payload }) {
  try {
    const response = yield call(bookTicketApi, payload);

    const { arrNameToShow } = payload;
    let strNameToShow = "";
    arrNameToShow.forEach((item, index) => {
      if (index === arrNameToShow.length - 1) {
        strNameToShow += `${item}`;
      } else {
        strNameToShow += `${item}, `;
      }
    });

    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      Alert({
        icon: "success",
        html: `${data}<br/>${strNameToShow}`,
      });
      yield put(actBookTicketSuccess(payload));
    }
  } catch (err) {
    console.log(err.response);
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

function* watchGetCinemaBranch() {
  yield takeLatest(ActionType.GET_CINEMA_BRANCH, getCinemaBranchSaga);
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

function* watchBookTicket() {
  yield takeLatest(ActionType.BOOK_TICKET, bookTicketSaga);
}

export default [
  watchGetMovieList(),
  watchGetMovieDetail(),
  watchGetCinemaList(),
  watchGetCinemaBranch(),
  watchGetShowTimeAll(),
  watchFilterByName(),
  watchGetSeatList(),
  watchBookTicket(),
];
