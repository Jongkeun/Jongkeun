import React from "react";
import { HashRouter, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import About from "../pages/About";

const Router = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true}>
        <WelcomePage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </HashRouter>
  );
};

export default Router;
