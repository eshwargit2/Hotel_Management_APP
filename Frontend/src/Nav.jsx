import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header className="site-header">
      <nav>
        <a href="/" className="logo">
          RHS
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#add">Add Hotel</a>
          </li>
          <li>
            <a href="#delete">Delete Hotel</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
