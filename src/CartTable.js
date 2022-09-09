import React from 'react';
import { Link } from 'react-router-dom';
import CartTableCell from './CartTableCell';

function CartTable({ cartArray, updateQuantity }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartArray.map((item, index) => {
          return (
            <CartTableCell
              item={item}
              index={index}
              updateQuantity={updateQuantity}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CartTable;
