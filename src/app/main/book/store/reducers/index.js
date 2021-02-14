import { combineReducers } from "redux";
import books from "./books.reducer";
import chapter from "./chapter.reducer";

const bookReducers = combineReducers({
  books,
  chapter,
});

export default bookReducers;
