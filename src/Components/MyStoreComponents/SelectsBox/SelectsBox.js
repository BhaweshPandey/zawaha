import React from 'react'
import './SelectsBox.css'

const SelectsBox = ({all , Category1 , Category2 , Category3 , Category4 ,Category5, style} ) => {
  return (
    <div>
        <label for="category"></label>
        <select className={style}>
            <option value="All category">{all}</option>
            <option value="Category name here">{Category1}</option>
            <option value="Category name here">{Category2}</option>
            <option value="Category name here" >{Category3}</option>
            <option value="Category name here" >{Category4}</option>
            <option value="Category name here" >{Category5}</option>
        </select>
    </div>
  )
}

export default SelectsBox