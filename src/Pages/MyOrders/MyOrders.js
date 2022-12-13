import React, { useState } from 'react'
import './MyOrders.css'
import foot from '../../Images/Bitmap.png';
import bell from '../../Images/menutop copy.png';
import Header from '../../Components/MyStoreComponents/Header/Header';
import { BsCaretDownFill } from "react-icons/bs";
import Sort from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import Filter from '../../Components/MyStoreComponents/Filter/Filter';

const MyOrders = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [confirmed, setConfirmed] = useState(false)
  const data = [
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 120.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 110.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 126.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 130.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 119.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'On progress',
      Orderdate: 'nov 29th, 2022',
      price: '$ 120.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 121.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
    {
      code: 'XTRX2918882910',
      name: 'Sophie Asveld',
      Confirmed: 'Order placed',
      Orderdate: 'nov 29th, 2022',
      price: '$ 124.50',
      EventDate: 'dec 25nd, 2022',
      selectbtn: 'Proceed'
    },
  ]

  return (
    <div className='MyOrders'>
      {/* <header>
        <h2>My order</h2>
        <img height='50px' src={bell} alt='' />
      </header> */}
      <Header name={"MyOrders"} />
      <div className='heading'>
        <span className='h-left'>
          <h4 className='h-left-1'>Active Orders</h4>
          <h4 className='h-left-2'>Previous Orders</h4>
        </span>
        <div className='h-right'>
          <input className='h-right-input' type='Search' placeholder='Search' />
          <button onClick={() => setFilter(true)} className='Filter-btn'>Filter <BsCaretDownFill /> </button>
          <Filter filter={filter} onclose={() => setFilter(false)} />
          <button onClick={() => setSort(true)} className='Sort-btn'>Sort <BsCaretDownFill /> </button>
          <Sort sort={sort} onClose={() => setSort(false)} />
        </div>
      </div>

      <div className='item-box-map'>
        {data.map((item, id) => (
          <div className='item-box'>
            <div className='item-box-top'>
              <div className='item-img'>
                <img height="100px" width="120px" src={foot} alt='' />
              </div>
              <div className='item-img-right'>
                <h2 className='item-img-right-top' >{item.code}</h2>
                <p className='item-img-right-mid'>{item.name}</p>
                <button onClick={() => setConfirmed(item.price)} className='item-img-right-btn' >
                {confirmed == item.price ? 'Confirmed' : 'Order placed'}
                 </button>
              </div>
            </div>
            <div className='item-box-bottom'>
              <div>
                <div>
                  <p className='item-box-bottom-top'>Order date</p>
                  <h3 className='item-box-bottom-bottom'>{item.Orderdate}</h3>
                </div>
                <div>
                  <p className='item-box-bottom-top'>Total price</p>
                  <h3 className='item-box-bottom-bottom'>{item.price}</h3>
                </div>
                <button className='item-box-bottom-btn1'>See Deteils</button>
              </div>
              <div>
                <div>
                  <p className='item-box-bottom-top'>Event Date</p>
                  <h3 className='item-box-bottom-bottom'>{item.EventDate}</h3>
                </div>
                <div>
                  <p className='item-box-bottom-top'>Payment</p>
                  <h3 className='item-box-bottom-bottom'>Credit card</h3>
                </div>
                <button className='item-box-bottom-btn2'>{item.selectbtn}</button>
              </div>
            </div>
          </div>
        ))}</div>
    </div>
  )
}

export default MyOrders