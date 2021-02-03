import { Redirect } from "react-router-dom";
import Layout from "./../flare-layout";
import { mainConfig } from "../main/mainConfig";
import FlareUtils from "./../../@flare/FlareUtils";

const routesConfig = [...mainConfig];

console.log(routesConfig, "routesConfig");

const routes = [
  {
    component: Layout,
    routes: [
      ...FlareUtils.generateRoutesFromConfigs(routesConfig),
      {
        path: "/home",
        exact: true,
        component: () => <Redirect to="/" />,
      },
    ],
  },
];

export default routes;
