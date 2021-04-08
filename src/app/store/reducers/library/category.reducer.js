import * as Actions from '../../actions/library/category.actions';

const initialState = {
  loading: false,
  categories: [],
  categoryDialog: {
    open: false,
    data: null,
  },
};

const categoryReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case Actions.OPEN_CATEGORY_DIALOG: {
      return {
        ...state,
        categoryDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_CATEGORY_DIALOG: {
      return {
        ...state,
        categoryDialog: { open: false, data: null },
      };
    }
    default: {
      return state;
    }
  }
};

export default categoryReducer;
