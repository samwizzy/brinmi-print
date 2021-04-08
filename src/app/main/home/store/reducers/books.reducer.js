import { GET_FEATURE_BOOKS } from './../actions';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURE_BOOKS: {
      return {
        ...state,
        books: action.payload,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
