import React from 'react';
import axiosInterseptor from '../../../hooks/axiosInterseptor';

const ManageSingleProduct = (props) => {
    const { _id, name, price, pic, dis, qun, minOrder } = props?.product

    // const handleMakeadmin = () => {
    //     return axiosInterseptor({
    //         method: 'put',
    //         url: `/userput/${_id}`,
    //         data: { Role: 'Admin' }
    //     })
    // }
    const handleDeleteAdmin = e => {
        return axiosInterseptor({
            method: 'delete',
            url: `/productdelete/${_id}`
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl flex lg:flex-row m-5">
            <div className="card-body flex-row">
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        <img src={pic} alt={pic}/>
                    </div>
                </div>
                <div className=''>
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p >Price: {price}</p>
                    <p >Discription: {dis}</p>
                    <p >Quantity: {qun}</p>
                    <p >Minimum order quantity: {minOrder}</p>
                </div>

            </div>
            <div className="card-actions lg:flex-col lg:p-9 m-auto pb-3">
                {/* <button className="btn btn-primary" onClick={handleMakeadmin}>Make Admin</button> */}
                <button className="btn bg-red-500" onClick={handleDeleteAdmin}>Remove Product</button>
            </div>
        </div>
    );
};
export default ManageSingleProduct;