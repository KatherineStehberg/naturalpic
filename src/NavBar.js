import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> | <Link to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>Favoritos</Link>
    </nav>
  );
};

export default Navbar;
