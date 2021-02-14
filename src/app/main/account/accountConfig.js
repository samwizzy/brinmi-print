import Loadable from "react-loadable";
// import { Loader as Loading } from "@brinmi";

export const AccountConfig = {
  // auth: ["admin"],
  routes: [
    {
      path: "/account",
      exact: true,
      component: Loadable({
        loader: () => import("./account-details"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/books",
      exact: true,
      component: Loadable({
        loader: () => import("./books"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/books/new",
      component: Loadable({
        loader: () => import("./books/book-upload"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/earnings",
      exact: true,
      component: Loadable({
        loader: () => import("./earnings"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/earnings/:earningId",
      component: Loadable({
        loader: () => import("./earnings/earning-details"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/notifications",
      component: Loadable({
        loader: () => import("./notifications"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/chapters",
      component: Loadable({
        loader: () => import("./chapters"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/subscriptions",
      component: Loadable({
        loader: () => import("./subscription"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/cart",
      exact: true,
      component: Loadable({
        loader: () => import("./cart"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/account/cart/shipping",
      component: Loadable({
        loader: () => import("./cart/shipping"),
        loading: () => <div>Loading...</div>,
      }),
    },
  ],
};
