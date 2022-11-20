import React from 'react'
import './ItemNoBox.css'

const ItemNoBox = () => {
  return (
    <div className='Itemnobox'>
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
  )
}

export default ItemNoBox