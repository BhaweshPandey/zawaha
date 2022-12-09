import React, { useState } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import Admin from '../Admin/Admin'
import AllImages from '../../Assets/AllImages'

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState("Home");

    const Button = [
        {
            name: 'Home',
            img: AllImages.HomeIcon
        },
        {
            name: 'MyStore',
            img: AllImages.MyStoreIcon
        },
        {
            name: 'MyOrders',
            img: AllImages.MyOrderIcon
        },
        {
            name: 'Promotion',
            img: AllImages.PromotionIcon
        },
        {
            name: 'Proposal',
            img: AllImages.ProposalIcon
        }
    ]
    return (
        <div className='Sidebar'>
            <img className='sidebar-img' src={AllImages.SidebarTopPic} alt='' />
            {Button.map((item) => (
                <ul>
                    <li className='sidebar-home'>
                        <NavLink onClick={
                            () => {
                                setActiveButton(item.name)
                            }}
                            className={`${activeButton == item.name ? "sidebarActiveButtonClass" : "SidebarHome"} `}
                            to={item.name}>
                            <img src={item.img} />  
                            {item.name}
                            </NavLink>
                    </li>
                    {/* <li className='sidebar-MyStore'>
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
                </li> */}
                </ul>
            ))}
            <div className='Admin-box'>
                <Admin />
            </div>
        </div>
    )
}

export default Sidebar