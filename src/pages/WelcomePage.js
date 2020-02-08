import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ArrowButton from "../components/ArrowButton";
import LayoutContainer from "../containers/LayoutContainer";

const Bottom = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 50%;
  margin-left: -10px;
`;
const WelcomePage = () => {
  const history = useHistory();
  return (
    <LayoutContainer welcome>
      <Bottom>
        <ArrowButton onClick={() => history.push("/about")} />
      </Bottom>
    </LayoutContainer>
  );
};

export default WelcomePage;
