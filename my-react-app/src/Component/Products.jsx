
import React from 'react';

function Products() {
  const productList = ['Product 1', 'Product 2', 'Product 3'];

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
