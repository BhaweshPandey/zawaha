import React from 'react'
import './MyOrders.css'
import foot from '../../Images/Bitmap.png';
import bell from '../../Images/menutop copy.png';

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
          <button>Filter</button>
          
          <button>Sort</button>
        </span>
      </div>

      <div className='item-boxs'>
        {[1, 2,3].map((item, id) => (
          <div className='item-box'>
            <div className='item-box-top'>
              <div className='item-img'>
                <img src={foot} alt='' />
              </div>
              <div className='item-img-right'>
                <h2 >XTRX2918882910</h2>
                <p >Sophie Asveld</p>
                <button >Confirmed</button>
              </div>
            </div>
            <div className='item-box-bottom'>
              <div>
                <div>
                  <p>Order date</p>
                  <h3>nov 29th, 2022</h3>
                </div>
                <div>
                  <p>Total price</p>
                  <h3>$ 120.50</h3>
                </div>
                <button>See Deteils</button>
              </div>
              <div>
                <div>
                  <p>Event Date</p>
                  <h3>dec 25nd, 2022</h3>
                </div>
                <div>
                  <p>Payment</p>
                  <h3>Credit card</h3>
                </div>
                <button>Proceed</button>
              </div>
            </div>
          </div>
        ))}</div>
    </div>
  )
}

export default MyOrders