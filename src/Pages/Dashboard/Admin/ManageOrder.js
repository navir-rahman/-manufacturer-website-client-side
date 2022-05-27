import React from 'react';
import axiosInterseptor from '../../../hooks/axiosInterseptor';

const ManageOrder = ({ order }) => {
    const { _id, orderquntity, paid, product, productId, user, } = order;

    const handleDeleteOrder = () => {
        //do somthing
        console.log("somthing");
        return axiosInterseptor({
            method: 'delete',
            url: `/orderdelete/${_id}`
        })

    }


    return (
        <div className="card bg-base-100 shadow-xl flex lg:flex-row m-5">
            <div className="card-body flex-row">
                <div className="avatar">
                    {/* <div className="w-24 mask mask-squircle">
                    <img src={pic} alt={pic}/>
                </div> */}
                </div>
                <div className=''>

                    <h2 className="card-title"> User : {user}</h2>
                    <p>{product}</p>
                    <p >payment status: {paid}</p>
                    <p >Quantity: {orderquntity}</p>

                </div>

            </div>
            <div className="card-actions lg:flex-col lg:p-9 m-auto pb-3">
                {/* <button className="btn btn-primary" onClick={handleMakeadmin}>Make Admin</button> */}

                <label for="my-modal" className="btn bg-red-500 modal-button">Delete Order</label>


                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to remove this item</h3>
                        <div className="modal-action">
                            <label for="my-modal" onClick={handleDeleteOrder} className="btn">Yes</label>
                            <label for="my-modal" className="btn">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;