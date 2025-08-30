
import React from 'react';
import './ProductFilters.css';

const ProductFilters = ({ onPriceChange }) => {
  return (
    <div className="product-filters">
      <h2>Filter by Price</h2>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="price-filter"
            value="all"
            defaultChecked
            onChange={() => onPriceChange('all')}
          />
          All Products
        </label>
        <label>
          <input
            type="radio"
            name="price-filter"
            value="low"
            onChange={() => onPriceChange('low')}
          />
          $0 - $50
        </label>
        <label>
          <input
            type="radio"
            name="price-filter"
            value="high"
            onChange={() => onPriceChange('high')}
          />
          $50+
        </label>
      </div>
    </div>
  );
};

export default ProductFilters;