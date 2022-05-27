import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithEmailAndPassword, euser,
        eloading,
        Emailerror,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const email = useRef(' ')
    const password = useRef(' ')


    const handleLogin = e => {
        e.preventDefault();
        const mail = email.current.value;
        const pass = password.current.value;
        signInWithEmailAndPassword(mail, pass)
    }

    if (user || Guser) {
        navigate(from, { replace: true });
    }

    const handlegoogle = () => {
        signInWithGoogle()
    }
    return (
        <section className='min-h-[70vh]'>
            <h1 className='text-4xl text-center m-8'>Login</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto ">
                <div className="card-body">
                    <form onSubmit={handleLogin}>

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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <Link to={'/register'} className="label-text-alt link link-hover">Don't have an account? <span>Register here</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
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
                    <div className="divider">OR Login Using</div>

                    <button className='text-center' onClick={handlegoogle}><img className=' image-full m-auto' src="https://img.icons8.com/fluency/48/000000/google-logo.png" /></button>
                </div>
            </div>
        </section>
    );
};

export default Login;