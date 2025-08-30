import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductPage from './components/ProductPage';
import SaleBanners from './components/SaleBanners';
import Footer from './components/Footer';
import AboutPage from './pages/About.js';
import Magazine from './components/Magazine';
import ContactPage from './pages/Contact.js';
import CheckoutPage from './components/CheckoutPage';
import CartPage from './components/CartPage';
import { CartProvider } from './CartContext.js';
import './App.css';
import products from './data.js';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <SaleBanners />
                    <ProductPage products={products} />
                    <Magazine />
                  </>
                }
              />
              <Route path="/products" element={<ProductPage products={products} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
           <Footer />
        </div>
      </CartProvider>
    </Router>
   
  );
}

export default App;