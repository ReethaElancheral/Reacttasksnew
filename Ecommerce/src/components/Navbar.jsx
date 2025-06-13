import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onCartClick }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/admin">Admin</Link>
      <button onClick={onCartClick}>Cart</button>
    </nav>
  );
}

export default Navbar;
