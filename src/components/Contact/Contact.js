import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='main-container flex justify-between items-start'>
        <div className='flex flex-col gap-8'>
          <button className='common-btn'>Submit Your Cv</button>
          <button className='common-btn'>Post New Job</button>
          <button className='common-btn'>Create New Account</button>
        </div>
        <div className='input-container'>
          <input className='common-input mb-6' type="text" placeholder='Enter your name'/>
          <input className='common-input mb-6' type="text" placeholder='Enter email address'/>
          <input className='common-input mb-6' type="text" placeholder='Enter your subject'/>
          <textarea className='input-textarea' name="" id="" cols="30" rows="10"></textarea>
        </div>
    </div>
  );
};

export default Contact;