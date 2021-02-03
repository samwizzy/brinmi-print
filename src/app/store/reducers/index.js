import { combineReducers } from "redux";
import flare from "./flare";
import auth from "../../auth/store/reducers";

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    flare,
    ...asyncReducers,
  });

export default createReducer;
