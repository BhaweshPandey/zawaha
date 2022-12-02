import React, { useState } from 'react'
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
    const [activeButton , setActiveButton]=useState("Home");
    return (
        <div className='Sidebar'>
            <img className='sidebar-img' src={img} alt='' />
            <ul>
                <li className='sidebar-home'>
                    <NavLink onClick={()=> setActiveButton("Home")}
               className={`${activeButton == "Home" ? "sidebarActiveButtonClass" : ""} SidebarHome`}
                     to="/"><img src={Home} />  Home</NavLink>
                </li>
                <li className='sidebar-MyStore'>
                    <NavLink onClick={()=> setActiveButton("MyStore")}
               className={`${activeButton == "MyStore" ? "sidebarActiveButtonClass" : ""} SidebarHome`}
                    to="/MyStore"><img src={MyStore} />  MyStore</NavLink>
                </li>
                <li className='sidebar-MyOrders'>
                    <NavLink  onClick={()=> setActiveButton("MyOrder")}
               className={`${activeButton == "MyOrder" ? "sidebarActiveButtonClass" : ""} SidebarHome`}
                     to="/MyOrders"><img src={MyOrder} />  MyOrders</NavLink>
                </li>
                <li className='sidebar-Promotion'>
                    <NavLink onClick={()=> setActiveButton("Promotion")}
               className={`${activeButton == "Promotion" ? "sidebarActiveButtonClass" : ""} SidebarHome`}
                     to="/Promotion"><img src={Promotion} />  Promotion</NavLink>
                </li>
                <li className='sidebar-Proposal'>
                    <NavLink onClick={()=> setActiveButton("Proposal")}
               className={`${activeButton == "Proposal" ? "sidebarActiveButtonClass" : ""} SidebarHome`}
                    to="/Proposal"><img src={Proposal} />  Proposal</NavLink>
                </li>
            </ul>
            <div className='Admin-box'>
                <Admin />
            </div>
        </div>
    )
}

export default Sidebar