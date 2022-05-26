import React from 'react';

const HomeFeatured = () => {
    return (
        <section>
            <h1 className='text-center text-5xl font-bold my-20'>Most Sold Product</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/X2M5M7W/DC-MAXI-FLEX-centring-tool-set-1-710x549.webp" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">RENSSI VACUUM CONTROLLER (R-VAC-1)</h2>
                    <p>The Renssi Vacuum Controller converts your compressed air into a vacuum with just a single switch. The integrated pressure regulator allows you to control the air pressure while inflating your silicone bladders without using multiple accessories - all you need is the compressor!</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFeatured;