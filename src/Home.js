import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="top">
        <h1 className="home-page-title">Laces</h1>
      </div>
      <div className="bottom">
        <h3>Shop the latest sneakers from the top brands</h3>
        <Link to="/shop">
          <button className="shop-now">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
