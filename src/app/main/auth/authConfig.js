import Loadable from "react-loadable";

export const AuthConfig = {
  // auth: ["COMPANY"],
  routes: [
    {
      path: "/sign-in",
      exact: true,
      component: Loadable({
        loader: () => import("./login"),
        loading: () => <div>Loading...</div>,
      }),
    },
    {
      path: "/sign-up",
      exact: true,
      component: Loadable({
        loader: () => import("./register"),
        loading: () => <div>Loading...</div>,
      }),
    },
  ],
};
