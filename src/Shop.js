import React, { useEffect, useState } from 'react';

function Shop({ productArray, addToCart }) {
  return (
    <div className="main-container">
      <h1>Shop</h1>
      <div>
        {productArray.map((product) => {
          return (
            <div key={product.name}>
              <h3>{product.name}</h3>
              <h4>{product.price}</h4>
              <button id={product.name} onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
