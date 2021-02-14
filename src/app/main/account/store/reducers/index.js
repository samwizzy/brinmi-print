import { combineReducers } from "redux";
import books from "./books.reducer";
import chapter from "./chapter.reducer";
import cart from "./cart.reducer";

const bookReducers = combineReducers({
  books,
  chapter,
  cart,
});

export default bookReducers;
