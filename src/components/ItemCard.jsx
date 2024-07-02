/* eslint-disable react/prop-types */
// import './Item.css'

import PropTypes from 'prop-types';

function ItemCard({item}) {


// PropType checking to ensure item states are the right type
  item.PropTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    imageURL: PropTypes.string,
  }
  item.defaultProps = {
    item: {
      name: "",
      price: 0,
      description: "",
      imageURL: null,
    },
  };
  

  
  return (
    <>
      <div>
        {item.name}
        {item.price}
      </div>
    </>
  )
}

export default ItemCard