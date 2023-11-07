import React from "react";
import { Link } from "react-router-dom";

const LangLink = ({ link, img, text }) => {
  return (
    <Link className="nav-link" to={link}>
      <img src={img} alt="Coding Language" />
      <span>{text}</span>
    </Link>
  );
};

export default LangLink;
