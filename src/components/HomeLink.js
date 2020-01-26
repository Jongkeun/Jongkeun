import React from "react";
import { Link } from "react-router-dom";

const HomeLink = ({ children }) => {
  return <Link to="/">{children}</Link>;
};

export default HomeLink;
