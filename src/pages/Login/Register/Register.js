import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const { registerNewUserUsingEmailPassword } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => registerNewUserUsingEmailPassword(data.name, data.email, data.password);

    




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="" {...register("name", { required: true })} placeholder="Name" />
                {errors.name && <span>This field is required</span>}

                <input defaultValue="" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span>This field is required</span>}

                <input {...register("password", { required: true })} placeholder="Password" />

                {errors.password && <span>This field is required</span>}

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;