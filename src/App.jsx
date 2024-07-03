import './App.css'

// import { useEffect } from 'react'

import ItemFunctions from './itemFunctions.js';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorePage from './components/StorePage.jsx';
import HomePage from './components/HomePage.jsx';
import CartPage from './components/CartPage.jsx';

function App() {


  const {items} = ItemFunctions();
  
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage items={items} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
