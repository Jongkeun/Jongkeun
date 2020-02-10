import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import LayoutContainer from "../containers/LayoutContainer";

const Bottom = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  margin-left: -10px;
`;

const HeadingContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  -webkit-font-smoothing: antialiased;
  color: #fff;
  display: inline-grid;
  font-family: "Playfair Display";
  font-size: 7em;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 110px;
  margin: auto;
  @media screen and (max-width: 800px) {
    font-size: 5em;
    line-height: 1em;
  }
`;

const WelcomePage = () => {
  const history = useHistory();
  return (
    <LayoutContainer welcome>
      <HeadingContainer>
        <Heading>
          <span>The more Humble </span>
          <span>You are, </span>
          <span>The Faster </span>
          <span>You will Improve</span>
        </Heading>
      </HeadingContainer>
      <Bottom>
        <ArrowButton onClick={() => history.push("/about")} />
      </Bottom>
    </LayoutContainer>
  );
};

export default WelcomePage;
