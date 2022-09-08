import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import jordan1 from './images/jordan1.png';
import jordan4 from './images/jordan4.png';
import jordan11 from './images/jordan11.png';
import kobe6 from './images/kobe6.png';
import foamrunner from './images/foamrunner.png';
import yeezy350 from './images/yeezy350.png';
import nikegps from './images/nikegps.png';
import yeezyslide from './images/yeezyslide.png';

function App() {
  const [productArray, setProductArray] = useState([
    { name: 'Jordan 1', price: 100, source: jordan1 },
    { name: 'Yeezy Foam Runner', price: 100, source: foamrunner },
    { name: 'Jordan 11', price: 100, source: jordan11 },
    { name: 'Nike General Purpose Shoe', price: 100, source: nikegps },
    { name: 'Yeezy Slide', price: 100, source: yeezyslide },
    { name: 'Jordan 4', price: 100, source: jordan4 },
    { name: 'Nike Kobe 6', price: 100, source: kobe6 },
    { name: 'Yeezy Boost 350 v2', price: 100, source: yeezy350 },
  ]);

  const [cartArray, setCartArray] = useState([]);

  const addToCart = (e, quantityToAdd) => {
    let itemToAdd = findProduct(e.target.id);
    let alreadyInCart = inCart(itemToAdd);

    if (alreadyInCart === -1) {
      setCartArray((x) => [
        ...x,
        (itemToAdd = { ...itemToAdd, ['quantity']: quantityToAdd }),
      ]);
    } else {
      cartArray[alreadyInCart].quantity += quantityToAdd;
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
