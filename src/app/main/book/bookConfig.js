import loadable from "@loadable/component";
// import { Loader as Loading } from "@brinmi";

export const BookConfig = {
  // auth: ["admin"],
  routes: [
    {
      path: "/books",
      exact: true,
      component: loadable(() => import(".")),
    },
    {
      path: "/books/:bookId",
      exact: true,
      component: loadable(() => import("./book-details")),
    },
    {
      path: "/books/:bookId/chapter/:chapterId",
      component: loadable(() => import("./chapters")),
    },
  ],
};
