import React from 'react'
import './SelectBoxDay.css'

const SelectBoxDay = () => {
  return (
    <div className='SelectBoxDay'>
        <select className='SelectBoxDay-s'>
            <option value={"Today"}>Today</option>
            <option value={"This week"}>This week</option>
            <option value={"This month"}>This month</option>
            <option value={"This year"}>This year</option>
        </select>
    </div>
  )
}

export default SelectBoxDay