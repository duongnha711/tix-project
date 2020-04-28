import * as ActionType from "../constants";

const initialState = {
  openLogin: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_LOGIN:
      return { ...state, openLogin: true };

    case ActionType.CLOSE_LOGIN:
      return { ...state, openLogin: false };
    default:
      return { ...state };
  }
};

export default uiReducer;
