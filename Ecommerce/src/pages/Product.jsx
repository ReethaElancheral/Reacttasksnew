import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">₹{product.price}</p>
            <a href={`/product/${product.id}`}><button>View Details</button></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
