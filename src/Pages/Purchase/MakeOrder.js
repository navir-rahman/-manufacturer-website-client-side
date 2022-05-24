import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const MakeOrder = () => {
    const [user] = useAuthState(auth);
    const { isLoading, isError, data, error } = useQuery('taskds', () => {
        return axiosInterseptor({
            method: 'get',
            url: `userget/${user.email}`
        }).then((res) => res.data)
    })
    if (isLoading) {
        return <h2>loading ... </h2>
    }

    const handlePurchase = (e) => {
        e.preventDefault();

        //send order
        
    }
    return (
        <section>
            <div class=" grid grid-cols-2 ">
                    <div className=''>
                        <div class="card bg-base-200 text-black">
                            <div class="card-body">
                                <h2 class="card-title">{data.name}</h2>
                                <p>{data.email}</p>
                                <p>{data.Role}</p>
                                <div class="card-actions justify-end">
                                    <button class="btn">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handlePurchase} className='flex flex-col form-control'>
                        <h1 className='text-4xl text-center'>Purchese Now</h1>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">name</span>
                                </label>
                                <input type="text" value={data.name} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" value={data.email} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">address</span>
                                </label>
                                <input type="address" placeholder="address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="tel" placeholder="Phone" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">

                                <button type='submit' className='btn btn-primary'>Make Order</button>
                            </div>
                        </div>
                    </form>
                </div>
        </section>
    );
};

export default MakeOrder;