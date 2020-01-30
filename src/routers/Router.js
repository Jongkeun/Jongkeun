import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import AboutPage from "../pages/AboutPage";

const Router = () => {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
    </React.Fragment>
  );
};

export default Router;
