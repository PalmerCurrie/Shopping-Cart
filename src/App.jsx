import './App.css'

// import { useEffect } from 'react'
// useState, 

import ShoppingPage from './components/ShoppingPage.jsx';
import itemFunctions from './itemFunctions'


function App() {


  const {items} = itemFunctions();
  // setItems, cartItems, setCartItems
  console.log(items);

  
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
