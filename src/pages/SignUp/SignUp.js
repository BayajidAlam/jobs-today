import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

  // context 
  const { createUser, updateUser } = useContext(AuthContext);

  const { register,formState: {errors}, handleSubmit } = useForm();
  
  // create a user 
  const handleSignUp = data => {
    createUser(data.email,data.password)
    .then(result =>{
      const user = result.user;
      toast.success('User created successfully!')
      // update a user 
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{
        toast.success('Profile updated');
      })
      .catch(err=>{
        toast.error(err.message);
      })
    })
    .catch(err=>{
      const message = err.message
      toast.error(message);
    })
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
       {
          errors.name && <p className='mt-2 text-red-600 ml-2'>{errors.name?.message}</p>
        }
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
       {
          errors.email && <p className='mt-2 text-red-600 ml-2'>{errors.email?.message}</p>
        }
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
            minLength: { value: 6, message: "Password must be minimum 6 character"},
            pattern: { value: /^(?=(.*[a-z]){2,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{4,}$/,message: "Password must have uppercase and special character!"}
          })}
        />
        {
          errors.password && <p className='mt-2 text-red-600 ml-2'>{errors.password?.message}</p>
        }
          <label className="label">
          <span className="label-text">Forget Password?</span>
        </label>
      </div>

      <input className="btn w-full font-bold bg-[#000000]" type="submit" />
      <p className="text-[#cb66fa] font-semibold mt-3"><Link to='/signin'>Already have an account?</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full text-primary">Continue with google</button>
    </form>
    <Toaster/>
  </div>
  );
};

export default SignUp;