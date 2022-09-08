import React, { useEffect, useState } from 'react';

function Cart({ cartArray }) {
  return (
    <div className="main-container">
      <h1>Cart</h1>
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
