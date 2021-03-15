import * as Actions from "./../actions/books.actions";

const initialState = {
  books: [],
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
