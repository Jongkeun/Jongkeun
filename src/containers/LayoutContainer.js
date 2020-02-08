import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background-image: ${props =>
    props.welcome ? `url("./images/code_bg.png")` : "none"};
  background-size: cover;
`;

const Layout = ({ children, welcome }) => {
  return (
    <Section welcome={welcome}>
      <Header />
      {children}
    </Section>
  );
};

export default Layout;
