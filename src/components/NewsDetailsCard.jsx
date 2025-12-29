import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ singleNews }) => {
    // console.log(singleNews);
    return (
        <div className="">
            <h1 className='font-bold mb-5'>Dragon News</h1>
            <div className='p-5 border-2 border-gray-100 rounded-md space-y-6'>
                <div className="space-y-4">
                    <img className='w-full rounded-md' src={singleNews.thumbnail_url} alt="" />
                    <h1 className='font-bold text-2xl'>{singleNews.title}</h1>
                    <p className='text-accent'>{singleNews.details}</p>
                </div>
                <Link
                    to={`/category/${singleNews.category_id}`}
                    className='btn btn-secondary'
                >
                    <FaArrowLeft /> All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;