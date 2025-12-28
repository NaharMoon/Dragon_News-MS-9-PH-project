import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200  min-h-screen'>
            <div className="w-11/12 mx-auto py-5 ">
                <NavBar></NavBar>
                <section className=''>
                    <Outlet></Outlet>
                </section>
            </div>
        </div>
    );
};

export default AuthLayout;