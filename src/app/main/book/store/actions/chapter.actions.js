import axios from 'axios';

export const GET_BOOK_CHAPTERS = '[CHAPTER] GET_BOOK_CHAPTERS';
export const GET_BOOK_CHAPTER_BY_ID = '[CHAPTER] GET_BOOK_CHAPTER_BY_ID';

export const UPLOAD_BOOK_CHAPTER = '[CHAPTER] UPLOAD_BOOK_CHAPTER';

export const OPEN_CHAPTER_SLIDE_DIALOG = '[CHAPTER] OPEN_CHAPTER_SLIDE_DIALOG';
export const CLOSE_CHAPTER_SLIDE_DIALOG =
  '[CHAPTER] CLOSE_CHAPTER_SLIDE_DIALOG';

export const OPEN_CHAPTER_UPLOAD_DIALOG =
  '[CHAPTER] OPEN_CHAPTER_UPLOAD_DIALOG';
export const CLOSE_CHAPTER_UPLOAD_DIALOG =
  '[CHAPTER] CLOSE_CHAPTER_UPLOAD_DIALOG';

export const OPEN_SUBSCRIBE_DIALOG = '[CHAPTER] OPEN_SUBSCRIBE_DIALOG';
export const CLOSE_SUBSCRIBE_DIALOG = '[CHAPTER] CLOSE_SUBSCRIBE_DIALOG';

export function getBookChapters() {
  const request = axios.get('/books/chapters');

  request.then((response) => {
    return {
      type: GET_BOOK_CHAPTERS,
      payload: response.data,
    };
  });
}

export function getBookChapterById(bookId) {
  const request = axios.get('/books/chapter/' + bookId);

  request.then((response) => {
    return {
      type: GET_BOOK_CHAPTER_BY_ID,
      payload: response.data,
    };
  });
}

export function uploadBookChapter(id, data) {
  const request = axios.post('/books/upload-chapter?id=' + id, data);
  console.log(id, 'id chapters');
  console.log(data, 'data chapters');
  console.log(request, 'request upload chapters');

  return (dispatch) =>
    request.then((response) => {
      if (response.status === 200 && response.data.data) {
        dispatch({
          type: UPLOAD_BOOK_CHAPTER,
          payload: response.data.data.body,
        });
      }
    });
}

export function openChapterUploadDialog(data) {
  return {
    type: OPEN_CHAPTER_UPLOAD_DIALOG,
    payload: data,
  };
}

export function closeChapterUploadDialog(data) {
  return {
    type: CLOSE_CHAPTER_UPLOAD_DIALOG,
    payload: data,
  };
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

export function openChapterSlideDialog(data) {
  return {
    type: OPEN_CHAPTER_SLIDE_DIALOG,
    payload: data,
  };
}

export function closeChapterSlideDialog(data) {
  return {
    type: CLOSE_CHAPTER_SLIDE_DIALOG,
    payload: data,
  };
}
