import React from 'react'
import './FoodCard.css'
import Food from '../../../Images/Bitmap.png'
import points from '../../../Images/Combined Shape Copy.png'

const FoodCard = () => {
  return (
    <div className='FoodCard-map'>
    {[1,2,3,4,5,6].map((item,setitem)=>(
    <div className='FoodCard'>
        <label><input className='foodcard-checkbox' type="checkbox" /></label>
        <img className='food-img' width='300px' height='150px' src={Food} alt='' />
        <p className='FoodCard-p'>Item name lorem ipsum dolor</p>
        <div className='FoodCard-rs'>
            <h2 className='FoodCard-h'>$30.89</h2>
            <img className='foodcard-point' height='5px' src={points} alt='' />
        </div>
    </div>
  ))}
</div>)
}

export default FoodCard