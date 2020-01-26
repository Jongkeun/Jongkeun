import React from "react";
import { HashRouter, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true}>
        <WelcomePage />
      </Route>
    </HashRouter>
  );
};

export default Router;
