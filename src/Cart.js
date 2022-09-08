import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          {cartArray.map((item) => {
            return (
              <div key={item}>
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <h4>Size: {item.size}</h4>
                <h4>Quantity: {item.quantity ? item.quantity : 1}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
