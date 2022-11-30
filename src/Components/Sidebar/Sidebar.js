import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import img from '../../Images/Rectangles.jpg'
import Home from '../../Images/HomeIcon.png'
import MyStore from '../../Images/MyStore.png'
import MyOrder from '../../Images/MyOrder.png'
import Proposal from '../../Images/Proposal.png'
import Promotion from '../../Images/Promotion.png'
import Admin from '../Admin/Admin'

const Sidebar = () => {
  return (
    <div>
    <div className='Sidebar'>
     <img className='sidebar-img' src={img} alt='' />
        <nav>
            <ul>
                <li className='sidebar-home'>
                    <Link to="/"><img src={Home}/>  Home</Link>
                </li>
                <li className='sidebar-MyStore'>
                    <Link to="/MyStore"><img src={MyStore}/>  MyStore</Link>
                </li>
                <li className='sidebar-MyOrders'>
                    <Link to="/MyOrders"><img src={MyOrder}/>  MyOrders</Link>
                </li>
                <li className='sidebar-Promotion'>
                    <Link to="/Promotion"><img src={Promotion}/>  Promotion</Link>
                </li>
                <li className='sidebar-Proposal'>
                    <Link to="/Proposal"><img src={Proposal}/>  Proposal</Link>
                </li>
            </ul>
        </nav>
        <div className='Admin-box'>
            <Admin />
        </div>
    </div>
    {/* <div className='Sidebar-mobile'>
        <nav>
            <ul>
                <li className='sidebar-home'>
                    <Link to="/"><img src={Home}/>  Home</Link>
                </li>
                <li className='sidebar-MyStore'>
                    <Link to="/MyStore"><img src={MyStore}/>  MyStore</Link>
                </li>
                <li className='sidebar-MyOrders'>
                    <Link to="/MyOrders"><img src={MyOrder}/>  MyOrders</Link>
                </li>
                <li className='sidebar-Promotion'>
                    <Link to="/Promotion"><img src={Promotion}/>  Promotion</Link>
                </li>
                <li className='sidebar-Proposal'>
                    <Link to="/Proposal"><img src={Proposal}/>  Proposal</Link>
                </li>
            </ul>
        </nav>
    </div> */}
    </div>
  )
}

export default Sidebar