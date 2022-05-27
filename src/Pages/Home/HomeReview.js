import React from 'react';

const HomeReview = ({revirw}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">Ratting: {revirw.rating} out of 5</h2>
                <p>{revirw.review}</p>

            </div>
        </div>
    );
};

export default HomeReview;