import { combineReducers } from "redux";
import snackbar from "./snackbar.reducer";
import location from "./location.reducer";
import notification from "./notification.reducer";
import partner from "./partner.reducer";

const flareReducers = combineReducers({
  snackbar,
  location,
  notification,
  partner
});

export default flareReducers;
