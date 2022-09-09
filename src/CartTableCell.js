import React, { useEffect, useState } from 'react';

function CartTableCell({
  item,
  index,
  updateQuantity,
  updateTotalPrice,
  deleteFromCart,
}) {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item, quantity]);

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
            updateTotalPrice();
          }}
        >
          -
        </button>
        <span>
          <h4>{quantity}</h4>
        </span>
        <button
          id={item.name}
          onClick={(e) => {
            updateQuantity(e, quantity + 1, item.size);
            setQuantity(quantity + 1);
            updateTotalPrice();
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
