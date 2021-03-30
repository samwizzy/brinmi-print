import * as Actions from "./../actions/subscription.actions";

const initialState = {
  subscriptions: [],
  userSubscriptions: [],
  loading: false,
  error: null,
  subscriptionDialog: {
    open: false,
    data: null,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_SUBSCRIPTIONS: {
      return {
        ...state,
        loading: false,
        userSubscriptions: action.payload,
      };
    }
    case Actions.CREATE_USER_SUBSCRIPTION: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.UPDATE_USER_SUBSCRIPTION: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.GET_SUBSCRIPTIONS: {
      return {
        ...state,
        loading: false,
        subscriptions: action.payload,
      };
    }
    case Actions.GET_SUBSCRIPTION_BY_ID: {
      return {
        ...state,
        loading: false,
        subscription: action.payload,
      };
    }
    case Actions.OPEN_SUBSCRIPTION_DIALOG: {
      return {
        ...state,
        subscriptionDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_SUBSCRIPTION_DIALOG: {
      return {
        ...state,
        subscriptionDialog: { open: false, data: null },
      };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;
