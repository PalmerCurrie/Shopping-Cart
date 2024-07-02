/* eslint-disable react/prop-types */
import '../styles//ItemCard.css'

import PropTypes from 'prop-types';

function ItemCard({item}) {

  return (
    <div className='item-card'>
      <div className='item-image'>
        {item.imageURL ? (
          <img src={item.imageURL} alt={`${item.name} - image`} />
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>
      <div className='item-details'>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

// PropType checking to ensure item states are the right type
ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
  }).isRequired,
};

ItemCard.defaultProps = {
  item: {
    name: '',
    price: 0,
    description: '',
    imageURL: null,
  },
};



export default ItemCard