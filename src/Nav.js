import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartSize from './CartSize';

function Nav({ cartArray }) {
  return (
    <nav>
      <Link to="/">
        <h3>Laces</h3>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>
            Cart (<CartSize cartArray={cartArray} />)
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
