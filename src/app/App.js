import React from "react";
import "./brinmi-config/axiosConfig";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "./auth/Auth";
import { renderRoutes } from "react-router-config";
import routes from "./brinmi-config/routeConfig";
import history from "./history";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrinmiTheme } from "../@brinmi";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Auth>
            <PersistGate loading={null} persistor={persistor}>
              <BrinmiTheme>
                <Switch>{renderRoutes(routes)}</Switch>
              </BrinmiTheme>
            </PersistGate>
          </Auth>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
