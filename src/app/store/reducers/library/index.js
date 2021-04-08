import { combineReducers } from 'redux';
import category from './category.reducer';
import books from './books.reducer';

const booksReducers = combineReducers({
  category,
  books,
});

export default booksReducers;
