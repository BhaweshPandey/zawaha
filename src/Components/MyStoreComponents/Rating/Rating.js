import React from 'react';
import './Rating.css';
import closeArrow from '../../../Images/NotificationArrow.png';
import Star from '../../../Images/Star.jpg'
import menpic from '../../../Images/menpic.png'
import graph from '../../../Images/graph.png'
import AllImages from '../../../Assets/AllImages';
import ProgressBar from '../../../Components/ProgressBar/ProgressBar';

const Rating = ({ rating, onclose }) => {
    const data = [
        {
            pic: AllImages.MenPic2,
            name: 'Isak Johannesson',
            date: 'June 21th, 2020',
            rating: '4.8',
            text: 'Lorem ipsum dolor sit amet, consectetur dero adipiscing elit  consectetur dero adipiscing elit consectetur dero .'
        },
        {
            pic: AllImages.WomenPic,
            name: 'Raaid El Syed',
            date: 'June 21th, 2020',
            rating: '4.8',
            text: 'Lorem ipsum dolor sit amet, consectetur dero adipiscing elit  consectetur dero adipiscing elit consectetur dero .'
        },
        // {
        //     pic: AllImages.MenPic3,
        //     name: 'Afamefuna Okparo',
        //     date: 'June 21th, 2020',
        //     rating: '4.8',
        //     text: 'Lorem ipsum dolor sit amet, consectetur dero adipiscing elit  consectetur dero adipiscing elit consectetur dero .'
        // }
    ]

    const Progressbar = [
        {
            rate: '5',
            width: '230px',
            total: '108',
        },
        {
            rate: '4',
            width: '50px',
            total: '10'
        },
        {
            rate: '3',
            width: '30px',
            total: '4'
        },

    ]

    if (!rating) {
        return null;
    }
    return (
        <div className='Rating'>
            <div className='Rating-header'>
                <h1 className='Notification-h1'>
                    <img src={AllImages.ArrowClose} className='NotificationArrow' onClick={onclose} />  Customer ratings</h1>
            </div>
            <div className='Rating-top'>
                <div className='Rating-top-left'>
                    <h1 className='Rating-top-left-h1'>3.5</h1>
                    <p className='Rating-top-left-p'>18 Rating</p>
                </div>

                <div className='map'>
                    {Progressbar.map((num) => (
                        <div className='Rating-top-Right'>
                            <div className='Rating-span'>
                                <img className='Rating-span-img' height='15px' src={AllImages.StarIcon} />
                                <h3 className='Rating-span-rate'>{num.rate}</h3>
                                {/* <input type='Range' min='0' max='10' step='8' /> */}
                                <div className='Progress'><ProgressBar progress={num.width} /></div>
                                <p className='Rating-span-num'>{num.total}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='Rating-mid'>
                <div className='r-m-top'>
                    <div className='rmt-left'>
                        <img className='rmt-img' height='35px' src={AllImages.MenPic} />
                        <div className='r-m-top-name'>
                            <h2 className='rmtn-name'>Wilhelm Dowall</h2>
                            <p className='rmtn-date'>June 21th, 2020</p>
                        </div>
                    </div>
                    <span className='r-m-top-rating'>
                        <img className='rmtr-img' height='16px' src={AllImages.StarIcon} />
                        <p className='rmtr-rating'>4.8</p>
                    </span>
                </div>
                <div className='r-m-mid' >
                    <p className='rmm-text'>Lorem ipsum dolor sit amet, consectetur dero adipiscing elit <br />
                        consectetur dero adipiscing elit consectetur dero .</p>
                </div>
                <span className='rmm-img'>
                    <img src={AllImages.Ghaph} />
                    <img src={AllImages.Ghaph} />
                </span>
            </div>

            {data.map((value) => (
                <div className='Rating-mid2'>
                    <div className='r-m-top'>
                        <div className='rmt-left'>
                            <img className='rmt-img' height='35px' src={value.pic} />
                            <div className="r-m-top-name">
                                <h2 className="rmtn-name" >{value.name}</h2>
                                <p className="rmtn-date" >{value.date}</p>
                            </div>
                        </div>
                        <span className='r-m-top-rating'>
                            <img className='rmtr-img' height='16px' src={AllImages.StarIcon} />
                            <p className='rmtr-rating'>{value.rating}</p>
                        </span>
                    </div>
                    <div className='r-m-mid'>
                        <p className='rmn-text' >
                            {value.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Rating