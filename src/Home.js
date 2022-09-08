import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main-container">
      <div className="left">
        <h1>Laces</h1>
      </div>
      <div className="right">
        <h3>Shop the latest sneakers from the top brands</h3>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
