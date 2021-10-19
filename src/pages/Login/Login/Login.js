import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';
import './Login.css'

const Login = () => {

    const { loginUserUsingEmailPassword, signInUsingGoogle, logOut, user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => loginUserUsingEmailPassword(data.email, data.password);


    console.log(user);

    const pageTopTitle = {
        title: 'Please Login!',
        subtitle: 'Login with your preferred method and unlock all features!'
    }

    return (
        <>
            <div>
                <PageTopTitle pageTopTitle={pageTopTitle} />
            </div>

            <div className="form-wrapper">

                <div className="form-container">
                    <h2 className="mb-4 fw-bold text-center">Sign In</h2>
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
                            <button type="submit" class="btn btn-submit">Login</button>
                        </form>
                    </div>

                    <div className="mt-4">
                        <p className="text-center">------------------ or sign in using -------------</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className=" btn-danger btn btn-third-party-login btn" onClick={signInUsingGoogle}><i class="fab fa-google"></i> Sign in with Google</button>
                        </div>


                    </div>

                </div>
            </div>



        </>
    );
};

export default Login;