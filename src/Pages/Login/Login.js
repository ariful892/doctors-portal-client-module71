import React, { useEffect, useRef } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {

    const [signInWithGoogle, googleUser, googlrLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || googleUser);
    let from = location.state?.from?.pathname || "/";

    let signInError;
    const emailRef = useRef('');

    useEffect(() => {
        if (token) {
            console.log(token);
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (error || googleError) {
        signInError = <p className='text-red-500'> {error?.message || googleError?.message}</p>;
    }

    if (loading || googlrLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    const handleForgetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (!email) {
            return alert('Please Enter Email');
        }
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-accent text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                ref={emailRef}
                                placeholder='Your Email'
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder='Enter Password'
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <button onClick={handleForgetPassword} className='btn btn-ghost text-secondary mb-1'><small>Forgot Password ?</small></button>
                        <input className='btn w-full max-w-xs' type="submit" value='LOGIN' />
                    </form>
                    <p>New to Doctors Portal?<Link to='/register' className='pl-1 text-sm text-secondary'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;