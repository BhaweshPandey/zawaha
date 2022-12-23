import React, { useState } from 'react'
import './MyStore.css'
import SelectsBox from '../../Components/MyStoreComponents/SelectsBox/SelectsBox';
import ItemNoBox from '../../Components/MyStoreComponents/ItemNoBox/ItemNoBox';
import { BsReception0 } from "react-icons/bs";
import Filter from '../../Components/MyStoreComponents/Filter/Filter';
import Sort from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import { BsSearch } from "react-icons/bs";
import FoodCard from '../../Components/MyStoreComponents/MyStoreFoodCard/FoodCard';
import Header from '../../Components/MyStoreComponents/Header/Header';
import { BsCaretDownFill } from "react-icons/bs";
import Information from '../../Components/MyStoreComponents/Information/Information';
import Rating from '../../Components/MyStoreComponents/Rating/Rating';
import SortDrop from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import AddNewItem from '../../Components/MyStoreComponents/AddNewItem/AddNewItem';
import AllImages from '../../Assets/AllImages';

const MyStore = () => {

  const [filter, setFilter] = useState(false);
  const [information, setInformation] = useState(false);
  const [rating, setRating] = useState(false);
  const [sort, setSort] = useState(false);
  const [additem, setAdditem] = useState(false);
  const [input , setInput ] = useState("")

  let Handlerinput = (e) =>{
    var lowerCase = e.target.value.toLowerCase();
    setInput (lowerCase);
  }

  return (
    <div className='MyStore'>
      <Header name={"My Store"} />
      <div className='Mystore-location'>
        <div className='Mystore-location-profile'>
          <img className='Mystore-location-pic' src={AllImages.MyStoreShopPic} alt='' />
        </div>
        <div className='Mystore-location-shop' >
          <h2 className='Mystore-location-shop-heading'>Vendor name lorem ipsum</h2>
          <div className='Mystore-location-shop-details'>
            <div className='Mystore-locatin-shop-rating'>
              <img height='15px' className='Mystore-locatin-shop-ratin-img' src={AllImages.StarIcon} alt='' />
              <p>4.2</p>
            </div>
            <div className='Mystore-location-shop-address'>
              <img height='15px' className='Mystore-locatin-shop-address-img' src={AllImages.LocationIcon} alt='' />
              <p>Bangelore</p>
            </div>
            <div className='Myshop-location-shop-items'>
              <p>/Food, drinks & caterings</p>
            </div>
          </div>
          <div className='Mystore-location-information'>
            <button className='information-btn' onClick={() => setInformation(true)}>Information</button>
            <Information information={information} onclose={() => setInformation(false)} />
            <button className='customer-btn' onClick={() => setRating(true)}>Customer rating</button>
            <Rating rating={rating} onclose={() => setRating(false)} />
          </div>
        </div>
        <ItemNoBox />
      </div>
      <div className='MyStore-selects'>
        <div className='MyStore-selects-left'>
          <SelectsBox all={"All category"} Category1={"Category name here"} Category2={"Category name here"} Category3={"Category name here"} Category4={"Category name here"} Category5={"Category name here"} style={"Category"} />
          <img src={AllImages.MoreItemPic} className='pointer' height='35px' />
        </div>
        <div className='MyStore-selects-right'>
          <input onChange={Handlerinput} type="search" placeholder="Search" />
          {/* <Filter style={"Filter"} /> */}
          <button className='Filter-btn' onClick={() => setFilter(true)}>Filter <BsCaretDownFill /> </button>
          <Filter filter={filter} onclose={() => setFilter(false)} />
          {/* <Sort style={"Sort"}/> */}
          <button onClick={() => setSort(true)} className='Sort-btn'>Sort <BsCaretDownFill /> </button>
          <SortDrop sort={sort} onClose={() => setSort(false)} />
          {/* <image source={Images.bannerList2} /> */}
          <img onClick={() =>
          setAdditem(true)
          } className='Addbtn' height='35px' src={AllImages.Addbtn} />
          <AddNewItem additem={additem} onClose={() => setAdditem(false)} />
        </div>
      </div>
      <div className='Food-card'>
        <FoodCard input={input} />
      </div>
    </div>
  )
}

export default MyStore
