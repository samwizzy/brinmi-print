import { combineReducers } from "redux";
import snackbar from "./snackbar.reducer";

const flareReducers = combineReducers({
  snackbar,
});

export default flareReducers;
