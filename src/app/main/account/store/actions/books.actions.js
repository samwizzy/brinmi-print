import { showSnackbar } from 'app/store/actions';
import axios from 'axios';

export const GET_USER_BOOKS = '[BOOKS] GET_USER_BOOKS';

export const UPLOAD_BOOK = '[BOOKS] UPLOAD_BOOK';
export const UPLOAD_BOOK_PROGRESS = '[BOOKS] UPLOAD_BOOK_PROGRESS';

export const UPLOAD_BOOK_CHAPTER = '[BOOKS] UPLOAD_BOOK_CHAPTER';

export function getUserBooks() {
  const request = axios.get('/users/my-books');
  console.log(request, 'request my books');

  return (dispatch) =>
    request.then((response) => {
      if ((response.status === 200) & response.data.data) {
        dispatch({
          type: GET_USER_BOOKS,
          payload: response.data.data.body,
        });
      }
    });
}

export function uploadBook(data) {
  const request = axios.post('/books/upload', data);
  console.dir(request, 'upload request');

  return (dispatch) => {
    dispatch({ type: UPLOAD_BOOK_PROGRESS });

    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        Promise.all([
          dispatch({
            type: UPLOAD_BOOK,
            payload: response.data.data.body,
          }),
        ]).then(
          dispatch(showSnackbar({ message: 'Book uploaded successfully' }))
        );
      }
    });
  };
}

export function uploadBookChapter(data) {
  const request = axios.post('/books/upload-chapter', data);

  return (dispatch) =>
    request.then((response) => {
      if ((response.status === 200) & response.data.data) {
        dispatch({
          type: UPLOAD_BOOK_CHAPTER,
          payload: response.data.data.body,
        });
      }
    });
}
