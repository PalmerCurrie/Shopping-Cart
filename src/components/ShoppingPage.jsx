/* eslint-disable react/prop-types */
import '../styles//ShoppingPage.css'
import ItemCard from './ItemCard';

function ShoppingPage({items}) {

  const renderItemCards = () => {
    return (
        <div className='item-container' id='item-container'>
            {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
        </div>
    )

  }


  
  return (
    <>
      <div className='shopping-page-container'>
        <div className='item-header'>
            <p>Items ({items.length})</p>
        </div>
            {renderItemCards()}
        </div>
    </>
  )
}

export default ShoppingPage