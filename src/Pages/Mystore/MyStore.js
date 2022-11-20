import React from 'react'
import './MyStore.css'
import Bitmap from '../../Images/Bitmap.jpg';
import Star from '../../Images/Star.jpg';
import Shape from '../../Images/Shape.jpg';
import bell from '../../Images/menutop copy.png';
import SelectsBox from '../../Components/MyStoreComponents/SelectsBox/SelectsBox';
import ItemNoBox from '../../Components/MyStoreComponents/ItemNoBox/ItemNoBox';
import { BsReception0 } from "react-icons/bs";
import Filter from '../../Components/MyStoreComponents/Filter/Filter';
import Sort from '../../Components/MyStoreComponents/Sort/Sort';
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import FoodCard from '../../Components/MyStoreComponents/MyStoreFoodCard/FoodCard';

const MyStore = () => {
  return (
    <div className='MyStore'>
      <div className='Mystore-header'>
        <h2>My Store</h2>
        <img height='50px' src={bell} alt='' />
      </div>
      <div className='Mystore-location'>
        <div className='Mystore-location-profile'>
        <img src={Bitmap} alt='' />
        </div>
        <div className='Mystore-location-shop' >
          <h2 className='Mystore-location-shop-heading'>Vendor name lorem ipsum</h2>
          <div className='Mystore-location-shop-details'>
            <div className='Mystore-locatin-shop-rating'>
              <img height='15px' src={Star} alt='' />
              <p>4.2</p>
            </div>
            <div className='Mystore-location-shop-address'>
              <img height='15px' src={Shape} alt='' />
              <p>Bangelore</p>
            </div>
            <div className='Myshop-location-shop-items'>
              <p>/Food, drinks & caterings</p>
            </div>
          </div>
          <div className='Mystore-location-information'>
            <button className='information-btn'>Information</button>
            <button className='customer-btn'>Customer rating</button>
          </div>
        </div>
        <ItemNoBox />
      </div>
      <div className='MyStore-selects'>
        <SelectsBox all={"All category"} Category1={"Category name here"} Category2={"Category name here"} Category3={"Category name here"} Category4={"Category name here"} Category5={"Category name here"} style={"Category"} />
        <BsReception0/>
        <input type="text" placeholder="Search" />
        <Filter style={"Filter"} />
        <Sort style={"Sort"}/>
        <IoIosAddCircleOutline />
      </div>
      <div className='Food-card'>
        <FoodCard />
      </div>
    </div>
  )
}

export default MyStore
