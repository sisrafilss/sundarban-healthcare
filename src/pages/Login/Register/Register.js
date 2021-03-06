import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PageTopTitle from '../../Shared/PageTopTitle/PageTopTitle';

const Register = () => {

    const { registerNewUserUsingEmailPassword, signInUsingGoogle, error, user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => registerNewUserUsingEmailPassword(data.name, data.email, data.password);

    const pageTopTitle = {
        title: 'Register!',
        subtitle: 'Please Register to enjoy all feature'
    }

    return (
        <>
            <div>
                <PageTopTitle pageTopTitle={pageTopTitle} />
            </div>

            <div className="form-wrapper">
                <div className="form-container">

                    <h2 className="mb-4 fw-bold text-center">Register</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-3">
                                <input defaultValue="" {...register("name", { required: true })} className="form-control" placeholder="Name" />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <input defaultValue="" {...register("email", { required: true })} className="form-control" placeholder="Email" />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="mb-3">
                                <input {...register("password", { required: true })} className="form-control" placeholder="Password" />
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <button type="submit" className="btn btn-submit">Register</button>
                            <p className="login-error mt-3 text-center"> {error} </p>

                            { user.email &&  <p className="login-success mt-3 text-center"> Registration Successfull! </p>}

                        </form>
                    </div>

                    <div className="mt-4">
                        <p className="text-center">------------------ or sign in using -------------</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className=" btn-danger btn btn-third-party-login btn" onClick={signInUsingGoogle}><i className="fab fa-google"></i> Sign in with Google</button>
                        </div>
                        <p className="text-center mt-3" style={{ color: '#ccc' }}>Already have an Account? <Link style={{ color: '#fff', textDecoration: 'underline' }} to="/login">Login</Link> </p>

                    </div>

                </div>
            </div>


        </>
    );
};

export default Register;