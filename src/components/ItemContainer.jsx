/* eslint-disable react/prop-types */
import '../styles/ItemContainer.css';
import ItemCard from './ItemCard';
import Spinner from './Spinner';

function ItemContainer({ items, loading, cartItems, setCartItems }) {

  if (loading) {
    return <Spinner />; // Show spinner if items are still loading
  }

  const addItemToCart = (itemToAdd) => {
    // Implement set like structure to maintain property of no duplicates.
      const newCart = [...cartItems, itemToAdd];
      setCartItems(newCart);
  };



  return (
    <div className='shopping-page-container'>
      <div className='item-header'>
        <p>Items ({items.length})</p>
      </div>
      <div className='item-container' id='item-container'>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} onAddToCart={addItemToCart} />
        ))}
      </div>
    </div>
  );
}

export default ItemContainer;