import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>Nav</nav>
      <Link to="/user/login">Login</Link>
    </header>
  );
};

export default Navbar;
