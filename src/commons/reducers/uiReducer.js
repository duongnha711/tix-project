import * as ActionType from "../constants";

const initialState = {
  isShowGlobalLoading: false,

  // isShowLogin: false,
  // isShowRegister: false,
  // isShowFilterLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.OPEN_LOGIN:
    //   return { ...state, isShowLogin: true };
    // case ActionType.CLOSE_LOGIN:
    //   return { ...state, isShowLogin: false };

    // case ActionType.OPEN_REGISTER:
    //   return { ...state, isShowRegister: true };
    // case ActionType.CLOSE_REGISTER:
    //   return { ...state, isShowRegister: false };

    case ActionType.OPEN_GLOBAL_LOADING:
      return { ...state, isShowGlobalLoading: true };
    case ActionType.CLOSE_GLOBAL_LOADING:
      return { ...state, isShowGlobalLoading: false };

    // case ActionType.OPEN_FILTER_LOADING:
    //   return { ...state, isShowFilterLoading: true };
    // case ActionType.CLOSE_FILTER_LOADING:
    //   return { ...state, isShowFilterLoading: false };

    default:
      return { ...state };
  }
};

export default uiReducer;
