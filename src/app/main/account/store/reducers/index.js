import { combineReducers } from "redux";
import books from "./books.reducer";
import chapter from "./chapter.reducer";
import subscription from "./subscription.reducer";
import account from "./account.reducer";
import author from "./author.reducer";

const bookReducers = combineReducers({
  account,
  author,
  books,
  chapter,
  subscription,
});

export default bookReducers;
