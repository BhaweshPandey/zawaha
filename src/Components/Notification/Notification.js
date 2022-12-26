import React, { useEffect } from 'react'
import './Notification.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import NotificationArrow from '../../Images/NotificationArrow.png'
import CustomerArrow from '../../Images/arrow.png'
import clock from '../../Images/clock.png'

const Notification = ({ show, onClose }) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'auto';
        }
    }, [show])
    if (!show) {
        return null;
    }
    const data = [{
        heading: 'You recieved new order',
        customer: 'Please confirm order “XTHR-1928880” for your customer',
        date: ' Feb 4th, 2021 - 07:22'
    },
    {
        heading: 'Your order need to be proceed',
        customer: 'Please start to proceed order “XTHR-1928880” ',
        date: ' Feb 4th, 2021 - 07:22'
    },
    {
        heading: 'Your order need completions',
        customer: 'Your order “XTHR-1928880” is done, please confirm your completion',
        date: ' Feb 4th, 2021 - 07:22'
    },
    {
        heading: 'Your are almost running out of stock',
        customer: 'Your item “Lorem ipsum dolor” stock is below >5 now, please update its availability ',
        date: ' Feb 4th, 2021 - 07:22'
    },
    {
        heading: 'Your item is now out of stock',
        customer: 'Your item “Lorem ipsum dolor” stock is 0 now',
        date: ' Feb 4th, 2021 - 07:22'
    },
    {
        heading: 'Your offer to a proposal has been accepted',
        customer: 'Proposal “Lorem ipsum dolor” has accepted your offer and now lets confirm their order.',
        date: ' Feb 4th, 2021 - 07:22'
    }
    ]
    return (
        <>
            <div className='Notification-container' >
                <div className='Notification-value'>
                    <div className='Notification'>
                        <h1 className='Notification-h1'>
                            <img src={NotificationArrow} className='NotificationArrow' onClick={onClose} />   Notification</h1>

                        {data.map((item, setIetem) => (
                            <div className='Notification-inear'>
                                <h3 className='Notification-h3'>{item.heading}</h3>
                                <p className='Notification-p1'>
                                    {item.customer}
                                    <img className='CustomerArrow' src={CustomerArrow} />
                                </p>
                                <p className='Notification-p2'>
                                    <img src={clock} />
                                    {item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification