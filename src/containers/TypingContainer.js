import React from "react";
import Typing from "../components/Typing";

class TypingContainer extends React.Component {
  render() {
    return (
      <Typing
        heading={"JONGKEUN:~$"}
        dataText={[
          "WELCOME TO MY WORLD",
          "THIS IS MY WEBSITE",
          "I LIKE FRONTEND PROGRAMMING",
        ]}
      />
    );
  }
}

export default TypingContainer;
