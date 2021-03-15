import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import brinmi from "./brinmi";
import books from "./books";
import cart from "./cart";
import auth from "../../auth/store/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const createReducer = (asyncReducers) =>
  persistReducer(
    persistConfig,
    combineReducers({
      auth,
      brinmi,
      books,
      cart,
      ...asyncReducers,
    })
  );

export default createReducer;
