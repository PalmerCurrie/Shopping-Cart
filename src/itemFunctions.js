import { useState } from "react";


export default function itemFunctions() {
// const [cartItems, setCartItems] = useState([]);

const [items, setItems] = useState([
    {
      name: "Test Item 1",
      price: 1000,
      description: "Description for Test Item 1",
      imageURL: null,
    },
    {
      name: "Test Item 2",
      price: 2000,
      description: "Description for Test Item 2",
      imageURL: null,
    },
    {
      name: "Test Item 3",
      price: 3000,
      description: "Description for Test Item 3",
      imageURL: null,
    },
    {
      name: "Test Item 4",
      price: 4000,
      description: "Description for Test Item 4",
      imageURL: null,
    }
  ]);
    





  return {items, setItems};
//   , cartItems, setCartItems



}