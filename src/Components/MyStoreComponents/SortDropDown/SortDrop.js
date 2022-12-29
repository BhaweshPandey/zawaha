import React, { useState } from 'react'
import './SortDrop.css'
import Arrowup from '../../../Images/Arrowup.png'
import clickIcon from '../../../Images/click.png'

export const sortData = [
  { name: "Ascending", id: 101 },
  { name: "Descending", id: 102 },
  { name: "Higher price - lower price", id: 103 },
  { name: "Lower price - higher price", id: 104 },
  { name: "Higher period - lower rating", id: 104 },
  { name: "Lower period - higher rating", id: 105 },
  { name: "Lastly added", id: 106 },
  { name: "Earlier added", id: 107 }
]
const SortDrop = (props) => {
  const [sortActive, setSortActive] = useState("Ascending");
  if (!props.sort) {
    return null;
  }
  return (
    <div className='SortDrop'>
      <div className='Filter-heading'>
        <h2 className='Sort-heading-text'>Sort </h2>
        <img className='Arrowup' height='10px' src={Arrowup} onClick={props.onClose} />
      </div>
      {sortData.map((item, id) => (
        <div
          key={id}
          onClick={
            () =>
              // alert("this is pressed")
              props.setSortValue(item.name)

          }
          className={`${props.sortValue === item.name ? "SortActive" : "Sort-text"}`}
        >
          {/* {sortActive === item.name ? <img className='clickIcon' src={clickIcon} /> : ""} */}
          {props.sortValue === item.name ? <img className='clickIcon' src={clickIcon} /> : ""}
          {item.name}
        </div>
      ))}
      <button
        onClick={props.onClose}
        className='dropdown-inearbtn'>Apply</button>
    </div>
  )
}

export default SortDrop
