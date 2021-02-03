import { combineReducers } from "redux";
import register from "./register.reducer";
import user from "./user.reducer";

const authReducers = combineReducers({
  register,
  user,
});

export default authReducers;
