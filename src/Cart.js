import React from 'react';
import { Link } from 'react-router-dom';
import CartTable from './CartTable';

function Cart({ cartArray }) {
  const getCartItemLabel = () => {
    if (cartArray.length === 0) return 'Empty';
    if (cartArray.length === 1) return '1 item';
    return `${cartArray.length} items`;
  };

  return (
    <div className="main-container">
      <h1>Cart ({getCartItemLabel()})</h1>
      {cartArray.length === 0 && (
        <div>
          <h2>Your shopping cart is currently empty.</h2>
          <Link to="/shop">
            <button>Shop Here</button>
          </Link>
        </div>
      )}
      {cartArray.length > 0 && (
        <div>
          <CartTable cartArray={cartArray} />
        </div>
      )}
    </div>
  );
}

export default Cart;
