import React from 'react'
import './MobileMenu.css'
import { Link } from 'react-router-dom';
import Home from '../../Images/HomeIcon.png'
import MyStore from '../../Images/MyStore1.png'
import MyOrder from '../../Images/MyOrder.png'
import Proposal from '../../Images/Proposal.png'
import Promotion from '../../Images/Promotion.png'
import closeIcon from '../../Images/close.png'

const MobileMenu = ({openbar, onClose}) => {
    if (!openbar) {
        return null;
        }
  return (
    <div>
        <div className='Sidebar-mobile'>
        <img className='closeIcon' width='30px' height='30px' src={closeIcon} onClick={onClose} />
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
    </div>
    </div>
  )
}

export default MobileMenu