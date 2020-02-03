import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import TypingContainer from "../containers/TypingContainer";
import ArrowButton from "../components/ArrowButton";

const Section = styled.section`
  display: block;
  height: 80vh;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  margin-left: -10px;
`;
const WelcomePage = () => {
  const history = useHistory();
  return (
    <Section>
      <TypingContainer />
      <Bottom>
        <ArrowButton onClick={() => history.push("/about")} />
      </Bottom>
    </Section>
  );
};

export default WelcomePage;
