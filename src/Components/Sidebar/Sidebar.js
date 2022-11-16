import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import img from '../../Images/Rectangles.jpg'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
     <img className='sidebar-img' src={img} alt='' />
        <nav>
            <ul>
                <li className='sidebar-home'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='sidebar-MyStore'>
                    <NavLink to="/MyStore">MyStore</NavLink>
                </li>
                <li className='sidebar-MyOrders'>
                    <NavLink to="/MyOrders">MyOrders</NavLink>
                </li>
                <li className='sidebar-Promotion'>
                    <NavLink to="/Promotion">Promotion</NavLink>
                </li>
                <li className='sidebar-Proposal'>
                    <NavLink to="/Proposal">Proposal</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar