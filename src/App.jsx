import './App.css'

// import { useEffect } from 'react'
// useState, 

import ShoppingPage from './components/ShoppingPage.jsx';
import ItemFunctions from './itemFunctions.js';

function App() {


  const {items} = ItemFunctions();
  // setItems, cartItems, setCartItems
  console.log(items[0]);

  
  return (
    <>
      <div className='app-container'>
        <div className='header'> HEADER </div>
        <div className='app-content'>
          <div className='sidebar'> SIDEBAR </div>
          <ShoppingPage items={items}/>
        </div>

      </div>
    </>
  )
}

export default App
