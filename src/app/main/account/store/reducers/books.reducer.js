import * as Actions from './../actions/books.actions';

const initialState = {
  books: [],
  book: null,
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_BOOKS: {
      return {
        ...state,
        books: action.payload,
      };
    }
    case Actions.UPLOAD_BOOK_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.UPLOAD_BOOK: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.UPLOAD_BOOK_CHAPTER: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return { ...state };
  }
};

export default bookReducer;
