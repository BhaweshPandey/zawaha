import React from 'react'
import './homeTopBox.css'

const HomeTopBox = ({styles , text , number,circleStyle}) => {
  return (
    <div className={styles}>
    <p className='homeTopBox-p'>{text}</p>
    <h2 className='homeTopBox-h2'>{number}</h2>
    </div>
  )
}

export default HomeTopBox