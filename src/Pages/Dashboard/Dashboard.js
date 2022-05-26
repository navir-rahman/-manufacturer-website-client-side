import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';
import MyProfile from './MyProfile';

const Dashboard = () => {
    const [user,] = useAuthState(auth);
        //   // get user data 
        //   const { isLoading, isError, data, error } = useQuery('UserRole', async () => {
        //     const res = await axiosInterseptor({
        //         method: 'get',
        //         url: `userget/${user.email}`
        //     });
        //     return res.data;
        // })
        // console.log(data);
    return (
        <div className='flex'>
            <div class="drawer drawer-mobile w-[15%]">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start">

                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li> <Link to={'myprofile'}>My Profile</Link> </li>
                        <li> <Link to={'myorder'}>My Order</Link> </li>
                        <li><Link to={'addreview'}>Add Review</Link> </li>

                        <li><Link to={'manageorder'}>Manage All Orders</Link> </li>
                        <li><Link to={'addaproduct'}> Add A Product</Link> </li>
                        <li><Link to={'makeadmin'}>Make Admin </Link> </li>
                        <li><Link to={'manageproducts'}>Manage Products</Link> </li>
                    </ul>
                </div>
            </div>
            <div className='w-[84.9%]'>

                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;