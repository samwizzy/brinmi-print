import { combineReducers } from "redux";
import books from "./books.reducer";
import chapter from "./chapter.reducer";
import subscription from "./subscription.reducer";

const bookReducers = combineReducers({
  books,
  chapter,
  subscription,
});

export default bookReducers;
