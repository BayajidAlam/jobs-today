import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const { register,formState: {errors}, handleSubmit } = useForm();
  
  const handleSignUp = data => {
    console.log(data)
  }

  return (
    <div className="flex flex-col justify-center items-center form-container">
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="w-1/4 py-16 px-8 bg-white shadow-2xl rounded-md"
    >
      <p className="text-3xl text-[#000000] font-semibold text-center  mb-8">Sign Up</p>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          {...register("name",{
            required: "Name is required"
          })}
        />

      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          {...register("email",{
            required: "Email is required"
          })}
        />

      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          className="input input-bordered w-full"
          {...register("password",{
            required: "Password is required",
            minLength: { value: 6, message: "Password must be minimum 6 character"}
          })}
        />
        {
          errors.password && <p className='mt-2 text-red-600 ml-2'>{errors.password?.message}</p>
        }
          <label className="label">
          <span className="label-text">Forget Password?</span>
        </label>
      </div>

      <input className="btn w-full bg-[#000000]" type="submit" />
      <p className="text-[#000000] mt-2"><Link to='/signin'>Already have an account?</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full text-primary">Continue with google</button>
    </form>
    
  </div>
  );
};

export default SignUp;