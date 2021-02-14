import React from "react";
import "./brinmi-config/axiosConfig";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import routes from "./brinmi-config/routeConfig";
import history from "./history";
import store from "./store/index";
import { BrinmiTheme } from "../@brinmi";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <BrinmiTheme>
            <Switch>{renderRoutes(routes)}</Switch>
          </BrinmiTheme>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
