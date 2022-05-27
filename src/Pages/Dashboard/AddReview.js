import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const retting = useRef(' ');
    const review = useRef(' ');
    const [rat, setret] = useState(0)

    const { isLoading, isError, data, error } = useQuery('userreview', () => {
        return axiosInterseptor({
            method: 'get',
            url: `/reviewget/${user.email}`
        }).then((res) => res.data).then(setret(data[0].rating))
    })


    const handleReview = e => {
        e.preventDefault();
        const rett = retting.current.value;
        const rev = review.current.value;

        const reviewData = { user: user.name, email: user.email, rating: rett, review: rev }

        return axiosInterseptor({
            method: 'post',
            url: `/reviewupdate/${user.email}`,
            data: reviewData
        }).then(
            e.target.reset()
        )

    }

    return (
        <div>
            <div className=" hero min-h-[30vh] bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-3xl font-bold flex items-baseline">
                            Your rating is {data?.rating}
                        </h1>
                        <p className="pb-6 flex items-center">
                            your review {data?.review}
                        </p>

                    </div>
                </div>
            </div>


            <form onSubmit={handleReview} className="card-body">
                <h1 className='text-5xl text-center'>Update Review</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Retting</span>
                    </label>
                    <input ref={retting}  type="range" min="1"  max="5" className="range range-xs" step="1" />

                    <div className="rating w-full flex justify-between text-xs px-2">
                        <input type="radio" disabled name="rating-1" className="mask mask-star" />
                        <input type="radio" disabled name="rating-1" className="mask mask-star" />
                        <input type="radio" disabled name="rating-1" className="mask mask-star" />
                        <input type="radio" disabled name="rating-1" className="mask mask-star" />
                        <input type="radio" disabled name="rating-1" className="mask mask-star" />
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea ref={review} placeholder="review" className="input input-bordered" ></textarea>

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Send Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;