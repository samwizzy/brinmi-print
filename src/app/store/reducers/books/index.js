import { combineReducers } from "redux";
import category from "./category.reducer";

const booksReducers = combineReducers({
  category,
});

export default booksReducers;
