import React from 'react';
import './Rating.css';
import closeArrow from '../../../Images/NotificationArrow.png';
import Star from '../../../Images/Star.jpg'
import menpic from '../../../Images/menpic.png'

const Rating = ({ rating, onclose }) => {
    if (!rating) {
        return null;
    }
    return (
        <div className='Rating'>
            <div className='Rating-header'>
                <h1 className='Notification-h1'>
                    <img src={closeArrow} className='NotificationArrow' onClick={onclose} />  Customer ratings</h1>
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
                        <input type='Range' min='0' max='10' step='8' />
                        <p>108</p>
                    </span>
                </div>
            </div>
            <div className='Rating-mid'>
                <div className='r-m-top'>
                    <div className='rmt-left'>
                        <img className='rmt-img' height='35px' src={menpic} />
                        <div className='r-m-top-name'>
                            <h2 className='rmtn-name'>Wilhelm Dowall</h2>
                            <p className='rmtn-date'>June 21th, 2020</p>
                        </div>
                    </div>
                    <span className='r-m-top-rating'>
                    <img className='rmtr-img' height='20px' src={Star} />
                        <p className='rmtr-rating'>4.8</p>
                    </span>
                </div>
                <div className='r-m-mid' >
                    <p className='rmm-text'>Lorem ipsum dolor sit amet, consectetur dero adipiscing elit <br />
                        consectetur dero adipiscing elit consectetur dero .</p>
                </div>
            </div>
        </div>
    )
}

export default Rating