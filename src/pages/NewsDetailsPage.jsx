import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetailsPage = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // console.log(data,id);
    const [newsDetails, setNewsDetails] = useState([]);

    useEffect(() => {
        const filteredData = data.filter(data => data.id == id)
        setNewsDetails(filteredData);
    }, [data, id]);
    // console.log(newsDetails);

    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <main className='grid col-span-9'>
                    {
                        newsDetails.map(singleNews => {
                            return (
                                <div className="">
                                    <NewsDetailsCard key={singleNews.id} singleNews={singleNews}></NewsDetailsCard>
                                </div>
                            )
                        })
                    }
                </main>
                <aside className='grid col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </section>
        </div>
    );
};

export default NewsDetailsPage;