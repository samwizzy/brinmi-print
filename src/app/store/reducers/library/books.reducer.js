import * as Actions from '../../actions/library/books.actions';

const initialState = {
  books: {
    data: [],
    total: 0,
    limit: 0,
    page: 0,
    totalChapters: 0,
  },
  filteredBooks: {
    data: [],
    total: 0,
    limit: 0,
    page: 0,
    totalChapters: 0,
  },
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
        filteredBooks: action.payload,
      };
    }
    case Actions.GET_FILTERED_BOOKS: {
      return {
        ...state,
        filteredBooks: {
          ...state.books,
          data: action.payload,
        },
      };
    }
    case Actions.GET_BOOK_BY_ID: {
      return {
        ...state,
        book: action.payload,
      };
    }
    case Actions.UPLOAD_BOOK_CHAPTER: {
      return {
        ...state,
        loading: false,
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
