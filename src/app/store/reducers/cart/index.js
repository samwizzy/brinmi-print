import { combineReducers } from "redux";
import cart from "./cart.reducer";
import order from "./order.reducer";

const cartReducers = combineReducers({
  cart,
  order,
});

export default cartReducers;
