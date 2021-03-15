import axios from "axios";

export const GET_BOOKS = "[BOOKS] GET_BOOKS";

export function getBooks() {
  const request = axios.get("/books");

  console.log(request, "get all books");

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
