import React from "react";
import TypingContainer from "../containers/TypingContainer";
import HeaderContainer from "../containers/HeaderContainer";

const WelcomePage = () => {
  return (
    <>
      <HeaderContainer />
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
