import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { loginUserUsingEmailPassword, signInUsingGoogle, logOut, user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => loginUserUsingEmailPassword(data.email, data.password);


    console.log(user);
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue="" {...register("email", { required: true })} placeholder="Email" />
                    {errors.email && <span>This field is required</span>}

                    <input {...register("password", { required: true })} placeholder="Password" />

                    {errors.password && <span>This field is required</span>}

                    <input type="submit" value="Login" />
                </form>
            </div>
            <div>
                <h2>This is Login Page!</h2>
                <button onClick={signInUsingGoogle}>Google Sign-In</button>
                <button onClick={logOut}>Logout</button>
                <h4>Login Status: {user?.displayName ? `Looged in as ${user.displayName}` : 'Loged Out'} </h4>
            </div>
        </div>
    );
};

export default Login;