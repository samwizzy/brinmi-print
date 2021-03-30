import * as Actions from "../actions/author.actions";

const initialState = {
  loading: false,
  authorDialog: { open: false, data: null },
  error: null,
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.BECOME_AN_AUTHOR: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.OPEN_AUTHOR_DIALOG: {
      return {
        ...state,
        authorDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_AUTHOR_DIALOG: {
      return {
        ...state,
        authorDialog: { open: false, data: null },
      };
    }
    default:
      return state;
  }
};

export default authorReducer;
