import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import './Signup.css';
const SignIn = () => {
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm();

  const handleLogin = data => {
    console.log(data)
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
            {...register("email")}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            className="input input-bordered w-full"
          />
            <label className="label">
            <span className="label-text">Forget Password?</span>
          </label>
        </div>

        <p>{data}</p>
        <input className="btn w-full bg-[#000000]" type="submit" />
        <p className="text-[#000000]">New to Jobs Today?<Link to='/signup'>Create new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full text-primary">Continue with google</button>
      </form>
      
    </div>
  );
};

export default SignIn;
