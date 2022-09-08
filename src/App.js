import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [productArray, setProductArray] = useState([
    { name: 'Jordan 1', price: 100, source: '' },
    { name: 'Yeezy Foam Runner', price: 100, source: '' },
    { name: 'Jordan 11', price: 100, source: '' },
    { name: 'Nike General Purpose Shoe', price: 100, source: '' },
    { name: 'Yeezy Slide', price: 100, source: '' },
    { name: 'Jordan 4', price: 100, source: '' },
    { name: 'Nike Kobe 6', price: 100, source: '' },
    { name: 'Yeezy Boost 350 v2', price: 100, source: '' },
  ]);

  const [cartArray, setCartArray] = useState([]);

  const addToCart = (e) => {
    let itemToAdd = findProduct(e.target.id);
    let alreadyInCart = inCart(itemToAdd);

    if (alreadyInCart === -1) {
      setCartArray((x) => [
        ...x,
        (itemToAdd = { ...itemToAdd, ['quantity']: 1 }),
      ]);
    } else {
      cartArray[alreadyInCart].quantity += 1;
    }
  };

  const findProduct = (searchName) => {
    const index = productArray.findIndex(
      (product) => product.name === searchName
    );
    return productArray[index];
  };

  const inCart = (product) => {
    const alreadyInCart = cartArray.findIndex(
      (item) => item.name === product.name
    );

    return alreadyInCart;
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop productArray={productArray} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartArray={cartArray} />} />
      </Routes>
    </Router>
  );
}

export default App;
