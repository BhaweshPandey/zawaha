import React from 'react'
import './Header.css'
import bell from '../../../Images/menutop copy.png';
import Notification from '../../Notification/Notification';

export const Header = ({name}) => {
  const [show,setShow]=React.useState(false);
  return (
    <div className='Header'>
         <h2>{name}</h2>
        <img onClick={()=> setShow(true)} className='notification' height='50px' src={bell} alt='' />
        <Notification show={show} onClose={()=>setShow(false)} />
    </div>
  )
}
