import * as Actions from "../actions/user.actions";

const initialState = {
  loading: false,
  data: {
    fullName: null,
    name: "test",
    email: "test@gmail.com",
    phone: null,
    role: [],
    status: null,
  },
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case Actions.REMOVE_USER_DATA: {
      return {
        ...state,
        loading: false,
        data: { ...initialState.data },
      };
    }
    case Actions.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
