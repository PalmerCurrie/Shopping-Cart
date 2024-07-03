/* eslint-disable react/prop-types */
import '../styles/StorePage.css'
import ShoppingPage from './ShoppingPage'

function StorePage({items}) {


  
  return (
    <>
      <div className='app-content'>
          <div className='sidebar'> SIDEBAR </div>
          <ShoppingPage items={items}/>
        </div>
    </>
  )
}

export default StorePage