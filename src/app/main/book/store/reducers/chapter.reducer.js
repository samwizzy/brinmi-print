import * as Actions from "./../actions/chapter.actions";

const initialState = {
  books: [],
  book: null,
  loading: false,
  error: null,
  subscribeDialog: {
    open: false,
    data: null,
  },
  chapterSlideDialog: {
    open: false,
    data: { chapters: [], active: 0 },
  },
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_BOOK_CHAPTERS: {
      return {
        ...state,
        books: action.payload,
      };
    }
    case Actions.GET_BOOK_CHAPTER_BY_ID: {
      return {
        ...state,
        book: action.payload,
      };
    }
    case Actions.OPEN_SUBSCRIBE_DIALOG: {
      return {
        ...state,
        subscribeDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_SUBSCRIBE_DIALOG: {
      return {
        ...state,
        subscribeDialog: { open: false, data: null },
      };
    }
    case Actions.OPEN_CHAPTER_SLIDE_DIALOG: {
      return {
        ...state,
        chapterSlideDialog: { open: true, data: { chapters: action.payload } },
      };
    }
    case Actions.CLOSE_CHAPTER_SLIDE_DIALOG: {
      return {
        ...state,
        chapterSlideDialog: { open: false, data: { chapters: [], active: 0 } },
      };
    }
    default:
      return { ...state };
  }
};

export default chapterReducer;
