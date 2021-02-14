import * as Actions from "./../actions/cart.actions";

const initialState = {
  cart: [],
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
        cart: action.payload,
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
