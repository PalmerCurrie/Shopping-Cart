import './App.css'

// import { useState, useEffect } from 'react'
import ItemCard from './components/ItemCard'
// import itemFunctions from './itemFunctions'


function App() {

  // const {items, setItems, cartItems, setCartItems} = itemFunctions();


  const item1 = {
    name: "test Item",
    price: 5000,
    description: "testing",
    imageURL:  null,} 

  
  return (
    <>
      <div>
        <ItemCard item={item1} />
      </div>
    </>
  )
}

export default App
