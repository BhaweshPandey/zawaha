import React, { useState ,useEffect } from 'react'
import './Sidebar.css'
import { NavLink , useLocation} from 'react-router-dom'
import Admin from '../Admin/Admin'
import AllImages from '../../Assets/AllImages'


const Sidebar = () => {
    const [activeButton, setActiveButton] = useState("/");
    const Location = useLocation()
     useEffect (()=> {
        window.scrollTo(0, 0);
     }
     ,[Location])

    const Button = [
        {
            name: ' Home ',
            img: AllImages.HomeIcon,
            imgClick:AllImages.HomeClick,
            path: '/',
            id: 1
        },
        {
            name: ' MyStore ',
            img: AllImages.MyStoreIcon,
            imgClick: AllImages.MyStoreClick,
            path:'/MyStore',
            id: 2
        },
        {
            name: ' MyOrders ',
            img: AllImages.MyOrderIcon,
            imgClick:AllImages.MyOrderClick,
            path:'/MyOrders',
            id: 3
        },
        {
            name: ' Proposal ',
            img: AllImages.PromotionIcon,
            imgClick: AllImages.PromotionClick,
            path:'/Proposal',
            id: 4
        },
        {
            name: ' Promotion ',
            img: AllImages.ProposalIcon,
            imgClick: AllImages.ProposalClick,
            path:'/Promotion',
            id:5
        }
    ]

    return (
        <div id='leftSidebar' className='Sidebar'>
            <img className='sidebar-img' src={AllImages.SidebarTopPic} alt='' />

            {Button.map((item) => (
                <ul key={item.id}>
                    <li className='sidebar-home'> 
                        <NavLink
                         onClick={() => setActiveButton(item.path)}
                            className={`${Location.pathname === item.path ? "sidebarActiveButtonClass" : "SidebarHome"} `}
                            to={item.path}>
                             {Location.pathname === item.path ? <img src={item.imgClick} /> : <img src={item.img} /> }  
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