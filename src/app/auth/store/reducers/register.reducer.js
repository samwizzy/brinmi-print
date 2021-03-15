import * as Actions from "../actions/register.actions";

const initialState = {
  loading: false,
  data: {
    email: "",
    fullName: "",
    password: "",
    phoneNumber: "",
  },
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REGISTER_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.REGISTER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default registerReducer;
