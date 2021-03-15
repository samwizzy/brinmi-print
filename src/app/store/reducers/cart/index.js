import { combineReducers } from "redux";
import cart from "./cart.reducer";

const cartReducers = combineReducers({
  cart,
});

export default cartReducers;
