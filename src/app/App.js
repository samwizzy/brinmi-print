import React from "react";
import "./flare-config/axiosConfig";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import routes from "./flare-config/routeConfig";
import history from "./history";
import store from "./store/index";
import { FlareTheme } from "./../@flare";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <FlareTheme>
            <Switch>{renderRoutes(routes)}</Switch>
          </FlareTheme>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
