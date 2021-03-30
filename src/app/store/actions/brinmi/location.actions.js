import axios from "axios";

export const GET_COUNTRIES = "[LOCATION] GET_COUNTRIES";
export const GET_STATES = "[LOCATION] GET_STATES";
export const GET_STATE_BY_COUNTRY = "[LOCATION] GET_STATE_BY_COUNTRY";

export function getCountries() {
  const request = axios.get("/countries");
  console.log(request, "request for countries");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data.data.body,
        });
      }
    });
}

export function getStates() {
  const request = axios.get("/states/");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_STATES,
          payload: response.data.data.body,
        });
      }
    });
}

export function getStateByCountry(id) {
  const request = axios.get("/states/country", { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_STATE_BY_COUNTRY,
          payload: response.data.data.body,
        });
      }
    });
}
