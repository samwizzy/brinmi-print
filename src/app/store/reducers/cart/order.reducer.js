import * as Actions from './../../actions/cart/order.actions';

const initialState = {
  order: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SUBMIT_ORDER_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.SUBMIT_ORDER: {
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default orderReducer;
