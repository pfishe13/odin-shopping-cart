import React, { useState } from 'react';
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
  const [productArray] = useState([
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

  const updateCart = (e, quantityToAdd, sizeToAdd) => {
    let itemToAdd = findProduct(e.target.id);
    // Get index of element in cartArray
    let alreadyInCart = inCart(itemToAdd, sizeToAdd);

    if (alreadyInCart === null) {
      setCartArray((x) => [
        ...x,
        (itemToAdd = {
          ...itemToAdd,
          quantity: quantityToAdd,
          size: sizeToAdd,
        }),
      ]);
    } else {
      alreadyInCart.quantity += quantityToAdd;
      setCartArray([...cartArray]);
    }
  };

  const updateQuantity = (e, quantityToChangeTo, sizeToAdd) => {
    let itemToAdd = findProduct(e.target.id);
    // Get index of element in cartArray
    let alreadyInCart = inCart(itemToAdd, sizeToAdd);

    if (quantityToChangeTo === 0) {
      deleteFromCart(alreadyInCart);
    } else {
      alreadyInCart.quantity = quantityToChangeTo;
    }
  };

  const deleteFromCart = (itemToDelete) => {
    const newCartArray = cartArray.filter((item) => item !== itemToDelete);
    setCartArray([...newCartArray]);
  };

  const findProduct = (searchName) => {
    const index = productArray.findIndex(
      (product) => product.name === searchName
    );
    return productArray[index];
  };

  const inCart = (product, sizeToAdd) => {
    const indexes = [];
    for (let i = 0; i < cartArray.length; i += 1) {
      if (cartArray[i].name === product.name) {
        indexes.push(cartArray[i]);
      }
    }

    for (let i = 0; i < indexes.length; i += 1) {
      if (indexes[i].size === sizeToAdd) {
        return indexes[i];
      }
    }
    return null;
  };

  return (
    <Router basename="/odin-shopping-cart">
      <Nav cartArray={cartArray} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop productArray={productArray} updateCart={updateCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartArray={cartArray}
              updateQuantity={updateQuantity}
              deleteFromCart={deleteFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
