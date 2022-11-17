import React from 'react'
import './CurrentlyActiveOrder.css'
import { BsChevronRight } from "react-icons/bs";

const CurrentlyActiveOrder = () => {
  return (
    <div className='CurrentlyActiveOrder'>
        <div className='CurrentlyActiveOrder-heading'>
            <h3>Currently active orders</h3>
            <h3>See all orders <BsChevronRight /></h3>
        </div>
        <div className='CurrentlyActiveOrder-button'>
            <p className='CurrentlyActiveOrder-button-1'>Order placed</p>
            <p className='CurrentlyActiveOrder-button-2'>Confirmed</p>
            <p className='CurrentlyActiveOrder-button-3'>On process</p>
            <p className='CurrentlyActiveOrder-button-4'>Completed</p>
        </div>

        <div className='CurrentlyActiveOrder-box-map'>
        {[1 , 2, 3 ,4].map((item,setIetem)=>(
        <div className='CurrentlyActiveOrder-box'>
            <div className='CurrentlyActiveOrder-box-inear'>
                <h3 className='CurrentlyActiveOrder-box-inear-c1-r1'>Elise Beverley</h3>
                <p className='CurrentlyActiveOrder-box-inear-c1-r2'>Wedding & anniversary</p>
            </div>
            <div className='CurrentlyActiveOrder-box-inear'>
                <h3 className='CurrentlyActiveOrder-box-inear-c2-r1'>$240.00   4 items</h3>
                <p className='CurrentlyActiveOrder-box-inear-c2-r2'>Ordered on Jan 2nd, 2021</p>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default CurrentlyActiveOrder