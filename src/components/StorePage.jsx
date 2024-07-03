/* eslint-disable react/prop-types */
import '../styles/StorePage.css'
import ItemContainer from './ItemContainer'
import Sidebar from './Sidebar'

function StorePage({items, setCategory, loading}) {




  return (
    <>
      <div className='app-content'>
          <Sidebar setCategory={setCategory} />
          <ItemContainer items={items} loading={loading}/>
        </div>
    </>
  )
}

export default StorePage