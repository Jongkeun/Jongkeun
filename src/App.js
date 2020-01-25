import React from "react";
import Typer from "./components/Typer";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header></header>
      <Typer
        heading={"Things I want to type:"}
        dataText={[
          "WELCOME TO MY WORLD",
          "THIS IS MY WEBSITE",
          "I LIKE FRONTEND PROGRAMMING",
        ]}
      />
    </div>
  );
}

export default App;
