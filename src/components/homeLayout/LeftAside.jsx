import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className="font-extrabold text-2xl text-accent">Lloading...</div>}>
                <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;