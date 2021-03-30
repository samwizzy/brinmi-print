import * as Actions from "../../actions/brinmi/location.actions";

const initialState = {
  loading: false,
  countries: [],
  states: [],
};

const snackbar = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_COUNTRIES: {
      return {
        ...state,
        countries: action.payload
      };
    }
    case Actions.GET_STATES: {
      return {
        ...state,
        states: action.payload,
      };
    }
    case Actions.GET_STATE_BY_COUNTRY: {
      return {
        ...state,
        states: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default snackbar;
