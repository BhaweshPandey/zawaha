import React from 'react'
import './MyStore.css'
import Bitmap from '../../Images/Bitmap.jpg';
import Star from '../../Images/Star.jpg';
import Shape from '../../Images/Shape.jpg';
import bell from '../../Images/menutop copy.png';

const MyStore = () => {
  return (
    <div className='MyStore'>
      <div className='Mystore-header'>
        <h2>My Store</h2>
        <img height='50px' src={bell} alt='' />
      </div>
      <div className='Mystore-location'>
        <div className='Mystore-location-profile'>
        <img src={Bitmap} alt='' />
        </div>
        <div className='Mystore-location-shop' >
          <h2>Vendor name lorem ipsum</h2>
          <div className='Mystore-location-shop-details'>
            <div className='Mystore-locatin-shop-rating'>
              <img height='15px' src={Star} alt='' />
              <p>4.2</p>
            </div>
            <div className='Mystore-location-shop-address'>
              <img height='15px' src={Shape} alt='' />
              <p>Bangelore</p>
            </div>
            <div className='Myshop-location-shop-items'>
              <p>/Food, drinks & caterings</p>
            </div>
          </div>
          <div className='Mystore-location-information'>
            <button>Information</button>
            <button>Customer rating</button>
          </div>
        </div>
        <div className='Mystore-location-item-no-box'>
          <div className='Mystore-location-per-item'>
            <div className='Mystore-location-item-no'>
              <h2>44</h2>
              <p className='Mystore-location-box-p'>No. of items</p>
            </div>
            <div className='Mystore-location-item-no' >
              <h2>279</h2>
              <p className='Mystore-location-box-p'>Total stocks</p>
            </div>
          </div>
          <div className='Mystore-location-per-item'>
            <div className='Mystore-location-item-no'>
              <h2>161</h2>
              <p className='Mystore-location-box-p'>Stock available</p>
            </div>
            <div className='Mystore-location-item-no'>
              <h2>118</h2>
              <p className='Mystore-location-box-p'>Stock sold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyStore
