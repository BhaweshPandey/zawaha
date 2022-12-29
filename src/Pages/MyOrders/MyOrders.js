import React, { useState } from 'react'
import './MyOrders.css'
import Header from '../../Components/MyStoreComponents/Header/Header';
import { BsCaretDownFill } from "react-icons/bs";
import Sort from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import Filter from '../../Components/MyStoreComponents/Filter/Filter';
import ActiveOrder from '../../Components/MyOrderComponents/ActiveOrder/ActiveOrder';
import PreviousOrders from '../../Components/MyOrderComponents/PreviousOrders/PreviousOrders';
import AData from '../../Data/MyOrders.json'

const MyOrders = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [activebtn, setActivebtn] = useState('active')
  const [inputText, setInputText] = useState('')
  const [sortValue, setSortValue] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className='MyOrders'>
      <Header name={"MyOrders"} />
      <div className='heading'>
        <span className='h-left'>
          <h4 className={` ${activebtn === 'active' ? 'ActiveOrderclass' : 'h-left-1'} `}
            onClick={() => setActivebtn('active')}
          >Active Orders</h4>
          <h4 className={`${activebtn === 'noActive' ? 'ActiveOrderclass' : 'h-left-2'} `}
            onClick={() => setActivebtn('noActive')}
          >Previous Orders</h4>
        </span>
        <div className='h-right'>
          <input className='h-right-input' onChange={inputHandler} type='Search' placeholder='Search' />
          <button onClick={() => setFilter(true)} className='Filter-btn'>Filter <BsCaretDownFill /> </button>
          <Filter filter={filter} onclose={() => setFilter(false)} />
          <button onClick={() => setSort(true)} className='Sort-btn'>Sort <BsCaretDownFill /> </button>
          <Sort sortValue={sortValue} setSortValue={setSortValue} sort={sort} onClose={() => setSort(false)} />
        </div>
      </div>

      {activebtn === 'active' ? <ActiveOrder sortValue={sortValue} input={inputText} activebtn={activebtn} /> :
        <PreviousOrders sortValue={sortValue} input={inputText} activebtn={activebtn} />}
    </div>
  )
}

export default MyOrders