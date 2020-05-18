import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import ui from "./uiReducer";
import home from "./../../modules/home/reducer";
import auth from "./../../modules/auth/reducer";
import admin from "./../../modules/admin/reducer";

const rootReducer = combineReducers({
  ui,
  home,
  auth,
  admin,
  form: formReducer,
});
export default rootReducer;
