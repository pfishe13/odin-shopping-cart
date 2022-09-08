import React, { useEffect, useState } from 'react';

function ShopItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div key={product.name} className="product-card">
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>

        <button
          id={product.name}
          onClick={(e) => {
            addToCart(e, quantity);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
