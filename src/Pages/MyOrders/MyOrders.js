import React, { useState } from 'react'
import './MyOrders.css'
import foot from '../../Images/Bitmap.png';
import bell from '../../Images/menutop copy.png';
import Header from '../../Components/MyStoreComponents/Header/Header';
import { BsCaretDownFill } from "react-icons/bs";
import Sort from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import Filter from '../../Components/MyStoreComponents/Filter/Filter';
import AllImages from '../../Assets/AllImages';
import ActiveOrder from '../../Components/MyOrderComponents/ActiveOrder/ActiveOrder';
import PreviousOrders from '../../Components/MyOrderComponents/PreviousOrders/PreviousOrders';

const MyOrders = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [activebtn , setActivebtn] = useState('active')

  return (
    <div className='MyOrders'>
      {/* <header>
        <h2>My order</h2>
        <img height='50px' src={bell} alt='' />
      </header> */}
      <Header name={"MyOrders"} />
      <div className='heading'>
        <span className='h-left'>
          <h4 className={ ` ${activebtn === 'active' ? 'ActiveOrderclass' : ''} h-left-1 `}
          onClick={() => setActivebtn('active')}
          >Active Orders</h4>
          <h4 className= {`${activebtn === 'activeNo' ? 'ActiveOrderclass' : ''} h-left-2 `}
          onClick={() => setActivebtn('activeNo')}
          >Previous Orders</h4>
        </span>
        <div className='h-right'>
          <input className='h-right-input' type='Search' placeholder='Search' />
          <button onClick={() => setFilter(true)} className='Filter-btn'>Filter <BsCaretDownFill /> </button>
          <Filter filter={filter} onclose={() => setFilter(false)} />
          <button onClick={() => setSort(true)} className='Sort-btn'>Sort <BsCaretDownFill /> </button>
          <Sort sort={sort} onClose={() => setSort(false)} />
        </div>
      </div>

      { activebtn === 'active' ? <ActiveOrder activebtn={activebtn} /> :
      <PreviousOrders activebtn={activebtn} /> }
    </div>
  )
}

export default MyOrders