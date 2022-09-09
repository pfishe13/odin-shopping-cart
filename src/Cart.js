import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartSize from './CartSize';
import CartTable from './CartTable';

function Cart({ cartArray, updateQuantity, deleteFromCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalPrice();
  });

  const updateTotalPrice = () => {
    let total = 0;
    cartArray.forEach((element) => {
      total = total + element.quantity * element.price;
    });
    setTotalPrice(total);
  };

  return (
    <div className="main-container">
      <h1>
        Cart (<CartSize cartArray={cartArray} />)
      </h1>
      {cartArray.length === 0 && (
        <div>
          <h2>Your shopping cart is currently empty.</h2>
          <Link to="/shop">
            <button>Shop Here</button>
          </Link>
        </div>
      )}
      {cartArray.length > 0 && (
        <>
          <div className="cart-table-container">
            <CartTable
              cartArray={cartArray}
              updateQuantity={updateQuantity}
              deleteFromCart={deleteFromCart}
              updateTotalPrice={updateTotalPrice}
            />
          </div>
          <div>
            <h2>Total:{totalPrice}</h2>
          </div>
          <button>Check out</button>
        </>
      )}
    </div>
  );
}

export default Cart;
