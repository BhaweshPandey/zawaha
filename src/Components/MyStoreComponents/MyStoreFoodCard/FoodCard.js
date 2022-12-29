import React from 'react'
import './FoodCard.css'
import { useState } from 'react'
import MoreOption from '../MoreOptions/MoreOption'
import AllImages from '../../../Assets/AllImages'


export const FoodData = [
  {
    name: 'Cheese Pizza',
    price: '$30.89',
    FoodImg: AllImages.FoodPic,
    moreImg: AllImages.MoreItemPic
  },
  {
    name: 'Veggie Pizza',
    price: '$35.89',
    FoodImg: AllImages.FoodPic,
    moreImg: AllImages.MoreItemPic
  },
  {
    name: 'Pepperoni Pizza',
    price: '$36.89',
    FoodImg: AllImages.FoodPic,
    moreImg: AllImages.MoreItemPic
  },
  {
    name: 'Meat Pizza',
    price: '$32.89',
    FoodImg: AllImages.FoodPic,
    moreImg: AllImages.MoreItemPic
  },
  {
    name: 'Margherita Pizza',
    price: '$39.89',
    FoodImg: AllImages.FoodPic,
    moreImg: AllImages.MoreItemPic
  },
  {
    name: 'Hawaiian Pizza',
    price: '$45.89',
    FoodImg: AllImages.FoodPic,
    moreImg: AllImages.MoreItemPic
  }
]

const FoodCard = (props) => {
  const [moreOption, setMoreOption] = useState(false)
  const [filterSort, setFilterSort] = useState("")


  // 👇️ filter by String property SEARCHING
  const filteredData = FoodData.filter((value) => {
    if (props.input === '') {
      return value;
    }
    else {
      return value.name.toLowerCase().includes(props.input)
    }
  })
  // 👇️ sort by String property sorting
  FoodData.sort((a, b) => {
    if (props.sortValue === "Ascending") {
      return a.name > b.name ? 1 : -1;
    }
    else if (props.sortValue === "Descending") {
      return a.name < b.name ? 1 : -1;
    }
    else if (props.sortValue === "Lower price - higher price") {
      return a.price > b.price ? 1 : -1;
    }
    else if (props.sortValue === "Higher price - lower price") {
      return a.price < b.price ? 1 : -1;
    }
  })



  return (
    <div className='FoodCard-map'>
      {filteredData.map((item,id) => (
        <div key={id} className='FoodCard'>
          {/* <label><input className='foodcard-checkbox' type="checkbox" /></label> */}
          <img className='food-img' width='300px' height='150px' src={item.FoodImg} alt='' />
          {/* <div className='food-img-inear'>4.2</div> */}
          <p className='FoodCard-p'>{item.name}</p>
          <div className='FoodCard-rs'>
            <h2 className='FoodCard-h'>{item.price}</h2>
            <img onClick={() => setMoreOption(item.price)} className='foodcard-point' height='30px' src={item.moreImg} alt='' />
            {moreOption === item.price ? <MoreOption moreOption={moreOption} onClose={() => setMoreOption(false)} /> : ""}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoodCard