import * as Actions from "../../actions/brinmi/notification.actions";

const initialState = {
  loading: false,
  notifications: [],
};

const notificationReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: action.payload
      };
    }
    case Actions.POST_NOTIFICATION: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
