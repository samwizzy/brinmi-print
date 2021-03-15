import axios from "axios";

export const GET_CATEGORIES = "[BOOKS] GET_CATEGORIES";

export const CREATE_CATEGORY = "[BOOKS] CREATE_CATEGORY";

export const OPEN_CATEGORY_DIALOG = "[BOOKS] OPEN_CATEGORY_DIALOG";
export const CLOSE_CATEGORY_DIALOG = "[BOOKS] CLOSE_CATEGORY_DIALOG";

export function getCategories() {
  const request = axios.get("/book-categories");
  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data.data.body,
        });
      }
    });
}

export function createCategory(data) {
  const request = axios.post("/book-categories", data);
  console.log(request, "request data create");

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: CREATE_CATEGORY,
          payload: response.data.data.body,
        });
      }
    });
}

export function openCategoryDialog(payload) {
  return {
    type: OPEN_CATEGORY_DIALOG,
    payload,
  };
}

export function closeCategoryDialog(payload) {
  return {
    type: CLOSE_CATEGORY_DIALOG,
    payload,
  };
}
