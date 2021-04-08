import axios from 'axios';

export const GET_FEATURE_BOOKS = '[BOOKS] GET_FEATURE_BOOKS';
export const GET_CURRENT_BOOKS = '[BOOKS] GET_CURRENT_BOOKS';
export const GET_RECENT_BOOKS = '[BOOKS] GET_RECENT_BOOKS';

export function getBooks() {
  const request = axios.get('/books');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_FEATURE_BOOKS,
          payload: response.data.data.body,
        });
      }
    });
}
