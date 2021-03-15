import axios from "axios";

export const GET_CART = "[CART] GET_CART";
export const GET_CART_BY_ID = "[CART] GET_CART_BY_ID";

export const ADD_TO_CART = "[CART] ADD_TO_CART";
export const DELETE_FROM_CART = "[CART] DELETE_FROM_CART";

export const OPEN_SHIPPING_DIALOG = "[CART] OPEN_SHIPPING_DIALOG";
export const CLOSE_SHIPPING_DIALOG = "[CART] CLOSE_SHIPPING_DIALOG";

export function getCart() {
  const request = axios.get("/carts/users");

  request.then((response) => {
    return {
      type: GET_CART,
      payload: response.data,
    };
  });
}

export function addToCart(data) {
  const request = axios.post("/carts/", data);

  request.then((response) => {
    return {
      type: ADD_TO_CART,
      payload: response.data,
    };
  });
}

export function deleteFromCart(cartId) {
  const request = axios.delete("/carts/delete",  {params:{id: cartId}});

  request.then((response) => {
    return {
      type: DELETE_FROM_CART,
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
