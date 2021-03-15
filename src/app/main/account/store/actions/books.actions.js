import axios from "axios";

export const GET_USER_BOOKS = "[BOOKS] GET_USER_BOOKS";

export function getUserBooks() {
  const request = axios.get("/users/my-books");

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
