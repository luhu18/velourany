import React, { useState, useContext } from 'react';
import products from '../data.js';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { SearchContext } from '../SearchContext';
import './ProductGrid.css';

const ProductPage = () => {
  const [priceFilter, setPriceFilter] = useState('all');
  const { searchQuery } = useContext(SearchContext);

  const handlePriceChange = (value) => {
    setPriceFilter(value);
  };

  const getFilteredProducts = () => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceFilter === 'low') {
      filtered = filtered.filter(product => product.price <= 50);
    } else if (priceFilter === 'high') {
      filtered = filtered.filter(product => product.price > 50);
    }
    
    return filtered;
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