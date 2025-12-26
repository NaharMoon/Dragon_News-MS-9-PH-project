import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CatagoryNews = () => {
    const obj = useParams();
    const id = obj.id;
    // console.log(id);
    const data = useLoaderData();
    // console.log(obj.id,data);

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setCategoryData(data);
            return;
        }
        else if (id == '1') {
            const filteredData = data.filter(data => data.others.is_today_pick == true);
            setCategoryData(filteredData);
        }
        else {
            const filteredData = data.filter(data => data.category_id == id);
            // console.log(filteredData);
            setCategoryData(filteredData);
        }
    }, [data, id]);
    return (
        <div>
            {/* <p>CatagoryNews -{obj.id}</p> */}
            <p className='font-bold mb-5 px-5'>Total <span className='text-secondary'>{categoryData.length}</span> news found</p>
            {
                categoryData.map(data => {
                    return (
                        <div className="mx-auto p-4">
                            <NewsCard news={data} onReadMore={(n) => console.log("read:", n.id)} />
                        </div>
                    );

                })
            }
        </div>
    );
};

export default CatagoryNews;