import React, { useState } from 'react'
import './Header.css'
import bell from '../../../Images/menutop copy.png';
import Notification from '../../Notification/Notification';
import { BsList } from "react-icons/bs";
import MobileMenu from '../../MobileMenu/MobileMenu';
import AllImages from '../../../Assets/AllImages';

const Header = ({name}) => {
  const [openbar , setOpenbar] = useState(false);
  const [show,setShow]=React.useState(false);
  return (
    <div className='Header'>
      <div className='Header-heading'>
        <MobileMenu openbar={openbar} onClose={() => setOpenbar(false)}/>
        <button onClick={() => setOpenbar(true)} className='hamburger-menu'><BsList/></button>
        <h2 className='Header-heading-h2'>{name}</h2>
      </div>
      <img onClick={()=> setShow(true)} className='notification' height='50px' src={AllImages.NotificationIcon} alt='' />
      <Notification show={show} onClose={()=>setShow(false)} />
    </div>
  )
}

export default Header
