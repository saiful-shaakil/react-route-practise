import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <h1>Khana's</h1>
      </div>
      <div className="links">
        <CustomLink className="link" to="/">
          Home
        </CustomLink>
        <CustomLink className="link" to="/users">
          Users
        </CustomLink>
        <CustomLink className="link" to="/posts">
          Posts
        </CustomLink>
        <CustomLink className="link" to="/about">
          About Us
        </CustomLink>
      </div>
    </nav>
  );
};

export default Header;
