import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import img from '../../Images/Rectangles.jpg'
import Home from '../../Images/HomeIcon.png'
import MyStore from '../../Images/MyStore.png'
import MyOrder from '../../Images/MyOrder.png'
import Proposal from '../../Images/Proposal.png'
import Promotion from '../../Images/Promotion.png'
import Admin from '../Admin/Admin'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
     <img className='sidebar-img' src={img} alt='' />
        <nav>
            <ul>
                <li className='sidebar-home'>
                    <NavLink to="/"><img src={Home}/>  Home</NavLink>
                </li>
                <li className='sidebar-MyStore'>
                    <NavLink to="/MyStore"><img src={MyStore}/>  MyStore</NavLink>
                </li>
                <li className='sidebar-MyOrders'>
                    <NavLink to="/MyOrders"><img src={MyOrder}/>  MyOrders</NavLink>
                </li>
                <li className='sidebar-Promotion'>
                    <NavLink to="/Promotion"><img src={Promotion}/>  Promotion</NavLink>
                </li>
                <li className='sidebar-Proposal'>
                    <NavLink to="/Proposal"><img src={Proposal}/>  Proposal</NavLink>
                </li>
            </ul>
        </nav>
        <div className='Admin-box'>
            <Admin />
        </div>
    </div>
  )
}

export default Sidebar