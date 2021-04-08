import axios from 'axios';

export const GET_BOOKS = '[BOOKS] GET_BOOKS';
export const GET_FILTERED_BOOKS = '[BOOKS] GET_FILTERED_BOOKS';
export const GET_BOOK_BY_ID = '[BOOKS] GET_BOOK_BY_ID';
export const UPLOAD_BOOK_CHAPTER = '[BOOKS] UPLOAD_BOOK_CHAPTER';
export const DELETE_BOOK_BY_ID = '[BOOKS] DELETE_BOOK_BY_ID';
export const GET_BOOKS_BY_CATEGORY_ID = '[BOOKS] GET_BOOKS_BY_CATEGORY_ID';
export const GET_BOOKS_BY_AUTHOR = '[BOOKS] GET_BOOKS_BY_AUTHOR';

export const GET_BOOK_RATING = '[BOOKS] GET_BOOK_RATING';

export function getBooks(page) {
  const request = axios.get('/books', { params: { page } });

  console.log(request, 'request yall');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_BOOKS,
          payload: {
            data: response.data.data.body,
            total: response.data.total,
            limit: response.data.limit,
            page: response.data.page,
            totalChapters: response.data.totalChapters,
          },
        });
      }
    });
}

export function getFilteredBooks(books) {
  return {
    type: GET_FILTERED_BOOKS,
    payload: books,
  };
}

export function getBookById(id) {
  const request = axios.get('/books/book-id', { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_BOOK_BY_ID,
          payload: response.data.data.body,
        });
      }
    });
}

export function deleteBookById(id) {
  const request = axios.get('/books/delete', { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: DELETE_BOOK_BY_ID,
          payload: response.data.data.body,
        });
      }
    });
}

export function uploadBookChapter(id, data) {
  const request = axios.post('/books/upload-chapter', data, { params: { id } });
  console.log(request, 'request upload chapters');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: UPLOAD_BOOK_CHAPTER,
          payload: response.data.data.body,
        });
      }
    });
}

export function getBookByCategoryId(id) {
  const request = axios.get('/books/book-categories/id', {
    params: { 'book-category-id': id },
  });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_BOOKS_BY_CATEGORY_ID,
          payload: response.data.data.body,
        });
      }
    });
}

export function getBookByAuthor(id) {
  const request = axios.get('/books/author', { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_BOOKS_BY_AUTHOR,
          payload: response.data.data.body,
        });
      }
    });
}

export function getBookRating(id) {
  const request = axios.get('/rating/book', { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_BOOK_RATING,
          payload: response.data.data.body,
        });
      }
    });
}
