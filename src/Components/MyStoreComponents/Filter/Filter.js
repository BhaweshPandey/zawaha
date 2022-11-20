import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div className='Filter'>
        <label for="category"></label>
        <select id="Category">
            <option value="Filter">Filter</option>
        </select>
    </div>
  )
}

export default Filter