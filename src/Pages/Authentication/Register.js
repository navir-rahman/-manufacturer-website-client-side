import React, { useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axiosInterseptor from '../../hooks/axiosInterseptor';

const Register = () => {
    const [user, loading, error] = useAuthState(auth);
    const [createUserWithEmailAndPassword, Euser, Eloading, Emailerror,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    
    const name = useRef(' ')
    const email = useRef(' ')
    const password = useRef(' ')

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleRegister = e => {
        e.preventDefault();
        const Uname = name.current.value;
        const mail = email.current.value;
        const pass = password.current.value;

        const user = { name: Uname || mail, email: mail, Role: "Distributor" }

        axiosInterseptor({
            method: 'post',
            url: '/userpost',
            data: user
        });
        createUserWithEmailAndPassword(mail, pass);
    }
    if (user || Guser) {

        navigate(from, { replace: true });
        return toast("User added");
    }

    const handlegoogle = () => {
        signInWithGoogle()
    }
    return (
        <section className='min-h-[70vh]'>
            <h1 className='text-4xl text-center m-8'>Register</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto ">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input ref={name} type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={email} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={password} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">

                                <a href="#" className="label-text-alt link link-hover">already have an account? <span><Link to={'/login'}>Login here</Link></span></a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    {
                        Emailerror?
                        <p>Error: {Emailerror.message}</p>
                        : ' '
                    }
                    {
                        Gerror?
                        <p>Error: {Gerror.message}</p>
                        : ' '
                    }
                    <div className="divider">OR Register Using</div>

                    <button className='text-center' onClick={handlegoogle}><img className=' image-full m-auto' src="https://img.icons8.com/fluency/48/000000/google-logo.png" /></button>
                   
                </div>
            </div>
        </section>

    );
};

export default Register;