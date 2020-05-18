import * as ActionType from "./constants";

export const actGetMovieList = () => {
  return {
    type: ActionType.GET_MOVIE_LIST,
  };
};

export const actGetMovieListSuccess = (payload) => {
  return {
    type: ActionType.GET_MOVIE_LIST_SUCCESS,
    payload,
  };
};

export const actGetCinemaList = () => {
  return {
    type: ActionType.GET_CINEMA_LIST,
  };
};

export const actGetCinemaListSuccess = (payload) => {
  return {
    type: ActionType.GET_CINEMA_LIST_SUCCESS,
    payload,
  };
};

export const actGetCinemaBranch = (maHeThongRap) => {
  return {
    type: ActionType.GET_CINEMA_BRANCH,
    maHeThongRap,
  };
};

export const actGetCinemaBranchSuccess = (payload) => {
  return {
    type: ActionType.GET_CINEMA_BRANCH_SUCCESS,
    payload,
  };
};

export const actGetCinemaBranchFirst = (maHeThongRap) => {
  return {
    type: ActionType.GET_CINEMA_BRANCH_FIRST,
    maHeThongRap,
  };
};

export const actGetShowTimeAll = (maHeThongRap) => {
  return {
    type: ActionType.GET_SHOWTIME_ALL,
    maHeThongRap,
  };
};

export const actGetShowTimeAllSuccess = (payload) => {
  return {
    type: ActionType.GET_SHOWTIME_ALL_SUCCESS,
    payload,
  };
};

export const actGetShowTimeDetail = (maCumRap) => {
  return {
    type: ActionType.GET_SHOWTIME_DETAIL,
    maCumRap,
  };
};

export const actGetSeatList = (maLichChieu) => {
  return {
    type: ActionType.GET_SEAT_LIST,
    maLichChieu,
  };
};

export const actGetSeatListSuccess = (payload) => {
  return {
    type: ActionType.GET_SEAT_LIST_SUCCESS,
    payload,
  };
};

export const actChooseSeat = (payload) => {
  return {
    type: ActionType.CHOOSE_SEAT,
    payload,
  };
};

export const actBookTicket = (payload) => {
  return {
    type: ActionType.BOOK_TICKET,
    payload,
  };
};

export const actBookTicketSuccess = (payload) => {
  return {
    type: ActionType.BOOK_TICKET_SUCCESS,
    payload,
  };
};

export const actGetDetailMovieOfficial = (maPhim) => {
  return {
    type: ActionType.GET_MOVIE_DETAIL_OFFICIAL,
    maPhim,
  };
};

export const actGetDetailMovieOfficialSuccess = (payload) => {
  return {
    type: ActionType.GET_MOVIE_DETAIL_OFFICIAL_SUCCESS,
    payload,
  };
};

export const actFilterByNameOfficial = (maPhim) => {
  return {
    type: ActionType.FILTER_BY_NAME_OFFICIAL,
    maPhim,
  };
};

export const actFilterByNameOfficialSuccess = (payload) => {
  return {
    type: ActionType.FILTER_BY_NAME_OFFICIAL_SUCCESS,
    payload,
  };
};

export const actOpenTrailer = (payload) => {
  return {
    type: ActionType.OPEN_TRAILER,
    payload,
  };
};

export const actCloseTrailer = () => {
  return {
    type: ActionType.CLOSE_TRAILER,
  };
};

export const actGetCommentsList = () => {
  return {
    type: ActionType.GET_COMMENTS_LIST,
  };
};

export const actGetCommentsListSuccess = (payload) => {
  return {
    type: ActionType.GET_COMMENTS_LIST_SUCCESS,
    payload,
  };
};

export const actAddCommentForOneMovie = (payload) => {
  return {
    type: ActionType.ADD_COMMENT_ONE_MOVIE,
    payload,
  };
};

export const actAddCommentForOneMovieSuccess = (payload) => {
  return {
    type: ActionType.ADD_COMMENT_ONE_MOVIE_SUCCESS,
    payload,
  };
};
