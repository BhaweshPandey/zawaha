import React from 'react'
import './CurrentlyActiveOrder.css'

const CurrentlyActiveOrder = () => {
  return (
    <div className='CurrentlyActiveOrder'>
        <div className='CurrentlyActiveOrder-heading'>
            <h3>Currently active orders</h3>
            <h3>See all orders</h3>
        </div>
        <div className='CurrentlyActiveOrder-button'>
            <p className='CurrentlyActiveOrder-button-1'>Order placed</p>
            <p>Confirmed</p>
            <p>On process</p>
            <p>Completed</p>
        </div>

        <div className='CurrentlyActiveOrder-box-map'>
        {[1 , 2, 3 , 4].map((item,setIetem)=>(
        <div className='CurrentlyActiveOrder-box'>
            <div className='CurrentlyActiveOrder-box-inear'>
                <h3>Elise Beverley</h3>
                <p>Wedding & anniversary</p>
            </div>
            <div className='CurrentlyActiveOrder-box-inear'>
                <h3>$240.00   4 items</h3>
                <p>Ordered on Jan 2nd, 2021</p>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default CurrentlyActiveOrder