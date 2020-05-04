import {
  REGISTER,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_OUT,
  GET_INFO_BOOKING_USER,
  GET_INFO_BOOKING_USER_SUCCESS,
} from "./constants";

export const actRegister = (account) => {
  return {
    type: REGISTER,
    account,
  };
};

export const actLogIn = (account) => {
  return {
    type: LOG_IN,
    account,
  };
};

export const actLogInSuccess = (account) => {
  return {
    type: LOG_IN_SUCCESS,
    account,
  };
};

export const actLogOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const actGetInfoBookingUser = (account) => {
  return {
    type: GET_INFO_BOOKING_USER,
    account,
  };
};

export const actGetInfoBookingUserSuccess = (payload) => {
  return {
    type: GET_INFO_BOOKING_USER_SUCCESS,
    payload,
  };
};
