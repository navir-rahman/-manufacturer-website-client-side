import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full bg-base-100 shadow-xl">
                <div id="item1" className="carousel-item w-full">
                    <img src=" https://i.ibb.co/rfc85QF/Trenchless-Best-1002-Allens-Repiper-1903x500-crop-center.webp" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/HrRS49L/Copy-of-Copy-of-Copy-of-Apex-Vid-Cover-CME-Pipelining-1903x500-crop-center.webp" className="w-full" />
                </div>
            </div>

        </section>
    );
};

export default Banner;