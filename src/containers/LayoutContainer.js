import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  margin: 0 2em;
`;

const Layout = ({ children }) => {
  return (
    <Section>
      <Header />
      {children}
    </Section>
  );
};

export default Layout;
