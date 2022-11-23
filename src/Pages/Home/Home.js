import React  from 'react'
import './Home.css'
import bell from '../../Images/menutop copy.png'
import HomeTopBox from '../../Components/HomeComponents/HomeTopBox/HomeTopBox'
import CurrentlyActiveOrder from '../../Components/HomeComponents/CurrentlyActiveOrder/CurrentlyActiveOrder'
import TotalOrdersCard from '../../Components/HomeComponents/TotalOrdersCard/TotalOrdersCard'
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { Header } from '../../Components/MyStoreComponents/Header/Header'
import SelectBoxDay from '../../Components/HomeComponents/SelectBoxDay/SelectBoxDay'

const Home = () => {
  return (
    <div className='Home'>
        <div className='Home-heading'>
            <Header name={"Home"} />
            <button className='hamburger-menu'><BsList/></button>
        </div>
        <div className='Home-header'>
            <div className='Home-circle'>
                <div className='circle-inear'>
                    <h2 className='circle-inear-h'>287</h2>
                    <p className='circle-inear-p'>Total orders</p>
                    {/* <p className='circle-inear-p-s'>this week <BsFillCaretDownFill/></p> */}
                    <SelectBoxDay />
                </div>
            </div>
            <div className='HomeTopBox'>
                <HomeTopBox text={"Currently active"} number={"42"} styles={"HomeTopBox-box"} circleStyle={"circle1"} />
                <HomeTopBox text={"Completed"} number={"127"} styles={"HomeTopBox-box"} circleStyle={"circle2"} />
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