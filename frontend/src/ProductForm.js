import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductForm({ currentProduct, resetCurrent }) {
  const [product, setProduct] = useState({ name: '', price: '' });
  
  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [currentProduct]);

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (product._id) {
      await axios.put(`http://localhost:5000/api/products/${product._id}`, {
        name: product.name,
        price: product.price,
      });
      alert("Product Updated!");
    } else {
      await axios.post('http://localhost:5000/api/products', product);
      alert("Product Created!");
    }
    setProduct({ name: '', price: '' }); 
    resetCurrent();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Product Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{product._id ? 'Update' : 'Add'}</button>
    </form>
  );
}
export default ProductForm;
