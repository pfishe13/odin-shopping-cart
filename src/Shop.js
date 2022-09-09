import React, { useEffect, useState } from 'react';
import ShopItem from './ShopItem';

function Shop({ productArray, addToCart }) {
  return (
    <div className="main-container">
      <h1>Shop</h1>
      <div className="main-product-grid">
        {productArray.map((product) => {
          return (
            <ShopItem
              key={product.name}
              product={product}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
