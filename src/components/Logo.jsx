import React from "react";
import logo from "@/assets/images/logo2.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" className="w-1/2" />
      </Link>
    </>
  );
}

export default Logo;
