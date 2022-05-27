import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/MNS03qq/DVVMRgz-VMAA-s4n.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Looks like You Are Lost</h1>
                        <p className="py-6"></p>
                        <Link to={'/'}>
                            <button className="btn btn-primary">Go TO home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;