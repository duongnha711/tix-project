import * as ActionType from "./constants";

export const actRegister = (account) => {
  return {
    type: ActionType.REGISTER,
    account,
  };
};



export const actLogIn = (account) => {
  return {
    type: ActionType.LOG_IN,
    account,
  };
};

export const actLogInSuccess = (account) => {
  return {
    type: ActionType.LOG_IN_SUCCESS,
    account,
  };
};
