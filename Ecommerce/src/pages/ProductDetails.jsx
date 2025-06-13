import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api';
import { CartContext } from './CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container product-detail">
      <img src={product.image} alt={product.title} />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button onClick={() => addToCart(product)}>Add to Cart</button> 
      </div>
    </div>
  );
}

export default ProductDetail;
