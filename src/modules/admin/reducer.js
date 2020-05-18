import {
  ADD_USER,
  CLOSE_USER_MODAL,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  GET_USERS_LIST_PAGINATION_SUCCESS,
  GET_USERS_LIST_SUCCESS,
} from "./constants";

const initialState = {
  usersList: [],
  infoPagination: {},
  titleModal: "",
  openUserModal: false,
  editUser: {},
};
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        openUserModal: true,
        titleModal: "Add User",
        editUser: {},
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        openUserModal: true,
        titleModal: "Edit User",
        editUser: action.payload,
      };
    }

    case CLOSE_USER_MODAL: {
      return { ...state, openUserModal: false };
    }
    //~~~~~~~~~~~~~~~~~~

    case GET_USERS_LIST_SUCCESS: {
      console.log(action.payload);
      return { ...state, usersList: action.payload };
    }

    case GET_USERS_LIST_PAGINATION_SUCCESS: {
      const { items, ...rest } = action.payload;
      return { ...state, usersList: items, infoPagination: { ...rest } };
    }

    case DELETE_USER_SUCCESS: {
      const { taiKhoan } = action;
      const { usersList } = state;
      const newUsersList = usersList.filter(
        (user) => user.taiKhoan !== taiKhoan
      );
      return { ...state, usersList: newUsersList };
    }

    default:
      return { ...state };
  }
};
export default adminReducer;
