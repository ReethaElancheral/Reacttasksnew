import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Home from './pages/Home';
import Products from './pages/Product';
import ProductDetail from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import withAuthProtection from './hoc/withAuthProtection';

function App() {
const [showCart, setShowCart] = useState(false);

  return (
    <>
    <BrowserRouter>
   
      <Navbar onCartClick={() => setShowCart(true)} />
      {showCart && <CartSidebar onClose={() => setShowCart(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={withAuthProtection(<Checkout />)} />
        <Route path="/admin" element={withAuthProtection(<AdminPanel />)} />
      </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
