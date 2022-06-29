import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo">
          <Link to={"/"}>
            <h1 className="main-title">Safe Haven</h1>
          </Link>
        </div>
        <div className="text-link">
          <Link to="/articles">Articles</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
