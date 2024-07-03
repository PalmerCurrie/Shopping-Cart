/* eslint-disable react/prop-types */
import '../styles/ItemContainer.css';
import ItemCard from './ItemCard';

function ItemContainer({ items }) {
  // No need to use renderItemCards as a separate function, you can directly use JSX in return
  return (
    <div className='shopping-page-container'>
      <div className='item-header'>
        <p>Items ({items.length})</p>
      </div>
      <div className='item-container' id='item-container'>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemContainer;