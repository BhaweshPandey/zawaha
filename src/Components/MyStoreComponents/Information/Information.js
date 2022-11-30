import React from 'react'
import './Information.css'
import closeArrow from '../../../Images/NotificationArrow.png'

const Information = ({information, onclose}) => {
    if(!information){
    return null;
    }
  return (
    <div className='Information'>
        <div className='information-heading'>
            <h1 className='Notification-h1'>
            <img src={closeArrow} className='NotificationArrow' onClick={onclose}/>  Store Informations</h1>
        </div>
        <div className='information-mid1'>
            <p className='information-p'>Store name</p>
            <h4 className='information-h4'>Lorem vendor name</h4>
        </div>
        <div className='information-mid2'>
            <p className='information-p'>Store category</p>
            <select className='information-select' style={{height:'50px'}}>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Music & entertainment' selected>Music & entertainment</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
                <option value='Category name lorem ipsum'>Category name lorem ipsum</option>
            </select>
        </div>
        <div className='information-mid3'>
            <p className='information-p'>Store descriptions</p>
            <h4 className='information-text'>Exercitation ullamco laboris nisi ut aliquip ex ea <br/>
                commodo consequat. Duis aute irure dolor in <br/>
                reprehenderit in voluptate velit esse cillum<br/>
                dolore eu fugiat nulla pariatur. Excepteur sint <br/>
                occaecat cupidatat non proident, sunt in culpa<br/>
                qui officia deserunt mollit anim id est laborum.
            </h4>
            <h4 className='information-text'>Duis aute irure dolor in reprehenderit in<br/> 
                voluptate velit esse cillum dolore eu fugiat nulla <br/>
                pariatur. Excepteur sint occaecat cupidatat non<br/>
                proident, sunt in culpa qui officia deserunt mollit<br/>
                anim id est laborum.
            </h4>
        </div>
        <div className='information-mid4'>
            <p className='information-p'>Store address</p>
            <h4 className='information-text'>Old Airport Raod, Kodihalli, Bangalore 560008,<br/>
                Karnataka, India, HAL Old Airport Rd, Domlur,<br/>
                Bengaluru, Karnataka.
            </h4>
        </div>
        <div className='information-mid5'>
            <p className='information-p'>Term and conditions</p>
            <h4 className='information-text'>Duis aute irure dolor in reprehenderit in<br/>
                voluptate velit esse cillum dolore eu fugiat nulla<br/> 
                pariatur. Excepteur sint occaecat cupidatat non<br/> 
                proident.
            </h4>
        </div>
    </div>
  )
}

export default Information