import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className={isMenuOpen ? "menu-open" : ""}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/RHS Hotels Management Logo.png" alt="" />
          <span><strong>RHS</strong><small>Hotels Management</small></span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul id="site-navigation">
          <li className="drawer-close-item">
            <button
              type="button"
              className="drawer-close"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <span />
              <span />
            </button>
          </li>
          <li>
            <Link className="active" to="/" onClick={closeMenu}><span>⌂</span>Home</Link>
          </li>
          <li>
            <Link to="/add" onClick={closeMenu}><span>✚</span>Add Hotel</Link>
          </li>
          <li>
            <Link to="/update" onClick={closeMenu}><span>✎</span>Update Hotel</Link>
          </li>
          <li>
            <Link to="/update" onClick={closeMenu}><span>▣</span>Delete Hotel</Link>
          </li>
        </ul>
      </nav>
      {isMenuOpen ? (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
};

export default Nav;
