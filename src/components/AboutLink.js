import React from "react";
import { Link } from "react-router-dom";

const AboutLink = props => {
  return (
    <Link to="/about" {...props}>
      {props.children}
    </Link>
  );
};

export default AboutLink;
