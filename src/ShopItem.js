import React, { useEffect, useState } from 'react';
import SizeWheel from './SizeWheel';

function ShopItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(10);

  const changeSize = (e) => {
    setSize(e.target.textContent);
    console.log('Current Size', size);
  };

  return (
    <div>
      <div key={product.name} className="product-card">
        <img
          alt={product.name}
          className="shop-product-image"
          src={product.source}
        ></img>
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <SizeWheel changeSize={changeSize} />
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>

        <div>
          <button
            id={product.name}
            onClick={(e) => {
              addToCart(e, quantity, size);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
