import React from 'react'

const ProgressBar = ({progress}) => {


    const Parentdiv = {
        height: '0.5px',
        width: '235px',
        backgroundColor: '#EAECF3',
        borderRadius: '40px',
    }

    const Childdiv = {
        height: '100%',
        width: progress,
        backgroundColor: '#FF6F60',
        borderRadius: '40px',
        textAlign: 'right',
    }

    // const progresstext = {
    //     padding: '10',
    //     color: 'black',
    //     fontWeight: '900'
    // }

    return (
        <div >
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <div >
                        {/* {progress} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
