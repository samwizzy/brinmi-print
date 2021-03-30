import axios from "axios"
import { showSnackbar } from "./snackbar.actions"

export const GET_NOTIFICATIONS = "[NOTIFICATIONS] GET_NOTIFICATIONS";
export const POST_NOTIFICATION = "[NOTIFICATIONS] POST_NOTIFICATION";

export function getNotifications() {
  const request = axios.get("/notifications/");
  console.log(request, "request for /notifications/")

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_NOTIFICATIONS,
          payload: response.data.data.body,
        });
      }
    });
}

export function postNotification(data) {
  const request = axios.post("/notifications/", data);

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        Promise.all([
          dispatch({
            type: POST_NOTIFICATION,
            payload: response.data.data.body,
          })
        ]).then(dispatch(showSnackbar({ message: "Notification posted successfully" })))
      }
    });
}
