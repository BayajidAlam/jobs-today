import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Nav.css';

const NavBar = () => {


  const { user,signOutUser } = useContext(AuthContext);

  const menuItems = <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contacts'>Contact us</Link></li>
  </>

  const handleSignOut = () => {
    signOutUser()
    .then(()=>{

    })
    .catch(err=>{
      toast.error(err.message)
    })
  }

  return (
    <div className="navbar bg-white text container mx-auto">

    <div className="navbar-start">

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
          {menuItems}
        </ul>
      </div>
      <Link to='/' className="btn btn-ghost normal-case text-xl">Jobs Today</Link>
    </div>
    <div className="navbar-center hidden items-center lg:flex">
      <ul className="menu menu-horizontal px-1">
        {
          menuItems
        }
      </ul>
    </div>
    <div className="navbar-end">
      {
        user?.uid ?
        <button onClick={handleSignOut} className='btn btn-sm bg-[#00D0FF] font-bold'>Sign Out</button>
        :
        <Link className='btn btn-sm bg-[#00D0FF] font-bold' to='/signin'>Sign in</Link>
      }
    </div>
    <Toaster/>
  </div>
  );
};

export default NavBar;