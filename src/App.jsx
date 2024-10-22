import './App.css'

import { useEffect, useState } from 'react'
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StorePage from './components/StorePage/StorePage.jsx';
import HomePage from './components/HomePage.jsx';
import CartPage from './components/CartPage/CartPage.jsx';

function App() {

  const NUMBER_OF_ITEMS = 14; // Number of Items on Initial Render

  const [items, setItems] = useState([ ]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(prevCartItems => {
      const itemExists = prevCartItems.some(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevCartItems; 
      } else {
        const updatedItems = [...cartItems, { ...item, quantity: 1 }];
        return updatedItems;
    }
    });
  };

  const getItems = async () => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products?limit=${NUMBER_OF_ITEMS}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setItems(data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const getItemsInCategory = async (filterCategory) => {
  if (!filterCategory) {
    getItems;
  }
  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${filterCategory}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    setItems(data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading is set to false on error
  }
};

  // Fetch all items initially
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      await getItems();
    };

    fetchItems();
  }, []);

  // Fetch items by category when category changes
  useEffect(() => {
    const fetchItemsByCategory = async () => {
      if (category) {
        setLoading(true);
        await getItemsInCategory(category);
      } else {
        setLoading(true);
        await getItems();
      }
    };

    fetchItemsByCategory();
  }, [category]);


  
  return (
    <Router>
      <div className="app-container">
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage 
                                          items={items} 
                                          setCategory={setCategory} 
                                          loading={loading} 
                                          cartItems={cartItems} 
                                          addItemToCart={addItemToCart}/>} />
          <Route path="/cart" element={<CartPage 
                                          cartItems={cartItems}
                                          setCartItems={setCartItems}
                                          loading={loading}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
