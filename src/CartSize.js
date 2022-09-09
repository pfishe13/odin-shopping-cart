import React, { useEffect, useState } from 'react';

function CartSize({ cartArray }) {
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    getCartSize();
  });

  function getCartSize() {
    let total = 0;
    cartArray.forEach((element) => {
      total = total + element.quantity;
    });
    setCartSize(total);
  }

  return <>{cartSize}</>;
}

export default CartSize;
