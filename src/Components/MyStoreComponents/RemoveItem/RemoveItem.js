import React from 'react'
import './Removeitem.css'

const RemoveItem = ({ removeitem, onClose }) => {
    if (!removeitem) {
        return null;
    }
    return (
        <div className='RemoveItem'>
            <div className='RI-container'>
                <div className='RI-top'>
                    <h2>Remove this item</h2>
                    <p>Are you sure you want to remove this <br />
                        item from your list?</p>
                </div>
                <div className='RI-btn'>
                    <button onClick={onClose} className='btn-no'>No</button>
                    <button onClick={onClose} className='btn-Yes'>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default RemoveItem