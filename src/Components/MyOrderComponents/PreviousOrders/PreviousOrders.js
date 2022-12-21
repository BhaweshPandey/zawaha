import React from 'react'
import './PreviousOrder.css'
import AllImages from '../../../Assets/AllImages'

export const PreviousOrder = [
    {
        code: 'XTRX2918882910',
        name: 'Sophie Asveld',
        Confirmed: 'Cancelled',
        Orderdate: 'Jan 28th, 2021',
        price: '$ 120.50',
        EventDate: 'Feb 2nd, 2021',
        button_css: {
            backgroundColor: '#6A2C3E'
        }
    },
    {
        code: 'BACH2918882910',
        name: 'Yogesh Asveld',
        Confirmed: 'Completed',
        Orderdate: 'Jan 28th, 2021',
        price: '$ 110.50',
        EventDate: 'Feb 2nd, 2021',
    },
    {
        code: 'ASDF2918882910',
        name: 'Bhupesh Asveld',
        Confirmed: 'Completed',
        Orderdate: 'Jan 28th, 2021',
        price: '$ 126.50',
        EventDate: 'Feb 2nd, 2021',
    },
    {
        code: 'ZXCVR2918882910',
        name: 'Amit Asveld',
        Confirmed: 'Completed',
        Orderdate: 'Jan 28th, 2021',
        price: '$ 130.50',
        EventDate: 'Feb 2nd, 2021',
    },
    {
        code: 'BHASD2918882910',
        name: 'Jitu Asveld',
        Confirmed: 'Cancelled',
        Orderdate: 'Jan 28th, 2021',
        price: '$ 119.50',
        EventDate: 'Feb 2nd, 2021',
        button_css: {
            backgroundColor: '#6A2C3E'
        }
    }
]

const PreviousOrders = ({ activebtn ,input }) => {

    const filteredData = PreviousOrder.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase(PreviousOrder).includes(input)
        }
    })

    // const PreviousOrder = [
    //     {
    //         code: 'XTRX2918882910',
    //         name: 'Sophie Asveld',
    //         Confirmed: 'Cancelled',
    //         Orderdate: 'Jan 28th, 2021',
    //         price: '$ 120.50',
    //         EventDate: 'Feb 2nd, 2021',
    //         button_css: {
    //             backgroundColor: '#6A2C3E'
    //         }
    //     },
    //     {
    //         code: 'BACH2918882910',
    //         name: 'Sophie Asveld',
    //         Confirmed: 'Completed',
    //         Orderdate: 'Jan 28th, 2021',
    //         price: '$ 110.50',
    //         EventDate: 'Feb 2nd, 2021',
    //     },
    //     {
    //         code: 'ASDF2918882910',
    //         name: 'Sophie Asveld',
    //         Confirmed: 'Completed',
    //         Orderdate: 'Jan 28th, 2021',
    //         price: '$ 126.50',
    //         EventDate: 'Feb 2nd, 2021',
    //     },
    //     {
    //         code: 'ZXCVR2918882910',
    //         name: 'Sophie Asveld',
    //         Confirmed: 'Completed',
    //         Orderdate: 'Jan 28th, 2021',
    //         price: '$ 130.50',
    //         EventDate: 'Feb 2nd, 2021',
    //     },
    //     {
    //         code: 'BHASD2918882910',
    //         name: 'Sophie Asveld',
    //         Confirmed: 'Cancelled',
    //         Orderdate: 'Jan 28th, 2021',
    //         price: '$ 119.50',
    //         EventDate: 'Feb 2nd, 2021',
    //         button_css: {
    //             backgroundColor: '#6A2C3E'
    //         }
    //     }
    // ]

    if (!activebtn) {
        return null;
    }
    return (
        <div className='ActiveOrder'>
            <div className='item-box-map'>
                {filteredData.map((item, id) => (
                    <div className='item-box'>
                        <div className='item-box-top'>
                            <div className='item-img'>
                                <img height="100px" width="120px" src={AllImages.FoodPic} alt='' />
                            </div>
                            <div className='item-img-right'>
                                <h2 className='item-img-right-top' >{item.code}</h2>
                                <p className='item-img-right-mid'>{item.name}</p>
                                <button style={item.button_css} className='item-img-right-btn1' >
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
                                {/* <button className='item-boxs-bottom-btn1'>See Deteils</button> */}
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
                            </div>
                        </div>
                        <button className='item-boxs-bottom-btn1'>See Deteils</button>
                    </div>
                ))}</div>
        </div>
    )
}

export default PreviousOrders