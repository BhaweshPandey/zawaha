import React, { useState } from 'react'
import Header from '../../Components/MyStoreComponents/Header/Header'
import './Proposal.css'
import { BsCaretDownFill } from "react-icons/bs";
import Filter from '../../Components/MyStoreComponents/Filter/Filter';
import Sort from '../../Components/MyStoreComponents/SortDropDown/SortDrop';
import AllImages from '../../Assets/AllImages';
import ProposalCard from '../../Components/ProposalComponents/ProposalCard/ProposalCard';

const Proposal = () => {
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState(false);
  return (
    <div className='Proposal'>
      <Header name={"Proposal"} />
      <div className='proposal-rol2'>
        <div className='h-right' >
          <input className='h-right-input' type='search' placeholder='Search' />
          <button onClick={() => setFilter(true)} className='Filter-btn'>Filter <BsCaretDownFill /> </button>
          <Filter filter={filter} onclose={() => setFilter(false)} />
          <button onClick={() => setSort(true)} className='Sort-btn'>Sort <BsCaretDownFill /> </button>
          <Sort sort={sort} onClose={() => setSort(false)} />
        </div>
        <div>
          <div className='proposal-btn'>My proposal <img src={AllImages.ArrowRight} /></div>
        </div>
      </div>
      <div className='proposal-mid'>
        <ProposalCard />
      </div>
    </div>
  )
}

export default Proposal