import React from "react";
import { Link } from "react-router-dom";

const HomeLink = props => {
  return (
    <Link to="/" {...props}>
      {props.children}
    </Link>
  );
};

export default HomeLink;
