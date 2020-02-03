import React from "react";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Router from "./routers/Router";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <GlobalStyle backgroundImage />
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
