import React from 'react';
import Header from '../components/Header';
import LatestMarque from '../components/LatestMarque';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homeLayout/LeftAside';
import { Outlet, useNavigation } from 'react-router';
import RightAside from '../components/homeLayout/RightAside';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestMarque></LatestMarque>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-12 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {
                        (state== "loading")? <Loading></Loading> : <Outlet></Outlet>
                    }
                </section>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;