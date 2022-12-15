import React ,{useState} from 'react'
import './ActiveOrder.css'
import AllImages from '../../../Assets/AllImages';


const ActiveOrder = ({activebtn}) => {
    const [confirmed, setConfirmed] = useState(false)

    const ActiveOrder = [
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'Order placed',
          Orderdate: 'nov 29th, 2022',
          price: '$ 120.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed',
          button_css: {
            background: "white", border:'2px solid #EAECF3' 
        }
        },
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'Confirmed',
          Orderdate: 'nov 29th, 2022',
          price: '$ 110.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed'
        },
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'On progress',
          Orderdate: 'nov 29th, 2022',
          price: '$ 126.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed'
        },
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'Order placed',
          Orderdate: 'nov 29th, 2022',
          price: '$ 130.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed',
          button_css: {
            background: "white", border:'2px solid #EAECF3' 
        }},
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'Order placed',
          Orderdate: 'nov 29th, 2022',
          price: '$ 119.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed',
          button_css: {
            background: "white", border:'2px solid #EAECF3' 
        }
        },
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'Confirmed',
          Orderdate: 'nov 29th, 2022',
          price: '$ 120.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed'
        },
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'On progress',
          Orderdate: 'nov 29th, 2022',
          price: '$ 121.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed'
        },
        {
          code: 'XTRX2918882910',
          name: 'Sophie Asveld',
          Confirmed: 'Order placed',
          Orderdate: 'nov 29th, 2022',
          price: '$ 124.50',
          EventDate: 'dec 25nd, 2022',
          selectbtn: 'Proceed',
          button_css: {
            background: "white", border:'2px solid #EAECF3' 
        }
        },
      ]

      if (!activebtn) {
        return null ;
      }
  return (
    <div className='ActiveOrder'>
        <div className='item-box-map'>
        {ActiveOrder.map((item, id) => (
          <div className='item-box'>
            <div className='item-box-top'>
              <div className='item-img'>
                <img height="100px" width="120px" src={AllImages.FoodPic} alt='' />
              </div>
              <div className='item-img-right'>
                <h2 className='item-img-right-top' >{item.code}</h2>
                <p className='item-img-right-mid'>{item.name}</p>
                <button style={item.button_css} className='item-img-right-btn' >
                  {item.Confirmed}
                </button>
              </div>
            </div>
            <div className='item-box-bottom'>
              <div>
                <div>
                  <p className='item-box-bottom-top'>Order date</p>
                  <h3 className='item-box-bottom-bottom'>{item.Orderdate}</h3>
                </div>
                <div>
                  <p className='item-box-bottom-top'>Total price</p>
                  <h3 className='item-box-bottom-bottom'>{item.price}</h3>
                </div>
                <button className='item-box-bottom-btn1'>See Deteils</button>
              </div>
              <div>
                <div>
                  <p className='item-box-bottom-top'>Event Date</p>
                  <h3 className='item-box-bottom-bottom'>{item.EventDate}</h3>
                </div>
                <div>
                  <p className='item-box-bottom-top'>Payment</p>
                  <h3 className='item-box-bottom-bottom'>Credit card</h3>
                </div>
                <button  onClick={() => setConfirmed(item.price)} className='item-box-bottom-btn2'>
                {confirmed == item.price ? 'Confirmed' : item.selectbtn}
                </button>
              </div>
            </div>
          </div>
        ))}</div>
    </div>
  )
}

export default ActiveOrder