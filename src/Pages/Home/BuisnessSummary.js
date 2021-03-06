import React from 'react';

const BuisnessSummary = () => {
    return (
        <section className='bg-base-100 shadow-xl'>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/NWk0jjm/Small-Brawoliner-Roll-Transparency-532x253.webp" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Buisness Summary</h1>
                        <p className="py-6">
                        ● we served 1000+ customers  <br />
                        ● 300M+ Annual revenue <br />
                        ● 1K+ Reviews,  <br />
                        ● 5k+ Products, <br />
                        ● Created by an expert team of CIPP installers, APEX has everything you need to line pipes right. All APEX products are tested where it counts - in the field. If we sell it, we use. If we use it, it’s the absolute top in its class.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuisnessSummary;