import React from 'react';
import { Link } from 'react-router-dom';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const MysingleOrder = (props) => {
    const { _id, user, product, orderquntity, productId, paid } = props.order
    const handleDeleteAdmin = e => {
        return axiosInterseptor({
            method: 'delete',
            url: `/orderdelete/${_id}`
        })
    }
    return (
        <div class="card bg-base-100 shadow-xl flex lg:flex-row m-5">
            <div class="card-body flex-row">
                <div class="avatar">
                    <div class="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div className=''>
                    <h2 class="card-title">{product}</h2>
                    <p>{orderquntity}</p>
                    <p >paid status: {paid || " Not Paid "}</p>
                </div>

            </div>
            <div class="card-actions lg:flex-col lg:p-9 m-auto pb-3">
                <button class="btn bg-red-500" disabled={paid ? 'disabled' : ''} onClick={handleDeleteAdmin}>Remove product</button>
                <Link to={`/checkout/${_id}`} ><button class="btn bg-green-500" disabled={paid ? 'disabled' : ''} >Make payment</button></Link>
            </div>
        </div>
    );
};

export default MysingleOrder;