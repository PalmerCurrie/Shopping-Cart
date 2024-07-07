/* eslint-disable react/prop-types */
import '../styles//ItemCard.css'

import PropTypes from 'prop-types';

function ItemCard({item, addItemToCart}) {

  const handleClick = () => {
    addItemToCart(item);
  };



  return (
    <div className='item-card' onClick={handleClick}>
      <div className='item-image'>
        {item.image ? (
          <img src={item.image} alt={`${item.title} - image`} />
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>
      <div className='item-details'>
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
}

// PropType checking to ensure item states are the right type
ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    catergory: PropTypes.string,
  }).isRequired,
};



export default ItemCard