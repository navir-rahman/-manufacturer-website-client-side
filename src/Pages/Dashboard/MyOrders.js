import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    // get order 
    const { isLoading: orderIsloading, isError: orderisError, data, error: ordererror } = useQuery('orderloading', () => {
        return axiosInterseptor({
            method: 'get',
            url: `orderget/${user.email}`
        }).then((res) => res.data)
    })

    console.log(data);
    return (
        <div>
            {
                data?.map(da=>{
                    return <section>
                        {da._id}
                    </section>
                })
            }
        </div>
    );
};

export default MyOrders;