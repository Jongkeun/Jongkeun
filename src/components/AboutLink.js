import React from "react";
import { Link } from "react-router-dom";

const AboutLink = ({ children }) => {
  return <Link to="/about">{children}</Link>;
};

export default AboutLink;
