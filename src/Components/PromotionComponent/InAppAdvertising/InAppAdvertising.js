import React from 'react'
import './InAppAdvertising.css'

const InAppAdvertising = ({promotionbtn}) => {

    const data = [
        {
            activebtn:'Currently active',
            date:'Jan 30th - Feb 30th 2021',
            Targete:'Discounted items',
            price:'$32.00',
        },
        {
            activebtn:'Stopped',
            date:'Jan 30th - Feb 30th 2021',
            Targete:'Discounted items',
            price:'$32.00',
            button_css: {
                backgroundColor: '#f3adb2' , color: 'white'
            }
        },
        {
            activebtn:'Ended',
            date:'Jan 30th - Feb 30th 2021',
            Targete:'Discounted items',
            price:'$32.00',
            button_css: {
                backgroundColor: '#6A2C3E', color:'white'
            }
        },
        {
            activebtn:'Currently active',
            date:'Jan 30th - Feb 30th 2021',
            Targete:'Discounted items',
            price:'$32.00'
        },
        
    ]

    if (!promotionbtn) {
        return null ;
    }

    return (
        <div className='InAppAdvertising-map'>
        {data.map((item)=> (
        <div className='InAppAdvertising'>
            <div className='InAppAdvertising-top'>
                <p className='IAATT'>Promotion name lorem ipsum dolor sit amet</p>
                <p style={item.button_css} className='IAATB'>{item.activebtn}</p>
            </div>
            <div className='InAppAdvertising-mid'>
                <div className='PCM1'>
                    <h3 className='PCM-name' >Start & end date</h3>
                    <p className='PCM-user'>{item.date}</p>
                </div>
                <div className='PCM2'>
                    <h3 className='PCM-name'>Targeted item</h3>
                    <p className='PCM-user'>{item.Targete}</p>
                </div>
                <div className='PCM3'>
                    <h3 className='PCM-name'>Total price</h3>
                    <p className='PCM-user'>{item.price}</p>
                </div>
            </div>
        </div>
        ))}
        </div>
    )
}

export default InAppAdvertising