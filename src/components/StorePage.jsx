/* eslint-disable react/prop-types */
import '../styles/StorePage.css'
import ItemContainer from './ItemContainer'
import Sidebar from './Sidebar'

function StorePage({items, setCategory, loading, cartItems, setCartItems}) {




  return (
    <>
      <div className='app-content'>
          <Sidebar setCategory={setCategory} />
          <ItemContainer 
            items={items} 
            loading={loading} 
            cartItems={cartItems}
            setCartItems={setCartItems}/>
        </div>
    </>
  )
}

export default StorePage