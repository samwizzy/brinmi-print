import Book from ".";
import Loadable from "react-loadable";
// import { Loader as Loading } from "@brinmi";

export const BookConfig = {
  // auth: ["admin"],
  routes: [
    {
      path: "/books",
      exact: true,
      component: Book,
    },
    {
      path: "/books/:bookId",
      exact: true,
      component: Loadable({
        loader: () => import("./book-details"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/books/:bookId/chapter/:chapterId",
      component: Loadable({
        loader: () => import("./chapters"),
        loading: () => <div>Loading...</div>,
      }),
    },
  ],
};
