import React from 'react'
import './MyOrders.css'
import foot from '../../Images/Bitmap.png';
import bell from '../../Images/menutop copy.png';
import Sort from '../../Components/MyStoreComponents/Sort/Sort';
import Filter from '../../Components/MyStoreComponents/Filter/Filter';

const MyOrders = () => {
  return (
    <div className='MyOrders'>
      <header>
        <h2>My order</h2>
        <img height='50px' src={bell} alt='' />
      </header>
      <div className='heading'>
        <span className='h-left'>
          <h4 className='h-left-1'>Active Orders</h4>
          <h4 className='h-left-2'>Previous Orders</h4>
        </span>
        <span className='h-right'>
          <textarea rows={1} placeholder='search'></textarea>
          <Filter />
          <Sort />

        </span>
      </div>

      <div className='item-box-map'>
        {[1, 2,3,4,5,6,7,8].map((item, id) => (
          <div className='item-box'>
            <div className='item-box-top'>
              <div className='item-img'>
                <img height="100px" width="120px" src={foot} alt='' />
              </div>
              <div className='item-img-right'>
                <h2 className='item-img-right-top' >XTRX2918882910</h2>
                <p  className='item-img-right-mid'>Sophie Asveld</p>
                <button className='item-img-right-btn' >Confirmed</button>
              </div>
            </div>
            <div className='item-box-bottom'>
              <div>
                <div>
                  <p className='item-box-bottom-top'>Order date</p>
                  <h3 className='item-box-bottom-bottom'>nov 29th, 2022</h3>
                </div>
                <div>
                  <p className='item-box-bottom-top'>Total price</p>
                  <h3 className='item-box-bottom-bottom'>$ 120.50</h3>
                </div>
                <button className='item-box-bottom-btn1'>See Deteils</button>
              </div>
              <div>
                <div>
                  <p className='item-box-bottom-top'>Event Date</p>
                  <h3 className='item-box-bottom-bottom'>dec 25nd, 2022</h3>
                </div>
                <div>
                  <p className='item-box-bottom-top'>Payment</p>
                  <h3 className='item-box-bottom-bottom'>Credit card</h3>
                </div>
                <button className='item-box-bottom-btn2'>Proceed</button>
              </div>
            </div>
          </div>
        ))}</div>
    </div>
  )
}

export default MyOrders