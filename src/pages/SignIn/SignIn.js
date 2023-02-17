import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import './Signup.css';
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // context 
  const { signInUser } = useContext(AuthContext);

  const { register,formState: {errors}, handleSubmit } = useForm();

  // log in a existing user 
  const handleLogin = data => {
    signInUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      toast.success("User signed in successfully!")
      navigate(from, { replace: true });
    })
    .catch(err=>{
      const errorMessage = err.message;
      toast.error(errorMessage);
    })
  }

  return (
    <div className="flex flex-col justify-center items-center form-container">
      <form
        className="w-1/4 py-16 px-8 bg-white shadow-2xl rounded-md"
        onSubmit={handleSubmit(handleLogin)}
      >
        <p className="text-3xl text-[#000000] font-semibold text-center  mb-8">Login</p>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email",{
              required: "Email is required"
            })}
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-red-600 ml-2 mt-2">{errors.email?.message}</p>}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password",{
              required: "Password is required",
              minLength: { value: 6, message: 'Password must be 6 character or longer'},
              maxLength: { value: 12, message: 'Password can not be more then 12 character'}
            })}
            className="input input-bordered w-full"
          />
            {errors.password && <p className="text-red-600 ml-2 mt-2">{errors.password?.message}</p>}
            <label className="label">
            <span className="label-text">Forget Password?</span>
          </label>
        </div>

      
        <input className="btn w-full font-bold bg-[#000000]" type="submit" />
        <div>
        </div>
        <p className="text-black mt-3 font-semibold">New to Jobs Today? <Link className="text-[#cb66fa]" to='/signup'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full text-primary">Continue with google</button>
      </form>
      <Toaster/>
    </div>
  );
};

export default SignIn;
