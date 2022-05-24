import React from 'react';

const User = (props) => {
   // const {_id, name, email, Role, img} = props.u
   console.log(props);
    return (
        <div class="card bg-base-100 shadow-xl m-5">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Make Admin</button>
                    <button class="btn bg-red-500">Remove User</button>
                </div>
            </div>
        </div>
    );
};

export default User;