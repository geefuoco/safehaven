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
        <div className="links-wrapper">
          <div className="text-link">
            <Link to="/articles">Articles</Link>
          </div>
          <div className="text-link">
            <a href="https://github.com/geefuoco">Github</a>
          </div>
          <div className="text-link">
            <a href="https://geefuoco.github.io">Portfolio</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
