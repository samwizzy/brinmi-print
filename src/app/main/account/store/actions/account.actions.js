import axios from 'axios';
import { showSnackbar } from './../../../../store/actions';

export const GET_USERS_BY_ROLE = '[AUTH] GET_USERS_BY_ROLE';

export const GET_PICTURE = '[AUTH] GET_PICTURE';
export const UPLOAD_PICTURE = '[AUTH] UPLOAD_PICTURE';

export const UPDATE_PROFILE = '[AUTH] UPDATE_PROFILE';

export const OPEN_PROFILE_DIALOG = '[AUTH] OPEN_PROFILE_DIALOG';
export const CLOSE_PROFILE_DIALOG = '[AUTH] CLOSE_PROFILE_DIALOG';

export const OPEN_PASSWORD_DIALOG = '[AUTH] OPEN_PASSWORD_DIALOG';
export const CLOSE_PASSWORD_DIALOG = '[AUTH] CLOSE_PASSWORD_DIALOG';

export function getUsersByRole(role) {
  const request = axios.get('/users/roles', { params: { role } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_USERS_BY_ROLE,
          payload: response.data.data.body,
        });
      }
    });
}

export function getPicture(id) {
  const request = axios.post('/users/get-picture', { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_PICTURE,
          payload: response.data.data.body,
        });
      }
    });
}

export function uploadPicture(data, id) {
  const request = axios.post('/users/upload-picture', data, { params: { id } });

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        Promise.all([
          dispatch({
            type: UPLOAD_PICTURE,
            payload: response.data.data.body,
          }),
        ]).then(
          dispatch(
            showSnackbar({
              message: 'Your picture has successfully been uploaded',
            })
          )
        );
      }
    });
}

export function updateProfile(id, data) {
  const request = axios.put('/users/update', data, { params: { id } });
  console.dir(request, 'update request');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200) {
        Promise.all([
          dispatch({
            type: UPDATE_PROFILE,
          }),
        ]).then(
          dispatch(showSnackbar({ message: response.data.message })),
          dispatch(closeProfileDialog())
        );
      }
    });
}

export function openProfileDialog(data) {
  return {
    type: OPEN_PROFILE_DIALOG,
    payload: data,
  };
}

export function closeProfileDialog() {
  return {
    type: CLOSE_PROFILE_DIALOG,
  };
}

export function openPasswordDialog(data) {
  return {
    type: OPEN_PASSWORD_DIALOG,
    payload: data,
  };
}

export function closePasswordDialog() {
  return {
    type: CLOSE_PASSWORD_DIALOG,
  };
}
