import React, { useState } from 'react'
import './SortDrop.css'
import Arrowup from '../../../Images/Arrowup.png'
import clickIcon from '../../../Images/click.png'

const SortDrop = ({ sort, onClose }) => {
  const [active, setActive] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const text = [
    { name: "Ascending" },
    { name: "Descending" },
    { name: "Higher price - lower price" },
    { name: "Lower price - higher price" },
    { name: "Higher period - lower rating" },
    { name: "Lower period - higher rating" },
    { name: "Lastly added" },
    { name: "Earlier added" }
  ]

  const handleSorting = (e) => {
    // console.log("this is e ", e)
    setActive(!active)
    setSortValue(e)
  }

  if (!sort) {
    return null;
  }
  return (
    <div className='SortDrop'>
      <div className='Filter-heading'>
        <h2 className='Sort-heading-text'>Sort </h2>
        <img className='Arrowup' height='10px' src={Arrowup} onClick={onClose} />
      </div>
      {/* {console.log("this is sort vallue : ", sortValue, "\n", active)} */}
      {text.map((item) => (
        <div className='Sort-text' onClick={
          (e) => {
            handleSorting(item.name)
            // console.log("this is item comaparison ", sortValue === item.name)
          }
        }>
          {active && sortValue == item.name ? <img className='clickIcon' src={clickIcon} /> : ""}
          {item.name}
        </div>))
      }
      {/* <p className='Sort-text'>Descending</p>
      <p className='Sort-text'>Higher price - lower price</p>
      <p className='Sort-text'>Lower price - higher price</p>
      <p className='Sort-text'>Higher period - lower rating</p>
      <p className='Sort-text'>Lower period - higher rating</p>
      <p className='Sort-text'>Lastly added</p>
      <p className='Sort-text'>Earlier added</p> */}
      <button
        onClick={onClose}
        className='dropdown-inearbtn'>Apply</button>
    </div>
  )
}

export default SortDrop
