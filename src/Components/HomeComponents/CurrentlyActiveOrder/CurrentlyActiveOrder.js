import React, { useState } from 'react'
import './CurrentlyActiveOrder.css'
import { BsChevronRight } from "react-icons/bs";
import Arrow from '../../../Images/arrow.png'
import Data from '../../../Data/Home.json'

const CurrentlyActiveOrder = () => {
    // const [activeButton, setActiveButton] = useState("placedOrders")
    const [activeData, setActiveData] = useState(Data.OrderPlaced)
    // const orders = {
    //     placedOrders: [
    //         {

    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         }
    //     ],
    //     confirmedOrders: [
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         }
    //     ],
    //     onProcessOrders: [
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         }
    //     ],
    //     completedOrders: [
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         },
    //         {
    //             name: "Elise Beverley",
    //             wedding: "Wedding & anniversary",
    //             price: "$240.00 4 items",
    //             date: "Ordered on Jan 2nd, 2021",
    //         }
    //     ]
    // }



    return (
        <div className='CurrentlyActiveOrder' >
            <div className='CurrentlyActiveOrder-heading'>
                <h3>Currently active orders</h3>
                <h3>See all orders <BsChevronRight /></h3>
            </div>
            <div className='CurrentlyActiveOrder-button'>
                <button
                    onClick={() => setActiveData(Data.OrderPlaced)}
                    className={`${activeData === Data.OrderPlaced ? "activeButtonClass" : ""} CurrentlyActiveOrder-button-1`}>Order placed</button>
                <button
                    onClick={() => setActiveData(Data.Confirmed)}
                    className={`${activeData === Data.Confirmed ? "activeButtonClass" : ""}
                    CurrentlyActiveOrder-button-2`}>Confirmed</button>
                <button
                    onClick={() => setActiveData(Data.OnProcess)}
                    className={`${activeData === Data.OnProcess ? "activeButtonClass" : ""} CurrentlyActiveOrder-button-3`}>On process</button>
                <button
                    onClick={() => setActiveData(Data.Completed)}
                    className={`${activeData === Data.Completed ? "activeButtonClass" : ""} CurrentlyActiveOrder-button-4`}>Completed</button>
            </div>

            <div className='CurrentlyActiveOrder-box-map'>
                {activeData.map((item) => (
                    <div className='CurrentlyActiveOrder-box'>
                        <div className='CurrentlyActiveOrder-box-inear'>
                            <h3 className='CurrentlyActiveOrder-box-inear-c1-r1'>{item.name}</h3>
                            <p className='CurrentlyActiveOrder-box-inear-c1-r2'>{item.wedding}</p>
                        </div>
                        <div className='CurrentlyActiveOrder-box-inear-text'>
                            <div className='CurrentlyActiveOrder-box-inear'>
                                <h3 className='CurrentlyActiveOrder-box-inear-c2-r1'>{item.price}</h3>
                                <p className='CurrentlyActiveOrder-box-inear-c2-r2'>{item.date}</p>
                            </div>
                            <img className='CurrentlyActiveOrder-box-inear-arrow' src={Arrow} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CurrentlyActiveOrder