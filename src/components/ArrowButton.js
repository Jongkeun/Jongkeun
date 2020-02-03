import React from "react";
import styled from "styled-components";

const ArrowDiv = styled.div`
  width: 20px;
  height: 20px;
  font-size: 3rem;
  color: white;
  background-color: transparent;
  transform: translate(-50%, -50%) rotate(-90deg);
  bottom: 0;
  cursor: pointer;
`;
const ArrowButton = props => {
  return <ArrowDiv {...props}>{"<"}</ArrowDiv>;
};

export default ArrowButton;
