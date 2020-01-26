import React from "react";
import TypingContainer from "../containers/TypingContainer";
import Header from "../containers/Header";

const WelcomePage = () => {
  return (
    <>
      <Header />
      <TypingContainer
        heading={"Things I want to type:"}
        dataText={[
          "WELCOME TO MY WORLD",
          "THIS IS MY WEBSITE",
          "I LIKE FRONTEND PROGRAMMING",
        ]}
      />
    </>
  );
};

export default WelcomePage;
