import React from "react";
import styled from "styled-components";
import TypingContainer from "../containers/TypingContainer";
import ArrowButton from "../components/ArrowButton";

const Section = styled.section``;

const WelcomePage = () => {
  return (
    <Section>
      <TypingContainer />
      <ArrowButton />
    </Section>
  );
};

export default WelcomePage;
