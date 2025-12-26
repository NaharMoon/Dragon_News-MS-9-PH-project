import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestMarque = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={100}className='flex gap-5'>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Marquee>
            
        </div>
    );
};

export default LatestMarque;