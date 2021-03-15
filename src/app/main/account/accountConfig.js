import loadable from "@loadable/component";
// import { Loader as Loading } from "@brinmi";

export const AccountConfig = {
  // auth: ["admin"],
  routes: [
    {
      path: "/account",
      exact: true,
      component: loadable(() => import("./account-details")),
    },
    {
      path: "/account/books",
      exact: true,
      component: loadable(() => import("./books")),
    },
    {
      path: "/account/books/new",
      component: loadable(() => import("./books/book-upload")),
    },
    {
      path: "/account/earnings",
      exact: true,
      component: loadable(() => import("./earnings")),
    },
    {
      path: "/account/earnings/:earningId",
      component: loadable(() => import("./earnings/earning-details")),
    },
    {
      path: "/account/notifications",
      component: loadable(() => import("./notifications")),
    },
    {
      path: "/account/chapters",
      component: loadable(() => import("./chapters")),
    },
    {
      path: "/account/subscriptions",
      component: loadable(() => import("./subscription")),
    },
    {
      path: "/account/cart",
      exact: true,
      component: loadable(() => import("./cart")),
    },
    {
      path: "/account/cart/shipping",
      component: loadable(() => import("./cart/shipping")),
    },
  ],
};
