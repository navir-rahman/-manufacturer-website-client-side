import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
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
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <section className='min-h-[70vh]'>
            <h1 className='text-4xl text-center m-8'>Login</h1>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto ">
                <div class="card-body">
                    <form onSubmit={handleLogin}>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input ref={email} type="email" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input ref={password} type="password" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                <Link to={'/register'} class="label-text-alt link link-hover">Don't have an account? <span>Register here</span></Link>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Login;