import authService from "./../../../services/authService";
import { setUserData } from "./user.actions";
import { showSnackbar } from "./../../../store/actions";
import history from "./../../../history"

export const LOGIN_SUCCESS = "[AUTH] LOGIN_SUCCESS_2";
export const LOGIN_ERROR = "[AUTH] LOGIN_ERROR";
export const LOGIN_PROGRESS = "[AUTH] LOGIN_PROGRESS";

export function login(data) {
  return (dispatch) => {
    dispatch({ type: LOGIN_PROGRESS });
    authService
      .signInWithEmailAndPassword(data)
      .then((user) => {
        Promise.all([
          dispatch(setUserData(user.data.body)),
          dispatch({ type: LOGIN_SUCCESS }),
        ]).then(
          dispatch(showSnackbar({ message: "Registration successful" })),
          history.push("/")
        );
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.message,
        });
      });
  };
}
