import React from "react";
import styled from "styled-components";
import TypingContainer from "../containers/TypingContainer";
import ArrowButton from "../components/ArrowButton";

const Section = styled.section`
  display: block;
  height: 100vh;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  margin-left: -10px;
`;
const WelcomePage = () => {
  return (
    <Section>
      <TypingContainer />
      <Bottom>
        <ArrowButton />
      </Bottom>
    </Section>
  );
};

export default WelcomePage;
