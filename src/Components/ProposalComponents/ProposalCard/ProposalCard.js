import React from 'react'
import './ProposalCard.css'

const ProposalCard = () => {

    const data = [
        {
            Event: '25th Wedding anniversary',
            location: 'Bangalor',
            date: 'Submitted on June 20th, 2020',
            ActBtn: 'Active',
            name: 'Daya Chitanis',
            price:'$2500.00',
            type:'Wedding & anniversry',
            Edate:'Feb 28th, 2021',
        },
        {
            Event: '25th Wedding anniversary',
            location: 'Bangalor',
            date: 'Submitted on June 20th, 2020',
            ActBtn: 'Active',
            name: 'Daya Chitanis',
            type:'Wedding & anniversry',
            Edate:'Feb 28th, 2021',
            price:'$2500.00',

        },
        {
            Event: '25th Wedding anniversary',
            location: 'Bangalor',
            date: 'Submitted on June 20th, 2020',
            ActBtn: 'Active',
            price:'$2500.00',
            type:'Wedding & anniversry',
            Edate:'Feb 28th, 2021',
            name: 'Daya Chitanis',
        },
        {
            Event: '25th Wedding anniversary',
            location: 'Bangalor',
            date: 'Submitted on June 20th, 2020',
            ActBtn: 'Active',
            price:'$2500.00',
            type:'Wedding & anniversry',
            Edate:'Feb 28th, 2021',
            name: 'Daya Chitanis',
        },
        {
            Event: '25th Wedding anniversary',
            location: 'Bangalor',
            date: 'Submitted on June 20th, 2020',
            ActBtn: 'Active',
            price:'$2500.00',
            type:'Wedding & anniversry',
            Edate:'Feb 28th, 2021',
            name: 'Daya Chitanis',
        },
        {
            Event: '25th Wedding anniversary',
            location: 'Bangalor',
            date: 'Submitted on June 20th, 2020',
            ActBtn: 'Active',
            price:'$2500.00',
            type:'Wedding & anniversry',
            Edate:'Feb 28th, 2021',
            name: 'Daya Chitanis',
        },

    ]
    return (
        <div className='ProposalCard-map'>
            {data.map((item, id) => (
                <div className='ProposalCard'>
                    <div className='PC-top'>
                        <div className='PC-top-left'>
                            <h2 className='PCTLT'>{item.Event}</h2>
                            <span className='PCTL2'>
                                <h3>{item.location}</h3>
                                <div className='PCTL-circle'></div>
                                <p>{item.date}</p>
                            </span>
                        </div>
                        <div className='PC-top-right'>
                            <div className='PCTR'>Active</div>
                        </div>
                    </div>
                    <div className='PC-mid'>
                        <div className='PCM1'>
                            <h3 className='PCM-name' >Name</h3>
                            <p className='PCM-user'>{item.name}</p>
                        </div>
                        <div className='PCM2'>
                            <h3 className='PCM-name'>Estimated budget</h3>
                            <p className='PCM-user'>{item.price}</p>
                        </div>
                        <div className='PCM3'>
                            <h3 className='PCM-name'>Event type</h3>
                            <p className='PCM-user'>{item.type}</p>
                        </div>
                        <div className='PCM4'>
                            <h3 className='PCM-name'>Event date</h3>
                            <p className='PCM-user'>{item.Edate}</p>
                        </div>
                    </div>
                    <div className='ProposalCard-footer'>
                        <button className='Proposal-footer-btn1'>See details</button>
                        <button className='Proposal-footer-btn2'>Send offer</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProposalCard