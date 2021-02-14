import axios from "axios";

export const GET_BOOKS = "[BOOKS] GET_BOOKS";
export const GET_BOOK_BY_ID = "[BOOKS] GET_BOOK_BY_ID";

export function getBooks() {
  const request = axios.get("/books");

  request.then((response) => {
    return {
      type: GET_BOOKS,
      payload: response.data,
    };
  });
}
