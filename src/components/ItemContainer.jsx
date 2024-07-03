/* eslint-disable react/prop-types */
import '../styles/ItemContainer.css';
import ItemCard from './ItemCard';
import Spinner from './Spinner';

function ItemContainer({ items, loading }) {

  if (loading) {
    return <Spinner />; // Show spinner if items are still loading
  }
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