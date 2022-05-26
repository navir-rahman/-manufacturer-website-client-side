import React from 'react';
import { useQuery } from 'react-query';
import axiosInterseptor from '../../hooks/axiosInterseptor';
import HomeReview from './HomeReview';

const HomeReviews = () => {
    const { isLoading, isError, data, error } = useQuery('userreview', async () => {
        const res = await axiosInterseptor({
            method: 'get',
            url: `/reviewget`
        });
        return res.data;
    })

    console.log(data);
    return (
        <section className='min-h-[40vh] py-40'>
            <h1 className='text-center text-5xl font-bold my-20'>See What Our Customer Says</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                   data?.map(r=>{ return<HomeReview revirw={r} key={r._id}></HomeReview>})
                    // data.map(r => {
                    //     return <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                    //         <div class="card-body">
                    //             <h2 class="card-title">Card title!</h2>
                    //             <p>If a dog chews shoes whose shoes does he choose?</p>

                    //         </div>
                    //     </div>
                    // }
                    // )
                }
            </div>
        </section>
    );
};

export default HomeReviews;