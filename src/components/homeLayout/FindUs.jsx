import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Find Us On</h1>
            <div className="">
                <div className="join join-vertical w-full">
                    <button className="btn flex bg-base-100 hover:bg-base-200 justify-start join-item pl-7">
                        <span className='text-blue-800 bg-base-200 p-1.5 rounded-full'><FaFacebook size={18}></FaFacebook></span>
                        <span className='text-accent'> Facebook</span>
                    </button>
                    <button className="btn flex bg-base-100 hover:bg-base-200 justify-start join-item pl-7">
                        <span className='text-blue-400 bg-base-200 p-1.5 rounded-full'><FaTwitter size={16}></FaTwitter></span>
                        <span className='text-accent'> Twitter</span>
                    </button>
                    <button className="btn flex bg-base-100 hover:bg-base-200 justify-start join-item pl-7">
                        <span className='text-secondary bg-base-200 p-1.5 rounded-full'><FaInstagram size={16}></FaInstagram></span>
                        <span className='text-accent'> Instagram</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;