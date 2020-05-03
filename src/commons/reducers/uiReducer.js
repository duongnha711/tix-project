import * as ActionType from "../constants";

const initialState = {
  isShowLogin: false,
  isShowRegister: false,

  isShowGlobalLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OPEN_LOGIN:
      return { ...state, isShowLogin: true };
    case ActionType.CLOSE_LOGIN:
      return { ...state, isShowLogin: false };

      case ActionType.OPEN_REGISTER:
        return { ...state, isShowRegister: true };
      case ActionType.CLOSE_REGISTER:
        return { ...state, isShowRegister: false };

    case ActionType.OPEN_GLOBAL_LOADING:
      return { ...state, isShowGlobalLoading: true };
    case ActionType.CLOSE_GLOBAL_LOADING:
      return { ...state, isShowGlobalLoading: false };

    default:
      return { ...state };
  }
};

export default uiReducer;
