import React from 'react'
import './StorePromotion.css'
import AllImages from '../../../Assets/AllImages'

const StorePromotion = ({promotionbtn}) => {

    const data = [
        {
            activebtn:'Currently active',
            date:'Jan 30th - Feb 30th 2021',
            type:'Discount',
            price:'$32.00',
        },
        {
            activebtn:'Stopped',
            date:'Jan 30th - Feb 30th 2021',
            type:'Discount',
            price:'$32.00',
            button_css: {
                backgroundColor: '#f3adb2' , color: '#6A2C3E'
            }
        },
        {
            activebtn:'Ended',
            date:'Jan 30th - Feb 30th 2021',
            type:'Discount',
            price:'$32.00',
            button_css: {
                backgroundColor: '#6A2C3E', color:'white'
            }
        },
        {
            activebtn:'Currently active',
            date:'Jan 30th - Feb 30th 2021',
            type:'Discount',
            price:'$32.00'
        },
        
    ]

    if (!promotionbtn) {
        return null ;
    }
  return (
         <div className='StorePromotion-map'>
        {data.map((item)=> (
        <div className='StorePromotion'>
            <div className='InAppAdvertising-top'>
                <p className='IAATT'>Promotion name lorem ipsum dolor sit amet</p>
                <p style={item.button_css} className='IAATB'>{item.activebtn}</p>
            </div>
            <div className='InAppAdvertising-mid'>
                <div className='PCM1'>
                    <p className='PCM-name' >Start & end date</p>
                    <h3 className='PCM-user'>{item.date}</h3>
                </div>
                <div className='PCM2'>
                    <p className='PCM-name'>Type</p>
                    <h3 className='PCM-user'>{item.type}</h3>
                </div>
                <div className='PCM4'>
                   <img className='PCMI' height='50px' src={AllImages.Camerapic} alt='' />
                    <div className='PCMTT'>
                        <h3 className='PCMT'>4 hour wedding video documentations</h3>
                        <div className='PCMTP'>
                        <del className='PCMTP1'>$400</del>
                        <i className='PCMTP2'>$350</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
        </div>
  )
}

export default StorePromotion