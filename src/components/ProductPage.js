// src/components/ProductPage.js
import React, { useState } from 'react';
import products from '../data.js'; // Your mock data
import ProductCard from './ProductCard.js';
import ProductFilters from './ProductFilters.js'; // Import the new component
import './ProductGrid.css'; // We'll keep the grid styling here

const ProductPage = () => {
  const [filter, setFilter] = useState('all');

  const handlePriceChange = (value) => {
    setFilter(value);
  };

  const getFilteredProducts = () => {
    if (filter === 'low') {
      return products.filter(product => product.price <= 50);
    } else if (filter === 'high') {
      return products.filter(product => product.price > 50);
    }
    return products;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <ProductFilters onPriceChange={handlePriceChange} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;