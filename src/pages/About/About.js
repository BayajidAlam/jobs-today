import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TfiSupport } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { ImRocket } from "react-icons/im";
import { MdRecommend } from "react-icons/md";
import { GoComment } from "react-icons/go";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Mentor from "../../components/Mentor/Mentor";
import JoinUsToday from "../../components/JoinUsToday/JoinUsToday";

const About = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center flex-col h-80 p-10 upperContainer">
          <h1 className="text-5xl mb-2 text-white">About Us</h1>
          <div className="flex w-40 items-center mx-auto justify-around">
            <p className="text-xl text-white">Home</p>
            <AiOutlineArrowRight className="text-xl text-white" />
            <p className="text-xl text-white">About Us</p>
          </div>
        </div>
      </section>
      {/* why choose us section  */}
      <section className="container mx-auto lg:py-12 py-8">
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="lg:text-5xl md:text-2xl font-bold lg:pb-6">Why Choose Us</h1>
          <p className="text-lg">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="bg-[#D4CAFF] lg:w-96 md:w-92 w-full lg:py-20 md:py-16 py-12 px-4 text-black mx-auto">
            <div className="flex items-center lg:w-80 md:w-72 w-64 mx-auto py-4">
              <AiOutlineUser className="mr-4 text-3xl text-black" />
              <p className="text-2xl font-bold">Expert Technicians</p>
            </div>
            <p className="lg:w-80 md:w-72 w-64 mx-auto text-xl">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          <div className="bg-[#D4CAFF] lg:w-96 md:w-92 w-full lg:py-20 md:py-16 py-12 px-4 text-black mx-auto">
            <div className="flex items-center lg:w-80 md:w-72 w-64 mx-auto py-4">
              <TfiSupport className="mr-4 text-3xl text-black" />
              <p className="text-2xl font-bold">Professional Service</p>
            </div>
            <p className="lg:w-80 md:w-72 w-64 mx-auto text-xl">
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
            </p>
          </div>

          <div className="bg-[#D4CAFF] lg:w-96 md:w-92 w-full lg:py-20 md:py-16 py-12 px-4 text-black mx-auto">
            <div className="flex items-center lg:w-80 md:w-72 w-64 mx-auto py-4">
              <BiSupport className="mr-4 text-3xl text-black" />
              <p className="text-2xl font-bold">Great Support</p>
            </div>
            <p className="lg:w-80 md:w-72 w-64 mx-auto text-xl">
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
            </p>
          </div>

          <div className="bg-[#D4CAFF] lg:w-96 md:w-92 w-full lg:py-20 md:py-16 py-12 px-4 text-black mx-auto">
            <div className="flex items-center lg:w-80 md:w-72 w-64 mx-auto py-4">
              <ImRocket className="mr-4 text-3xl text-black" />
              <p className="text-2xl font-bold">Great Support</p>
            </div>
            <p className="lg:w-80 md:w-72 w-64 mx-auto text-xl">
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
            </p>
          </div>

          <div className="bg-[#D4CAFF] lg:w-96 md:w-92 w-full lg:py-20 md:py-16 py-12 px-4 text-black mx-auto">
            <div className="flex items-center lg:w-80 md:w-72 w-64 mx-auto py-4">
              <MdRecommend className="mr-4 text-3xl text-black" />
              <p className="text-2xl font-bold">Highly Recomended</p>
            </div>
            <p className="lg:w-80 md:w-72 w-64 mx-auto text-xl">
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
            </p>
          </div>
          
          <div className="bg-[#D4CAFF] lg:w-96 md:w-92 w-full lg:py-20 md:py-16 py-12 px-4 text-black mx-auto">
            <div className="flex items-center lg:w-80 md:w-72 w-64 mx-auto py-4">
              <GoComment className="mr-4 text-3xl text-black" />
              <p className="text-2xl font-bold">Positive Reviews</p>
            </div>
            <p className="lg:w-80 md:w-72 w-64 mx-auto text-xl">
            Usage of the Internet is becoming more common due to rapid advancement of technology and power.
            </p>
          </div>
  
        </div>
      </section>

      {/* what we do section  */}
      <WhatWeDo/>
      <Mentor/>
      <JoinUsToday/>
    </>
  );
};

export default About;
