import React from 'react';
import './Rating.css';
import closeArrow from '../../../Images/NotificationArrow.png';
import Star from '../../../Images/Star.jpg'

const Rating = ({rating , onclose}) => {
    if(!rating) {
        return null;
    }
  return (
    <div className='Rating'>
    <div className='Rating-header'>
        <h1 className='Notification-h1'>
        <img src={closeArrow} className='NotificationArrow' onClick={onclose}/>  Customer ratings</h1>
    </div>
    <div className='Rating-top'>
        <div className='Rating-top-left'>
            <h1 className='Rating-top-left-h1'>3.5</h1>
            <p className='Rating-top-left-p'>18 Rating</p>
        </div>
        <div className='Rating-top-right'>
            <span className='Rating-span'>
                <img className='Rating-span-img' height='20px' src={Star} />
                <h3>5</h3>
                <input  type='Range' min='0' max='10' step='8' />
                <p>108</p>
            </span>
        </div>
    </div>
    </div>
  )
}

export default Rating