import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import axiosInterseptor from '../../../hooks/axiosInterseptor';

const CheckOut = () => {
    const { checkoutPID } = useParams();
    const [user] = useAuthState(auth);

    const deliveryAddress = useRef(' ');
    const deliveryPhone = useRef(' ');
    // get order 
    const { isLoading, isError, data:orderdata, error } = useQuery('orderloading', async () => {
        const res = await axiosInterseptor({
            method: 'get',
            url: `/ordergetbyid/${checkoutPID}`
        });
        return res.data;
    })

    const handlePurchase = (e) => {
        e.preventDefault();
        const dAddress = deliveryAddress.current.value;
        const dPhone = deliveryPhone.current.value;

        const orderStatus = { user: user.email, product: orderdata.product, orderquntity: orderdata.orderquntity, productId: orderdata.productId, paid: "paid", deliveryAddress: dAddress, deliveryphone: dPhone }

        console.log(orderdata);
        return axiosInterseptor({
            method: 'post',
            url: `/orderupdate/${checkoutPID}`,
            data: orderStatus
        }).then(
            e.target.reset()
        ) 
    }
    return (
        <section>
            {
                orderdata?.map(order=> {
                    return <div>
                              <form onSubmit={handlePurchase} className='flex flex-col form-control'>
            <h1 className='text-4xl text-center'>Purchese Now</h1>
            <div className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" value={user.name} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" value={user.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">address</span>
                    </label>
                    <input type="address" placeholder="address" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="tel" placeholder="Phone" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">

                    <button type='submit' className='btn btn-primary' disabled={orderdata.paid ? 'disibled' : ''}> {orderdata.paid ? orderdata.paid : 'Make paymnet'}</button>
                </div>

            </div>
        </form>
                    </div>
                })
            }
        </section>
    );
};

export default CheckOut;