import React from "react";
import "./Mentor.css";
import montorPic from "../../assets/mentor.jpg";
import montorPic2 from "../../assets/mentor2.jpg";
import montorPic3 from "../../assets/montor3.jpg";
import montorPic4 from "../../assets/mentor4.jpg";

const Mentor = () => {
  return (
    <section className="container mx-auto lg:py-12 py-8 lg:mb-20">
      <div className="flex flex-col justify-center items-center  mb-12">
        <h1 className="lg:text-5xl md:text-2xl font-bold lg:pb-6">
          Experienced Mentor Team
        </h1>
        <p className="text-lg">
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:h-72 lg:w-60 md:w-1/2 mx-auto">
          <img className="lg:w-60 h-[320px]" src={montorPic} alt="" />
          <div className="py-4">
            <h2 className="text-center font-bold text-xl">Ethel Davis</h2>
            <p className="text-center">Managing Director (Sales)</p>
          </div>
        </div>

        <div className="lg:h-72 lg:w-60 md:w-1/2 mx-auto">
          <img className="w-full h-[320px]" src={montorPic2} alt="" />
          <div className="py-4">
            <h2 className="text-center font-bold text-xl">Rodney Cooper</h2>
            <p className="text-center">Creative Art Director (Project)</p>
          </div>
        </div>

        <div className="lg:h-72 lg:w-60 md:w-1/2 mx-auto">
          <img className="w-full h-[320px]" src={montorPic3} alt="" />
          <div className="py-4">
            <h2 className="text-center font-bold text-xl">Dora Walker</h2>
            <p className="text-center">Senior Core Developer</p>
          </div>
        </div>
 
        <div className="lg:h-72 lg:w-60 md:w-1/2 mx-auto">
          <img className="w-full h-[320px]" src={montorPic4} alt="" />
          <div className="py-4">
            <h2 className="text-center font-bold text-xl">Lena Keller</h2>
            <p className="text-center">Creative Content Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
