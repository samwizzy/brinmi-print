import axios from 'axios';
import { showSnackbar } from './../../actions';

export const GET_CART = '[CART] GET_CART';
export const GET_CART_BY_ID = '[CART] GET_CART_BY_ID';

export const ADD_TO_CART = '[CART] ADD_TO_CART';
export const DELETE_FROM_CART = '[CART] DELETE_FROM_CART';

export const OPEN_SHIPPING_DIALOG = '[CART] OPEN_SHIPPING_DIALOG';
export const CLOSE_SHIPPING_DIALOG = '[CART] CLOSE_SHIPPING_DIALOG';

export function getCarts() {
  const request = axios.get('/carts/users');
  console.log(request, 'cart called');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_CART,
          payload: response.data.data.body,
        });
      }
    });
}

export function addToCart(data) {
  const request = axios.post('/carts/', data);
  console.log(request, 'add to cart called');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        Promise.all([
          dispatch({
            type: ADD_TO_CART,
            payload: response.data.data.body,
          }),
        ]).then(
          dispatch(showSnackbar({ message: 'You have added a book to cart' })),
          dispatch(getCarts())
        );
      }
    });
}

export function deleteFromCart(cartId) {
  const request = axios.delete('/carts/delete', { params: { id: cartId } });
  console.log(request, 'delete from cart called');

  return (dispatch) =>
    request.then((response) => {
      Promise.all([
        dispatch({
          type: DELETE_FROM_CART,
          payload: response.data,
        }),
      ]).then(
        dispatch(
          showSnackbar({ message: 'One item successfully deleted from cart' })
        ),
        dispatch(getCarts())
      );
    });
}

export function openShippingDialog(data) {
  return {
    type: OPEN_SHIPPING_DIALOG,
    payload: data,
  };
}

export function closeShippingDialog() {
  return {
    type: CLOSE_SHIPPING_DIALOG,
  };
}
