import * as Actions from "./../../actions/cart/cart.actions";

const initialState = {
  data: [],
  cart: null,
  loading: false,
  error: null,
  shippingDialog: {
    open: false,
    data: null,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CART: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case Actions.ADD_TO_CART: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.DELETE_FROM_CART: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.OPEN_SHIPPING_DIALOG: {
      return {
        ...state,
        shippingDialog: { open: true, data: action.payload },
      };
    }
    case Actions.CLOSE_SHIPPING_DIALOG: {
      return {
        ...state,
        shippingDialog: { open: false, data: null },
      };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;
