import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';
import './Login.css'

const Login = () => {

    // Destructing the from useAuth custom hook
    const { loginUserUsingEmailPassword, signInUsingGoogle, user, error, setUser, setError } = useAuth();

    // It is for react hook form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => handleEmailLogin(data.email, data.password);

    // Page top Title props
    const pageTopTitle = {
        title: 'Please Login!',
        subtitle: 'Login with your preferred method and unlock all features!'
    }

    // handing redirect the page from where user send this page for login.
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                setError('');
                history.push(redirect_uri);
            }).catch(() => {
                setError(error?.message);
            });
    }

    const handleEmailLogin = (email, password) => {
        loginUserUsingEmailPassword(email, password)
            .then((result) => {
                // Signed in 
                setUser(result?.user);
                setError('');
                history.push(redirect_uri);
            })
            .catch((error) => {
                setError(error?.message);
            });
    }

    return (
        <>
            <div>
                <PageTopTitle pageTopTitle={pageTopTitle} />
            </div>

            <div className="form-wrapper">

                <div className="form-container">
                    {
                        !user.email ? (
                            <div>
                                <h2 className="mb-4 fw-bold text-center">Login</h2>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className="mb-3">
                                            <input defaultValue="" {...register("email", { required: true })} placeholder="Email address" type="email" className="form-control" id="email" />
                                            {errors.email && <span className="text-warning">This field is required</span>}
                                        </div>

                                        <div className="mb-3">
                                            <input  {...register("password", { required: true })} placeholder="Password" type="password" className="form-control" id="password" />
                                            {errors.password && <span className="text-warning">This field is required</span>}
                                        </div>
                                        <button type="submit" className="btn btn-submit">Login</button>
                                        <p className="login-error mt-3 text-center"> {error} </p>
                                    </form>
                                </div>

                                <div className="mt-4">
                                    <p className="text-center">------------------ or sign in using -------------</p>
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <button className=" btn-danger btn btn-third-party-login btn" onClick={handleGoogleLogin}><i className="fab fa-google"></i> Sign in with Google</button>
                                    </div>
                                    <p className="text-center mt-3" style={{ color: '#ccc' }}>Are you new user? <Link style={{ color: '#fff', textDecoration: 'underline' }} to="/register">Register</Link> </p>

                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-warning display-1"> You are already Logged In. </h2>
                            </div>
                        )
                    }

                </div>
            </div>



        </>
    );
};

export default Login;