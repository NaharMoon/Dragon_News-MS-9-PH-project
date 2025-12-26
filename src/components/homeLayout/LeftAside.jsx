import React, { Suspense } from 'react';
import Catagories from '../Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={"Loading...."}>
                <Catagories></Catagories>
            </Suspense>
        </div>
    );
};

export default LeftAside;