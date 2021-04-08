import axios from 'axios';
import { showSnackbar } from './../../actions';

export const SUBMIT_ORDER = '[CART] SUBMIT_ORDER';
export const SUBMIT_ORDER_PROGRESS = '[CART] SUBMIT_ORDER_PROGRESS';

export function submitOrder(data) {
  const request = axios.post('/orders/', data);
  console.log(request, 'request order books');

  return (dispatch) => {
    dispatch({ type: SUBMIT_ORDER_PROGRESS });

    request.then((response) => {
      if (response.status === 200) {
        Promise.all([
          dispatch({
            type: SUBMIT_ORDER,
            payload: response.data.data.body,
          }),
        ]).then(
          dispatch(
            showSnackbar({
              message: 'Your order has successfully been processed',
            })
          )
        );
      }
    });
  };
}
