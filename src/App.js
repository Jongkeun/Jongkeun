import React from "react";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Router from "./routers/Router";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HashRouter>
        <HeaderContainer />
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
