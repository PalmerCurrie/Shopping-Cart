/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";


export default function itemFunctions() {
// const [cartItems, setCartItems] = useState([]);
    const NUMBER_OF_ITEMS = 10;

    const [items, setItems] = useState([
    //         {
    //             title: 'test product',
    //             price: 13.5,
    //             description: 'lorem ipsum set',
    //             image: 'https://i.pravatar.cc',
    //             category: 'electronic'
    //         }
  ]);


    const getItems = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products?limit=${NUMBER_OF_ITEMS}`);
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

// Loads items when componenet mounts
  useEffect(() => {
    getItems(); 
    }, []);
    



  return {items, getItems};
//   , cartItems, setCartItems



}