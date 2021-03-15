import { combineReducers } from "redux";
import register from "./register.reducer";
import login from "./login.reducer";
import user from "./user.reducer";

const authReducers = combineReducers({
  register,
  login,
  user,
});

export default authReducers;
