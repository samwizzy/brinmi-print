import axios from "axios";

export const GET_USER_SUBSCRIPTIONS = "[SUBSCRIPTION] GET_USER_SUBSCRIPTIONS";
export const CREATE_USER_SUBSCRIPTION =
  "[SUBSCRIPTION] CREATE_USER_SUBSCRIPTION";
export const UPDATE_USER_SUBSCRIPTION =
  "[SUBSCRIPTION] UPDATE_USER_SUBSCRIPTION";

export const GET_SUBSCRIPTIONS = "[SUBSCRIPTION] GET_SUBSCRIPTIONS";
export const GET_SUBSCRIPTION_BY_ID = "[SUBSCRIPTION] GET_SUBSCRIPTION_BY_ID";

export const OPEN_SUBSCRIPTION_DIALOG =
  "[SUBSCRIPTION] OPEN_SUBSCRIPTION_DIALOG";
export const CLOSE_SUBSCRIPTION_DIALOG =
  "[SUBSCRIPTION] CLOSE_SUBSCRIPTION_DIALOG";

export function getUserSubscriptions() {
  const request = axios.get("/users/subscriptions");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_USER_SUBSCRIPTIONS,
          payload: response.data.data.body,
        });
      }
    });
}

export function createUserSubscription() {
  const request = axios.post("/users/subscriptions");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: CREATE_USER_SUBSCRIPTION,
          payload: response.data.data.body,
        });
      }
    });
}

export function updateUserSubscription() {
  const request = axios.put("/users/subscriptions");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_SUBSCRIPTION,
          payload: response.data.data.body,
        });
      }
    });
}

export function getSubscriptions() {
  const request = axios.get("/admin/subscriptions");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_SUBSCRIPTIONS,
          payload: response.data.data.body,
        });
      }
    });
}

export function getSubsciptionById(id) {
  const request = axios.post("/admin/subscriptions/" + id);

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_SUBSCRIPTION_BY_ID,
          payload: response.data.data.body,
        });
      }
    });
}

export function openSubscriptionDialog(data) {
  return {
    type: OPEN_SUBSCRIPTION_DIALOG,
    payload: data,
  };
}

export function closeSubscriptionDialog() {
  return {
    type: CLOSE_SUBSCRIPTION_DIALOG,
  };
}
