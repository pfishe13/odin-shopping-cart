import React from 'react';
import CartTableCell from './CartTableCell';

function CartTable({
  cartArray,
  updateQuantity,
  deleteFromCart,
  updateTotalPrice,
}) {
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
              key={index}
              item={item}
              //   index={index}
              updateQuantity={updateQuantity}
              deleteFromCart={deleteFromCart}
              updateTotalPrice={updateTotalPrice}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default CartTable;
