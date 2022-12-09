import React from 'react'
import { useState } from 'react';
import RemoveItem from '../RemoveItem/RemoveItem';
import Unpublish from '../Unpublish/Unpublish';
import './MoreOption.css'

const MoreOption = ({ moreOption, onClose }) => {
  const [removeitem, setRemoveitem] = useState(false)
  const [unpublish, setUnpublish] = useState(false)
  if (!moreOption) {
    return null;
  }
  return (
    <div className='MoreOption'>
      <div className='MoreOption-btn'>See item details</div>
      <div className='MoreOption-btn'>Edit item</div>
      <div onClick={() => setUnpublish(true)} className='MoreOption-btn'>Set item unpublish</div>
      <Unpublish unpublish={unpublish} onClose={() => setUnpublish(false)} />
      <div onClick={() => setRemoveitem(true)} className='MoreOption-btn'>Remove items</div>
      <RemoveItem removeitem={removeitem} onClose={() => setRemoveitem(false)} />
    </div>
  )
}

export default MoreOption