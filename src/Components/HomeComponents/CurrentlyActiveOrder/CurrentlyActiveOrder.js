import React from 'react'
import './CurrentlyActiveOrder.css'
import { BsChevronRight } from "react-icons/bs";
import Arrow from '../../../Images/arrow.png'

const CurrentlyActiveOrder = () => {
    const order =[{
        name:"Elise Beverley",
        wedding:"Wedding & anniversary",
        price:"$240.00 4 items",
        date:"Ordered on Jan 2nd, 2021",
        category:"Order placed"
    },
    {
        name:"Elise Beverley",
        wedding:"Wedding & anniversary",
        price:"$240.00 4 items",
        date:"Ordered on Jan 2nd, 2021",
        category:"Order placed"
    },
    {
        name:"Elise Beverley",
        wedding:"Wedding & anniversary",
        price:"$240.00 4 items",
        date:"Ordered on Jan 2nd, 2021",
        category:"Order placed"
    },
    {
        name:"Elise Beverley",
        wedding:"Wedding & anniversary",
        price:"$240.00 4 items",
        date:"Ordered on Jan 2nd, 2021",
        category:"Order placed"
    }]


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
        {order.map((item,setIetem)=>(
        <div className='CurrentlyActiveOrder-box'>
            <div className='CurrentlyActiveOrder-box-inear'>
                <h3 className='CurrentlyActiveOrder-box-inear-c1-r1'>{item.name}</h3>
                <p className='CurrentlyActiveOrder-box-inear-c1-r2'>{item.wedding}</p>
            </div>
            <div className='CurrentlyActiveOrder-box-inear-text'>
            <div className='CurrentlyActiveOrder-box-inear'>
                <h3 className='CurrentlyActiveOrder-box-inear-c2-r1'>{item.price}</h3>
                <p className='CurrentlyActiveOrder-box-inear-c2-r2'>{item.date}</p>
                </div>
                <img className='CurrentlyActiveOrder-box-inear-arrow'  src={Arrow } />
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default CurrentlyActiveOrder