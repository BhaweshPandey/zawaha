import React from 'react'
import HomeTopBox from '../HomeTopBox/HomeTopBox'
import './TotalOrdersCard.css'

const TotalOrdersCard = () => {
  return (
    <div className='TotalOrdersCard'>
        <div className='TotalOrdersCard-top'>
            <div className='TotalOrdersCard-circle'>
                <h1>168</h1>
                <p>Total orders</p>
            </div>
        </div>
        <div className='TotalOrdersCard-mid'>
            <HomeTopBox text={"Item for sale"} number={"168"} />
            <HomeTopBox text={"Item sold"} number={"20"} />
        </div>
        <div className='TotalOrdersCard-bottom'>
            <p>See inventory</p>
        </div>
    </div>
  )
}

export default TotalOrdersCard