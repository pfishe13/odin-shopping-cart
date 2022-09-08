import React, { useEffect, useState } from 'react';

function Cart({ cartArray }) {
  const getCartItemLabel = () => {
    if (cartArray.length === 0) return 'Empty';
    if (cartArray.length === 1) return '1 item';
    return `${cartArray.length} items`;
  };
  return (
    <div className="main-container">
      <h1>Cart ({getCartItemLabel()})</h1>
      {cartArray.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <h4>Quantity: {item.quantity ? item.quantity : 1}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
