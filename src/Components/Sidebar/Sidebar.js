import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import img from '../../Images/Rectangle.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
     <img className='sidebar-img' src={img} alt='' />
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/MyStore">MyStore</NavLink>
                </li>
                <li>
                    <NavLink to="/MyOrders">MyOrders</NavLink>
                </li>
                <li>
                    <NavLink to="/Promotion">Promotion</NavLink>
                </li>
                <li>
                    <NavLink to="/Proposal">Proposal</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar