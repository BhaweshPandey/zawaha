import React from 'react'
import './Home.css'
import bell from '../../Images/menutop copy.png'
import HomeTopBox from '../../Components/HomeComponents/HomeTopBox/HomeTopBox'
import CurrentlyActiveOrder from '../../Components/HomeComponents/CurrentlyActiveOrder/CurrentlyActiveOrder'
import TotalOrdersCard from '../../Components/HomeComponents/TotalOrdersCard/TotalOrdersCard'

const Home = () => {
  return (
    <div className='Home'>
        <div className='Home-heading'>
            <h2>Home</h2>
            <img height='60px' src={bell} alt='' />
        </div>
        <div className='Home-header'>
            <div className='Home-circle'>
                <div className='circle-inear'>
                    <h2 className='circle-inear-h'>287</h2>
                    <p className='circle-inear-p'>Total orders</p>
                    <p className='circle-inear-p-s'>this week</p>
                </div>
            </div>
            <div className='HomeTopBox'>
                <HomeTopBox text={"Currently active"} number={"42"} styles={"HomeTopBox-box"} />
                <HomeTopBox text={"Completed"} number={"127"} styles={"HomeTopBox-box"} />
                <HomeTopBox text={"Cancelled"} number={"18"} styles={"HomeTopBox-box"} />
            </div>
        </div>
        <div className='Home-mid'>
            <CurrentlyActiveOrder />
            <TotalOrdersCard />
        </div>
    </div>
  )
}

export default Home