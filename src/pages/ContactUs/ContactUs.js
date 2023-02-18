import React from 'react';
import './ContactUs.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Maps from '../../components/Maps/Maps';
import Contact from '../../components/Contact/Contact';



const ContactUs = () => {
  return (
    <section>
      <div className='flex justify-center items-center flex-col h-80 p-10 upperContainer'>
        <h1 className='text-5xl mb-2'>Contact Us</h1>
        <div className='flex w-40 items-center mx-auto justify-around'>
          <p className='text-xl'>Home</p> 
          <AiOutlineArrowRight className='text-xl'/>
          <p className='text-xl'>contact</p>
        </div>
      </div>
      <div>
         <Maps/>
         <Contact/>
      </div>
    </section>
  );
};

export default ContactUs;