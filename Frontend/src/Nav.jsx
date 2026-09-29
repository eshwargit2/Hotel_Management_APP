import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="site-header">
      <nav>
        <Link to="/" className="logo">
          RHS
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Hotel</Link>
          </li>
          <li>
            <a href="/#update">Update Hotel</a>
          </li>
          <li>
            <a href="/#delete">Delete Hotel</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
