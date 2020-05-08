import { call, delay, put, takeLatest } from "redux-saga/effects";
import Alert from "../../components/Alert";
import {
  actCloseGlobalLoading,
  actOpenGlobalLoading,
} from "./../../commons/actions";
import {
  actBookTicketSuccess,
  actFilterByNameOfficial,
  actFilterByNameOfficialSuccess,
  // actFilterByNameSuccess,
  actGetCinemaBranch,
  actGetCinemaBranchSuccess,
  actGetCinemaListSuccess,
  actGetDetailMovieOfficialSuccess,
  actGetMovieListSuccess,
  actGetSeatListSuccess,
  actGetShowTimeAll,
  actGetShowTimeAllSuccess,
  actGetShowTimeDetail,
} from "./actions";
import * as ActionType from "./constants";
import {
  bookTicketApi,
  filterByNameOfficialApi,
  getCinemaBranchesApi,
  getCinemaListApi,
  getMovieDetailOfficialApi,
  getMovieListApi,
  getSeatListApi,
  getShowTimeAllApi,
} from "./handler";
import STATUS from "./status";

function* getMovieListSaga() {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getMovieListApi);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetMovieListSuccess(data));
      yield put(actFilterByNameOfficial({ MaPhim: data[0].maPhim })); //chi lay thang dau tien
    }

    yield delay(1000);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    if (err.response) {
      console.log("function*getMovieListSaga -> err", err.response);
    }
    yield put(actCloseGlobalLoading());
  }
}

function* getCinemaListSaga() {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getCinemaListApi);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetCinemaListSuccess(data));
      yield delay(50); // có thể bỏ

      //lấy branch + info theo thằng logo đầu tiên
      // yield put(actGetCinemaBranch({ maHeThongRap: data[0].maHeThongRap }));
      // yield put(actGetShowTimeAll({ maHeThongRap: data[0].maHeThongRap }));

      //uu tien lay CGV
      yield put(actGetShowTimeAll({ maHeThongRap: "CGV" }));
      yield put(actGetCinemaBranch({ maHeThongRap: "CGV" }));
    }
    yield delay(1000);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    if (err.response) {
      console.log("function*getCinemaListSaga -> err", err.response);
    }
    yield put(actCloseGlobalLoading());
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
    yield delay(50); //bắt buộc phải có nếu ko lỗi
    yield put(actGetShowTimeDetail(data[0].maCumRap));
  } catch (err) {
    if (err.response) {
      console.log("function*getCinemaBranchSaga -> err", err.response);
    }
  }
}

function* getShowTimeAllSaga({ maHeThongRap }) {
  try {
    const response = yield call(getShowTimeAllApi, maHeThongRap);
    const { status, data } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetShowTimeAllSuccess(data));
    }
  } catch (err) {
    if (err.response) {
      console.log("function*getShowTimeAllSaga -> err.response", err.response);
    }
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
    if (err.response) {
      console.log("function*getSeatListSaga -> err.response", err.response);
    }
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
    if (err.response) {
      console.log("function*bookTicketSaga -> err.response", err.response);
    }
  }
}

function* getDetailMovieOfficialSaga({ maPhim }) {
  try {
    yield put(actOpenGlobalLoading());
    const response = yield call(getMovieDetailOfficialApi, maPhim);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actGetDetailMovieOfficialSuccess(data));
    }
    yield delay(500);
    yield put(actCloseGlobalLoading());
  } catch (err) {
    if (err.response) {
      yield put(actCloseGlobalLoading());
      console.log(
        "function*getDetailMovieOfficialSaga -> err.response",
        err.response
      );
    }
  }
}

function* filterByNameOfficialSaga({ maPhim }) {
  try {
    const response = yield call(filterByNameOfficialApi, maPhim);
    const { data, status } = response;
    if (status === STATUS.SUCCESS) {
      yield put(actFilterByNameOfficialSuccess(data));
    }
  } catch (err) {
    if (err.response) {
      console.log(
        "function*filterByNameOfficialSaga -> err.response",
        err.response
      );
    }
  }
}

//watch~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function* watchGetMovieList() {
  yield takeLatest(ActionType.GET_MOVIE_LIST, getMovieListSaga);
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

function* watchGetSeatList() {
  yield takeLatest(ActionType.GET_SEAT_LIST, getSeatListSaga);
}

function* watchBookTicket() {
  yield takeLatest(ActionType.BOOK_TICKET, bookTicketSaga);
}

function* watchGetDetailMovieOfficial() {
  yield takeLatest(
    ActionType.GET_MOVIE_DETAIL_OFFICIAL,
    getDetailMovieOfficialSaga
  );
}

function* watchFilterByNameOfficial() {
  yield takeLatest(
    ActionType.FILTER_BY_NAME_OFFICIAL,
    filterByNameOfficialSaga
  );
}

export default [
  watchGetMovieList(),
  watchGetCinemaList(),
  watchGetCinemaBranch(),
  watchGetShowTimeAll(),
  watchGetSeatList(),
  watchBookTicket(),
  watchGetDetailMovieOfficial(),
  watchFilterByNameOfficial(),
];
