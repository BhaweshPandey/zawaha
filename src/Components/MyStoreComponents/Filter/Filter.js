import React, { useState } from 'react'
import './Filter.css'
import Arrowup from '../../../Images/Arrowup.png'


const Filter = ({item,onclose}) => {
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
              <button className='Filter-select-btn'
              >Service only</button>
              <button className='Filter-select-btn'>Product only</button>
             </div>
          </div>
          <div>
            <h3 className='Filter-h3'>Event suitability</h3>
          </div>
        </div>
    </div>
  )
}


export default Filter