import React from 'react'
import './Unpublish.css'

const Unpublish = ({ unpublish, onClose }) => {
    if (!unpublish) {
        return null;
    }
    return (
        <div className='Unpublish'>
            <div className='RI-container'>
                <div className='RI-top'>
                    <h2>Set this item to unpublish</h2>
                    <p>Are you sure you want to set this item to <br />
                        unpublish,so your customer wont see it?</p>
                </div>
                <div className='RI-btn'>
                    <button onClick={onClose} className='btn-no'>No</button>
                    <button onClick={onClose} className='btn-Yes'>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default Unpublish