import React, { useContext } from 'react';
import LoginWith from './LoginWith';
import FindUs from './FindUs';
import QZone from './QZone';
import { AuthContext } from '../../provider/AuthProvider';


const RightAside = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='space-y-8'>
            {
                !user && <LoginWith></LoginWith>
            }
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;