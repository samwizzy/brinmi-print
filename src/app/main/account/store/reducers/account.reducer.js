import * as Actions from "../actions/account.actions";

const initialState = {
  loading: false,
  accounts: [],
  profileDialog: { open: false, data: null },
  passwordDialog: { open: false, data: null },
  error: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USERS_BY_ROLE: {
      return {
        ...state,
        accounts: action.payload,
      };
    }
    case Actions.OPEN_PROFILE_DIALOG: {
      return {
        ...state,
        profileDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_PROFILE_DIALOG: {
      return {
        ...state,
        profileDialog: { open: false, data: null },
      };
    }
    case Actions.OPEN_PASSWORD_DIALOG: {
      return {
        ...state,
        passwordDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_PASSWORD_DIALOG: {
      return {
        ...state,
        passwordDialog: { open: false, data: null },
      };
    }
    default:
      return state;
  }
};

export default accountReducer;
