import React, { useEffect } from 'react'
import './AddNewItem.css'
import backbtn from '../../../Images/backbtn.png'

const AddNewItem = ({ additem, onClose }) => {
    if (!additem) {
        return null;
    }
    return (
        <div className='AddNewItem'>
            <span className='AddNewItem-header'>
                <h2> <img className='ANI-backbtn' height='20px' onClick={onClose} src={backbtn} /> Add new item</h2>
            </span>
            <span>
                <button className='ANI-btn'> Item’s details </button>
                <button className='ANI-btn'> Item’s variant </button>
                <button className='ANI-btn'> stock details </button>
            </span>
            {/* <hr /> */}
            <div className='AddNewItem-mid1'>
                <div>
                    <p className='ANI-p'>Item type</p>
                    <select className='ANI-Select'>
                        <option value='Service'>Service</option>
                        <option value='Product'>Product</option>
                    </select>
                </div>
                <div>
                    <p className='ANI-p'>Item name</p>
                    <input className='ANI-input' type='text' placeholder='Write name' />
                </div>
                <div>
                    <p className='ANI-p'>Description</p>
                    <input className='ANI-input' type='text' placeholder='Write description…' />
                </div>
            </div>
            <div className='AddNewItem-mid2'>
                <div>
                    <p className='ANI-p'>Minimum notice</p>
                    <input className='ANI-input' type='text' placeholder='Write name' />
                </div>
                <div>
                    <p className='ANI-p'>Minimum order</p>
                    <input className='ANI-input' type='text' placeholder='Write name' />
                </div>
                <div>
                    <p className='ANI-p'>Category</p>
                    <select className='ANI-Select'>
                        <option>Category name here</option>
                        <option>Category name here</option>
                        <option>Category name here</option>
                        <option>Category name here</option>
                    </select>
                </div>
                <div>
                    <h3 className='ANI-h3'>This item require delivery</h3>
                </div>
                <div>
                    <h3 className='ANI-h3'>This item is pre-order</h3>
                </div>
                <button className='ANI-btnNext'>Next</button>
            </div>
        </div>
    )
}

export default AddNewItem