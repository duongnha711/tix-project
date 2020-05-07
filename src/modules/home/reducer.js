import * as ActionType from "./constants";

import {
  getArrVipSeatListBy,
  getArrNorSeatListBy,
  addNameToShowNormal,
  addNameToShowVip,
} from "./../../functions/helper";
import Alert from "./../../components/Alert";

const initialState = {
  movieList: [],
  movieDetail: {},
  cinemaList: [],
  cinemaBrach: [],
  showTimeAll: [],
  showTimeDetail: [],
  arrShowTimeOfOneMovie: [], //mang lich chieu -> chua lich chieu tat ca cac rap cua 1 phim
  arrDateOfOneMovie: [],
  arrHourOfOneMovie: [],
  maLichChieu: "",
  activeName: "",

  maHeThongRap: "",
  maCumRap: "",

  arrFilterByName: [],

  //ticket
  infoMovieForTicket: {},
  arrNormalSeatList: [],
  arrVipSeatList: [],
  danhSachVe: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIE_LIST_SUCCESS: {
      return { ...state, movieList: action.payload };
    }

    case ActionType.GET_CINEMA_LIST_SUCCESS:
      return { ...state, cinemaList: action.payload };

    case ActionType.GET_CINEMA_BRANCH_SUCCESS:
      const { data, maHeThongRap } = action.payload;
      return { ...state, cinemaBrach: data, maHeThongRap };

    case ActionType.GET_SHOWTIME_ALL_SUCCESS:
      return { ...state, showTimeAll: action.payload };

    case ActionType.GET_SHOWTIME_DETAIL: {
      const { showTimeAll } = state;
      const { maCumRap } = action;
      let newObj = {};
      if (showTimeAll && showTimeAll.length > 0) {
        showTimeAll.forEach((item) => {
          const { lstCumRap } = item;
          const index = lstCumRap.findIndex((item) => {
            return item.maCumRap === maCumRap;
          });
          if (lstCumRap[index]) {
            newObj = lstCumRap[index];
          }
        });
      }
      //neu rap ko co danh sach phim - se~ undifiel va moi~ ham` map
      if (newObj.danhSachPhim) {
        return { ...state, showTimeDetail: newObj.danhSachPhim, maCumRap };
      } else {
        return { ...state, showTimeDetail: [], maCumRap };
      }
    }

    case ActionType.FILTER_BY_MOVIE_NAME_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        arrShowTimeOfOneMovie: payload.lichChieu,
        arrDateOfOneMovie: [],
        arrHourOfOneMovie: [],
        maLichChieu: "",
        activeName: "",
      };
    }
    case ActionType.FILTER_BY_MOVIE_CINEMA: {
      const { arrShowTimeOfOneMovie } = state;
      const { maCumRap } = action;
      const newArr = arrShowTimeOfOneMovie.filter(
        (movie) => movie.thongTinRap.maCumRap === maCumRap
      );

      return {
        ...state,
        arrDateOfOneMovie: newArr,
        arrHourOfOneMovie: [],
        maLichChieu: "",
        activeName: maCumRap,
      };
    }

    case ActionType.FILTER_BY_MOVIE_DAY: {
      const { arrDateOfOneMovie } = state;
      const { day } = action;
      const newArr = arrDateOfOneMovie.filter(
        (movie) => movie.ngayChieuGioChieu.substring(0, 10) === day
      );
      return {
        ...state,
        arrHourOfOneMovie: newArr,
        maLichChieu: "",
      };
    }

    case ActionType.CHANGE_SHOWTIME_CODE: {
      const { maLichChieu } = action;
      return { ...state, maLichChieu };
    }

    case ActionType.GET_SEAT_LIST_SUCCESS: {
      const { thongTinPhim, danhSachGhe } = action.payload;

      const flagArrNormalSeatList = getArrNorSeatListBy(danhSachGhe);
      const flagArrVipSeatList = getArrVipSeatListBy(danhSachGhe);

      //add showName
      const arrNormalSeatList = addNameToShowNormal(flagArrNormalSeatList);
      const arrVipSeatList = addNameToShowVip(flagArrVipSeatList);

      return {
        ...state,
        infoMovieForTicket: thongTinPhim,
        arrNormalSeatList,
        arrVipSeatList,
        danhSachVe: [],
      };
    }
    case ActionType.CHOOSE_SEAT: {
      const { payload } = action;
      const { maGhe } = payload;

      const newArrDanhSachGhe = [...state.danhSachVe];
      const index = state.danhSachVe.findIndex((seat) => seat.maGhe === maGhe);
      if (index === -1) {
        // >= 10 thi return lun ko dc push
        if (state.danhSachVe.length >= 10) {
          Alert({ text: "Đặt tối đa 10 vé", icon: "warning" });
          return { ...state };
        }
        //neu duoi 10 thi push
        newArrDanhSachGhe.push(payload);
        return { ...state, danhSachVe: newArrDanhSachGhe };
      } else {
        newArrDanhSachGhe.splice(index, 1);
        return { ...state, danhSachVe: newArrDanhSachGhe };
      }
    }

    case ActionType.BOOK_TICKET_SUCCESS: {
      const { payload } = action;
      const { danhSachVe } = payload.data;
      const { arrNormalSeatList, arrVipSeatList } = state;

      danhSachVe.forEach((ticket) => {
        //  NORMAL
        arrNormalSeatList.forEach((itemNor) => {
          if (ticket.maGhe === itemNor.maGhe) {
            itemNor.daDat = true;
          }
        });

        //  VIP
        arrVipSeatList.forEach((itemNor) => {
          if (ticket.maGhe === itemNor.maGhe) {
            itemNor.daDat = true; // thay doi truc tiep item {} trong mang
          }
        });
      });

      return {
        ...state,
        arrVipSeatList: [...state.arrVipSeatList],
        arrNormalSeatList: [...state.arrNormalSeatList],
        danhSachVe: [],
      };
    }

    case ActionType.GET_MOVIE_DETAIL_OFFICIAL_SUCCESS: {
      const { payload } = action;
      return { ...state, movieDetail: payload };
    }

    case ActionType.FILTER_BY_NAME_OFFICIAL_SUCCESS: {
      const { payload } = action;
      return { ...state, arrFilterByName: payload };
    }

    default:
      return { ...state };
  }
};

export default homeReducer;
