import axios from "axios";

export const GET_BOOKS = "[BOOKS] GET_BOOKS";
export const GET_BOOK_BY_ID = "[BOOKS] GET_BOOK_BY_ID";
export const DELETE_BOOK_BY_ID = "[BOOKS] DELETE_BOOK_BY_ID";
export const GET_BOOKS_BY_CATEGORY_ID = "[BOOKS] GET_BOOKS_BY_CATEGORY_ID";
export const GET_BOOKS_BY_AUTHOR = "[BOOKS] GET_BOOKS_BY_AUTHOR";

export const GET_BOOK_RATING = "[BOOKS] GET_BOOK_RATING";

export function getBooks() {
  const request = axios.get("/books");

  console.log(request, "request yall");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_BOOKS,
          payload: response.data.data.body,
        });
      }
    });
}

export function getBookById(id) {
  const request = axios.get("/books/book-id", { params: { id } });

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
  const request = axios.get("/books/delete", { params: { id } });

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

export function getBookByCategoryId(id) {
  const request = axios.get("/books/book-categories/id", {
    params: { "book-category-id": id },
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
  const request = axios.get("/books/author", { params: { id } });

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
  const request = axios.get("/rating/book", { params: { id } });

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
