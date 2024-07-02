/* eslint-disable react/prop-types */
import '../styles//ShoppingPage.css'
import ItemCard from './ItemCard';

function ShoppingPage({items}) {
  console.log("loading Shopping Page");

  const renderItemCards = () => {
    console.log("rendering");
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
        <div className='header'> Placeholder header</div>
            {renderItemCards()}
        </div>
    </>
  )
}

export default ShoppingPage