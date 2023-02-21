import React from 'react';

const JoinUsToday = () => {
  return (
    <section className='gradient_bg md:py-24 py-12'>
          <div className='flex flex-col w-2/4 text-center mx-auto'>
            <h1 className='lg:text-5xl md:text-3xl text-xl py-4 font-bold text-white'>Join us today without any hesitation</h1>
            <p className='py-4 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <div className='md:flex justify-center'>
              <button className='text-white bg-[#49E4FA] h-10 md:h-14 md:w-56 w-40 md:mr-4 md:mr-4 mb-2 md:mb-0 '>I Am A Candidate</button>
              <button  className='text-white bg-[#49E4FA] md:h-14 h-10 w-40 md:w-56'>We Are An Employer</button>
            </div>
          </div>
    </section>
  );
};

export default JoinUsToday;