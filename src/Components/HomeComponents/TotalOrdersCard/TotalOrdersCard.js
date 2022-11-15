import React from 'react'
import HomeTopBox from '../HomeTopBox/HomeTopBox'
import './TotalOrdersCard.css'

const TotalOrdersCard = () => {
  return (
    <div className='TotalOrdersCard'>
        <div className='TotalOrdersCard-top'>
            <div className='TotalOrdersCard-circle'>
                <h1 className='TotalOrdersCard-Circle-inear-h'>168</h1>
                <p className='TotalOrdersCard-Circle-inear-p'>Total orders</p>
            </div>
        </div>
        <div className='TotalOrdersCard-mid'>
            <HomeTopBox text={"Item for sale"} number={"168"} styles={"TotalOrdersCard-mid-text"} />
            <HomeTopBox text={"Item sold"} number={"20"} styles={"TotalOrdersCard-mid-text"} />
        </div>
        <div className='TotalOrdersCard-bottom'>
            <p>See inventory</p>
        </div>
    </div>
  )
}

export default TotalOrdersCard