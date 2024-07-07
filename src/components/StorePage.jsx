/* eslint-disable react/prop-types */
import '../styles/StorePage.css'
import ItemContainer from './ItemContainer'
import Sidebar from './Sidebar'

function StorePage({items, setCategory, loading, cartItems, addItemToCart}) {




  return (
    <>
      <div className='app-content'>
          <Sidebar setCategory={setCategory} />
          <ItemContainer 
            items={items} 
            loading={loading} 
            cartItems={cartItems}
            addItemToCart={addItemToCart}/>
        </div>
    </>
  )
}

export default StorePage