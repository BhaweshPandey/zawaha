import React from 'react'
import './SortDrop.css'

const SortDrop = ({sort ,onClose} ) => {
  if (!sort) {
    return null;
  }
  return (
    <div className='SortDrop'>
          <p>Ascending</p>
          <p >Descending</p>
          <p >Higher price - lower price</p>
          <p >Lower price - higher price</p>
          <p >Higher period - lower rating</p>
          <p >Lastly added</p>
          <p >Earlier added</p>
          <button onClick={onClose} className='dropdown-inearbtn'>Apply</button>
    </div>
  )
}

export default SortDrop