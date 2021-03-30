import axios from "axios";
import { showSnackbar } from "./snackbar.actions";

export const CREATE_PARTNER = "[PARTNER] CREATE_PARTNER";
export const GET_PARTNERS = "[PARTNER] GET_PARTNERS";

export const OPEN_PARTNER_WITH_US_DIALOG =
  "[PARTNER] OPEN_PARTNER_WITH_US_DIALOG";
export const CLOSE_PARTNER_WITH_US_DIALOG =
  "[PARTNER] CLOSE_PARTNER_WITH_US_DIALOG";

export function createPartner(data) {
  const request = axios.post("/partnerships/", data);

  console.dir(request, "request for partner");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        Promise.all([
          dispatch({
            type: CREATE_PARTNER,
            payload: response.data.data.body,
          }),
        ]).then(
          dispatch(
            showSnackbar({
              message: "Partnership request has been acknowledged successfully",
            })
          ),
          dispatch(closePartnerWithUsDialog())
        );
      }
    });
}

export function openPartnerWithUsDialog(data) {
  return {
    type: OPEN_PARTNER_WITH_US_DIALOG,
    payload: data,
  };
}

export function closePartnerWithUsDialog() {
  return {
    type: CLOSE_PARTNER_WITH_US_DIALOG,
  };
}
