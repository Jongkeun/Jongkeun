import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import AboutPage from "../pages/AboutPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <WelcomePage />
      </Route>
    </Switch>
  );
};

export default Router;
