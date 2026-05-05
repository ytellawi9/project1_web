import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__logo">
        Cine<span>Vault</span>
      </div>

      <nav>
        <ul className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={closeMenu}>Explore</NavLink></li>
          <li><NavLink to="/login" onClick={closeMenu}>Login</NavLink></li>
          <li><NavLink to="/register" onClick={closeMenu}>Register</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        </ul>
      </nav>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
