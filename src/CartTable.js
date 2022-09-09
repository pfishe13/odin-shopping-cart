import React from 'react';
import { Link } from 'react-router-dom';

function CartTable({ cartArray }) {
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
            <tr key={index}>
              <td>
                <h3>{item.name}</h3>
              </td>
              <td>
                <h4>{item.size}</h4>
              </td>
              <td>
                <h4>{item.quantity ? item.quantity : 1}</h4>
              </td>
              <td>
                <h4>
                  {item.quantity ? item.price * item.quantity : item.price}
                </h4>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CartTable;
