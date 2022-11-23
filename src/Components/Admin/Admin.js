import React from 'react'
import './Admin.css'
import AdminPhoto from '../../Images/AdminPhoto.png.png' 
import Arrow from '../../Images/arrow.png'

const Admin = () => {
  return (
    <div className='Admin'>
        <img width='35px' height='35px' src={AdminPhoto} />
        <div className='Admin-name'>
            <h3 className='Admin-h3'>Carmen Beltrán</h3>
            <p className='Admin-p'>Admin</p>
        </div>
        <img width='7.4px' height='12px' src={Arrow} />
    </div>
  )
}

export default Admin