import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <h1>Khana's</h1>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/foods">
          Users
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Header;
