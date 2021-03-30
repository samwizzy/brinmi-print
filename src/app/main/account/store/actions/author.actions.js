import axios from "axios";
import { showSnackbar } from "./../../../../store/actions";

export const BECOME_AN_AUTHOR = "[AUTHOR] BECOME_AN_AUTHOR";

export const OPEN_AUTHOR_DIALOG = "[AUTHOR] OPEN_AUTHOR_DIALOG";
export const CLOSE_AUTHOR_DIALOG = "[AUTHOR] CLOSE_AUTHOR_DIALOG";

export function becomeAnAuthor(data) {
  const request = axios.post("/users/become-an-author", data);

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        Promise.all([
          dispatch({
            type: BECOME_AN_AUTHOR,
            payload: response.data.data.body,
          }),
        ]).then(
          dispatch(
            showSnackbar({
              message: "Great! You are now an author",
            }),
            closeAuthorDialog()
          )
        );
      }
    });
}

export function openAuthorDialog(data) {
  return {
    type: OPEN_AUTHOR_DIALOG,
    payload: data,
  };
}

export function closeAuthorDialog() {
  return {
    type: CLOSE_AUTHOR_DIALOG,
  };
}
