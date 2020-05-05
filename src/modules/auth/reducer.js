import {
  LOG_IN_SUCCESS,
  LOG_OUT,
  GET_INFO_BOOKING_USER_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
} from "./constants";

const account = JSON.parse(sessionStorage.getItem("account"))
  ? JSON.parse(sessionStorage.getItem("account"))
  : {};

const isLogged = JSON.parse(sessionStorage.getItem("account")) ? true : false;

const initialState = {
  account,
  isLogged,
  userBookingInfo: [],
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS: {
      const { account } = action;
      sessionStorage.setItem("account", JSON.stringify(account));
      return { ...state, account, isLogged: true };
    }

    case LOG_OUT: {
      sessionStorage.removeItem("account");
      return { ...state, account: {}, isLogged: false };
    }

    case GET_INFO_BOOKING_USER_SUCCESS: {
      const { payload } = action;

      const objUserInfo = {
        taiKhoan: payload.taiKhoan,
        matKhau: payload.matKhau,
        email: payload.email,
        soDt: payload.soDT,
        maNhom: payload.maNhom,
        maLoaiNguoiDung: payload.loaiNguoiDung,
        hoTen: payload.hoTen,
      };

      return {
        ...state,
        userBookingInfo: payload.thongTinDatVe,
        userInfo: objUserInfo,
      };
    }

    case CHANGE_PASSWORD_SUCCESS: {
      const { account } = action;
      return { ...state, userInfo: account };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
