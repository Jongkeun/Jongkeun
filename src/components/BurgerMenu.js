import React, { useState } from "react";
import styled from "styled-components";
import AboutLink from "./AboutLink";

const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open
          ? "rotate(45deg) translateX(20px) translateY(-20px)"
          : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open
          ? "rotate(-45deg) translateX(20px) translateY(20px)"
          : "rotate(0)"};
    }
  }
`;

const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <AboutLink onClick={() => setOpen(!open)}>
        <span role="img" aria-label="about us">
          💁🏻‍♂️
        </span>
        About Me
      </AboutLink>
      <a href="/">
        <span role="img" aria-label="price">
          💸
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          📩
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2em;
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Container>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default BurgerMenu;
