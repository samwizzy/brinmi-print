import { Redirect } from "react-router-dom";
import Layout from "../brinmi-layout";
import { mainConfig } from "../main/mainConfig";
import BrinmiUtils from "../../@brinmi/BrinmiUtils";

const routesConfig = [...mainConfig];

console.log(routesConfig, "routesConfig");

const routes = [
  {
    component: Layout,
    routes: [
      ...BrinmiUtils.generateRoutesFromConfigs(routesConfig),
      {
        path: "/home",
        exact: true,
        component: () => <Redirect to="/" />,
      },
    ],
  },
];

export default routes;
