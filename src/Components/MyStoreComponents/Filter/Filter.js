import React, { useState } from 'react'
import './Filter.css'
import Arrowup from '../../../Images/Arrowup.png'

const Filter = ({item,onclose}) => {
  const [isActive , setIsActive] =useState('false');
  const [isActiveButton , setIsActiveButton] =useState('no');

  if(!item){
    return null;
  }
  return (
    <div className='Filter'>
        {/* <label for="category">Filter</label> */}
        {/* <select id="Category">
            <option value="Filter">Filter</option>
        </select> */}
        <div className='Filter-heading'>
          <h2 className='Filter-heading-text'>Filter </h2>
          <img className='Arrowup' height='10px' src={Arrowup} onClick={onclose} />
        </div>
        <div className='Filter-mid'>
          <div className='Filter-input-select'>
             <h3 className='Filter-h3'>Item type</h3>
             <div className='Filter-span'>
              <button onClick={()=> setIsActive('true')}
               className={`${isActive == 'true' ? "isActiveClass" : ""} Filter-select-btn`}
              >Service only</button>
              <button onClick={()=> setIsActive('false')}
               className={`${isActive == 'false' ? "isActiveClass" : ""} Filter-select-btn`}>Product only</button>
             </div>
          </div>
          <div>
            <h3 className='Filter-h3'>Event suitability</h3>
            <select className="select-Event" for="EventName" >
              <option selected value="Select" >Select</option>
              <option value="Event name here" >Event name here</option>
              <option value="Event name here" >Event name here</option>
              <option value="Wedding" >Wedding</option>
              <option value="anniversary" >anniversary</option>
              <option value="outing" >outing</option>
            </select>
          </div>
          <div>
            <h3 className='Filter-h3'>Service or product type</h3>
            <select className="select-Event" for="TypeName" >
              <option selected value="Select" >Select</option>
              <option value="Type name here" >Type name here</option>
              <option value="Type name here" >Type name here</option>
              <option value="Buffet, decoration, caterings" >Buffet</option>
              <option value="decoration" >decoration</option>
              <option value="caterings" >caterings</option>
            </select>
          </div>
          <div>
            <h2 className='Filter-h3'>Targeted item</h2>
            <span className='spanSelect'>
              <button onClick={()=> setIsActiveButton('yes')}
               className={`${isActiveButton == 'yes' ? "isActiveClass" : ""} Filter-select-btn`}
              >Below 3</button>
              <button onClick={()=> setIsActiveButton('no')}
               className={`${isActiveButton == 'no' ? "isActiveClass" : ""} Filter-select-btn`}>Above 3</button>
               <button onClick={()=> setIsActiveButton('ok')}
               className={`${isActiveButton == 'ok' ? "isActiveClass" : ""} Filter-select-btn`}>5 only</button>
             </span>
          </div>
          <div>
            <h2 className='Filter-h3'>Price</h2>
            <label className='Filter-label'>
              <input className='Filter-input' type='text' placeholder='Min.Price' />
              <input className='Filter-input' type='text' placeholder='Max.Price' />
            </label>
          </div>
          <button onClick={onclose} className='Filter-button'>Apply</button>
        </div>
    </div>
  )
}


export default Filter
