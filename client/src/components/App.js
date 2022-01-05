import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopBar from "./layout/TopBar";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <h2>Hello from react</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
