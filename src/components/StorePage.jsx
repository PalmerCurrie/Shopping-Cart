/* eslint-disable react/prop-types */
import '../styles/StorePage.css'
import ItemContainer from './ItemContainer'
import Sidebar from './Sidebar'

function StorePage({items}) {


  return (
    <>
      <div className='app-content'>
          <Sidebar />
          <ItemContainer items={items}/>
        </div>
    </>
  )
}

export default StorePage