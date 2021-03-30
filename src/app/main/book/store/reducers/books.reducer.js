import * as Actions from "./../actions/books.actions";

const initialState = {
  books: [],
  authoredBooks: [],
  book: null,
  rating: null,
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_BOOKS: {
      return {
        ...state,
        books: action.payload,
      };
    }
    case Actions.GET_BOOK_BY_ID: {
      return {
        ...state,
        book: action.payload,
      };
    }
    case Actions.DELETE_BOOK_BY_ID: {
      return {
        ...state,
        book: action.payload,
      };
    }
    case Actions.GET_BOOKS_BY_CATEGORY_ID: {
      return {
        ...state,
        books: action.payload,
      };
    }
    case Actions.GET_BOOKS_BY_AUTHOR: {
      return {
        ...state,
        authoredBooks: action.payload,
      };
    }
    case Actions.GET_BOOK_RATING: {
      return {
        ...state,
        rating: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default bookReducer;
