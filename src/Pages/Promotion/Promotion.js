import React, {useState} from 'react'
import Header from '../../Components/MyStoreComponents/Header/Header'
import './Promotion.css'
import { BsCaretDownFill } from "react-icons/bs";
import Filter from '../../Components/MyStoreComponents/Filter/Filter';
import Sort from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import AllImages from '../../Assets/AllImages';
import InAppAdvertising from '../../Components/PromotionComponent/InAppAdvertising/InAppAdvertising';
import StorePromotion from '../../Components/PromotionComponent/StorePromotion/StorePromotion';

const Promotion = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [promotionbtn , setPromotionbtn] = useState('InAppAdvertising');

  return (
    <div className='Promotion'>
      <Header name={"Promotion"} />
      <div className='heading'>
        <span className='h-left'>
          <h4 onClick={()=> setPromotionbtn('InAppAdvertising') }
           className={` ${promotionbtn == 'InAppAdvertising' ? 'advertisclass' : ''} h-left-1 `}>
           In app advertising
           </h4>
          <h4 onClick={ () => setPromotionbtn('StorePromotion') }
           className={` ${promotionbtn == 'StorePromotion' ? 'advertisclass' : ''} h-left-2 `}>
           Store promotion</h4>
        </span>
        <div className='h-right'>
          <input className='h-right-input' type='Search' placeholder='Search' />
          <button onClick={() => setFilter(true)} className='Filter-btn'>Filter <BsCaretDownFill /> </button>
          <Filter filter={filter} onclose={() => setFilter(false)} />
          <button onClick={() => setSort(true)} className='Sort-btn'>Sort <BsCaretDownFill /> </button>
          <Sort sort={sort} onClose={() => setSort(false)} />
          <img src={AllImages.Addbtn} />
        </div>
      </div>
      { promotionbtn == 'InAppAdvertising' ? 
      <InAppAdvertising promotionbtn={promotionbtn} /> :
      <StorePromotion promotionbtn={promotionbtn}  /> }
    </div>
  )
}

export default Promotion