import axios from "axios";

export const GET_CART = "[CART] GET_CART";
export const GET_CART_BY_ID = "[CART] GET_CART_BY_ID";

export const OPEN_SHIPPING_DIALOG = "[CART] OPEN_SHIPPING_DIALOG";
export const CLOSE_SHIPPING_DIALOG = "[CART] CLOSE_SHIPPING_DIALOG";

export function getCart() {
  const request = axios.get("/books/chapters");

  request.then((response) => {
    return {
      type: GET_CART,
      payload: response.data,
    };
  });
}

export function getCartById(cartId) {
  const request = axios.get("/auth/cart/" + cartId);

  request.then((response) => {
    return {
      type: GET_CART_BY_ID,
      payload: response.data,
    };
  });
}

export function openShippingDialog(data) {
  return {
    type: OPEN_SHIPPING_DIALOG,
    payload: data,
  };
}

export function closeShippingDialog(data) {
  return {
    type: CLOSE_SHIPPING_DIALOG,
    payload: data,
  };
}
