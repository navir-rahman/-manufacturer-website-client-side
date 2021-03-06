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
        <div className="card bg-base-100 shadow-xl flex lg:flex-row m-5">
            <div className="card-body flex-row">
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        {/* <img src={img} alt={img}/> */}
                    </div>
                </div>
                <div className=''>
                    <h2 className="card-title">{product}</h2>
                    <p>{orderquntity}</p>
                    <p >paid status: {paid || " Not Paid "}</p>
                </div>

            </div>
            <div className="card-actions lg:flex-col lg:p-9 m-auto pb-3">
                {/* <button className="btn bg-red-500" disabled={paid ? 'disabled' : ''} onClick={handleDeleteAdmin}>Remove product</button> */}

                <label for="my-modal" disabled={paid ? 'disabled' : ''} className="btn bg-red-500 modal-button">Remove product</label>


                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to remove this item</h3>
                        
                        <div className="modal-action">
                            <label for="my-modal" onClick={handleDeleteAdmin} className="btn">Yes</label>
                            <label for="my-modal" className="btn">No</label>
                        </div>
                    </div>
                </div>


                <Link to={`/checkout/${_id}`} ><button className="btn bg-green-500" disabled={paid ? 'disabled' : ''} >Make payment</button></Link>
            </div>
        </div>
    );
};

export default MysingleOrder;