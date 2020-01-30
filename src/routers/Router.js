import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import About from "../pages/About";

const Router = () => {
  return (
    <React.Fragment>
      <Route path="/" exact={true}>
        <WelcomePage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </React.Fragment>
  );
};

export default Router;
