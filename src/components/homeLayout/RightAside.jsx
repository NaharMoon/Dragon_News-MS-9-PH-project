import React from 'react';
import LoginWith from './LoginWith';
import FindUs from './FindUs';
import QZone from './QZone';


const RightAside = () => {
    return (
        <div className='space-y-8'>
            <LoginWith></LoginWith>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;