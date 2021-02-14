import axios from "axios";

export const GET_BOOK_CHAPTERS = "[CHAPTER] GET_BOOK_CHAPTERS";
export const GET_BOOK_CHAPTER_BY_ID = "[CHAPTER] GET_BOOK_CHAPTER_BY_ID";

export const OPEN_SUBSCRIBE_DIALOG = "[CHAPTER] OPEN_SUBSCRIBE_DIALOG";
export const CLOSE_SUBSCRIBE_DIALOG = "[CHAPTER] CLOSE_SUBSCRIBE_DIALOG";

export function getBookChapters() {
  const request = axios.get("/books/chapters");

  request.then((response) => {
    return {
      type: GET_BOOK_CHAPTERS,
      payload: response.data,
    };
  });
}

export function getBookChapterById(bookId) {
  const request = axios.get("/books/chapter/" + bookId);

  request.then((response) => {
    return {
      type: GET_BOOK_CHAPTER_BY_ID,
      payload: response.data,
    };
  });
}

export function openSubscribeDialog(data) {
  return {
    type: OPEN_SUBSCRIBE_DIALOG,
    payload: data,
  };
}

export function closeSubscribeDialog(data) {
  return {
    type: CLOSE_SUBSCRIBE_DIALOG,
    payload: data,
  };
}
