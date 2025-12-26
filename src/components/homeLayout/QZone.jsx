import React from 'react';
import SwimmingImage from '../../assets/swimming.png'
import ClassImage from '../../assets/class.png'
import playImage from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3 space-y-3'>
            <h1 className='font-bold m-2'>QZone</h1>
            <img className='w-full' src={SwimmingImage} alt="" />
            <img className='w-full' src={ClassImage} alt="" />
            <img className='w-full' src={playImage} alt="" />
        </div>
    );
};

export default QZone;