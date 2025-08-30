import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { BsMoonStarsFill } from 'react-icons/bs';
import { CartContext } from '../CartContext';
import { SearchContext } from '../SearchContext';
import './Header.css';

const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const cartItemCount = getCartCount();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleSearch = () => {
      console.log('Searching for:', searchQuery);
    };

    const timeoutId = setTimeout(handleSearch, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <header className="header-container">
      <nav className="main-navbar">
       
        <div className="logo"><Link to="/">Velourany<BsMoonStarsFill /></Link></div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
         
        <div className="user-icons container">

          <div className="search-bar">
           
          </div>
          <Link to="/profile"><FaUser /></Link>
          <Link to="/favorites"><FaHeart /></Link>
          <Link to="/cart" className="cart-wrapper">
            <FaShoppingCart />
            <span className="cart-count">{cartItemCount}</span>
          </Link>
        </div>
      </nav>
      <nav className="categories-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;