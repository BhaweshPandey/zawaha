import React from 'react'
import './Header.css'
import bell from '../../../Images/menutop copy.png';
import Notification from '../../Notification/Notification';
import { BsList } from "react-icons/bs";


export const Header = ({name}) => {
  const [show,setShow]=React.useState(false);
  return (
    <div className='Header'>
      <div className='Header-heading'>
        <button className='hamburger-menu'><BsList/></button>
        <h2 className='Header-heading-h2'>{name}</h2>
      </div>
      <img onClick={()=> setShow(true)} className='notification' height='50px' src={bell} alt='' />
      <Notification show={show} onClose={()=>setShow(false)} />
    </div>
  )
}
