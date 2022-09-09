import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartTableCell({ item, index, updateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {});
  return (
    <tr key={index}>
      <td>
        <h3>{item.name}</h3>
      </td>
      <td>
        <h4>{item.size}</h4>
      </td>
      <td>
        <button
          id={item.name}
          onClick={(e) => {
            updateQuantity(e, quantity - 1, item.size);
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <h4>{quantity ? quantity : 1}</h4>
        <button
          id={item.name}
          onClick={(e) => {
            updateQuantity(e, quantity + 1, item.size);
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </td>
      <td>
        <h4>{quantity ? item.price * quantity : item.price}</h4>
      </td>
    </tr>
  );
}

export default CartTableCell;
