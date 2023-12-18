import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog';
import ChainsawDetail from './components/ChainsawDetail/chainsawDetail';
import Cart from './components/Cart/cart';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog searchTerm={searchTerm} />} />
        <Route path="/chainsaw/:id" element={<ChainsawDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
