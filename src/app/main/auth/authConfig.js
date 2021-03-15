import loadable from "@loadable/component";
// import { Loader } from "@brinmi";

export const AuthConfig = {
  // auth: ["COMPANY"],
  routes: [
    {
      path: "/sign-in",
      exact: true,
      component: loadable(() => import("./login")),
    },
    {
      path: "/sign-up",
      exact: true,
      component: loadable(() => import("./register")),
    },
  ],
};
