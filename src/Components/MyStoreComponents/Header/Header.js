import React from 'react'
import './Header.css'
import bell from '../../../Images/menutop copy.png';

export const Header = ({name}) => {
  return (
    <div className='Header'>
         <h2>{name}</h2>
        <img height='50px' src={bell} alt='' />
    </div>
  )
}
