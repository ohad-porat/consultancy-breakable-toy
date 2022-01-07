// eslint-disable-next-line import/order
import { hot } from "react-hot-loader/root";
// eslint-disable-next-line import/order
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./layout/TopBar";
import "../style/main.pcss";

const App = () => (
  <Router>
    <TopBar />
    <Switch>
      <Route exact path="/">
        <h2>Hello from react</h2>
      </Route>
    </Switch>
  </Router>
);

// eslint-disable-next-line import/no-default-export
export default hot(App);
