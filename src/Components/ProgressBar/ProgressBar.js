import React from 'react'

const ProgressBar = ({ progress }) => {


    const container ={
        margin:0,
        padding:0
    } 

    const Parentdiv = {
        height: '0.5px',
        width: '235px',
        backgroundColor: '#EAECF3',
        borderRadius: '40px',
        margin:0,
        position: 'relative',
    }

    const Childdiv = {
        height: '0.2px',
        width: progress,
        backgroundColor: '#FF6F60',
        borderRadius: '40px',
        position: 'absolute',
        top:-0.7,
        left:1.4,
        textAlign: 'right',
    }

    // const progresstext = {
    //     padding: '10',
    //     color: 'black',
    //     fontWeight: '900'
    // }

    return (
        <div style={container}>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span>
                        {/* {progress} */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
