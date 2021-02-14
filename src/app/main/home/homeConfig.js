import Home from ".";

export const HomeConfig = {
  // auth: ["COMPANY"],
  routes: [
    {
      path: "/",
      exact: true,
      component: Home,
    },
  ],
};
