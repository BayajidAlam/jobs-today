import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const container = useRef(null);

  // lottie file
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./98414-coffetime.json"),
    });
  });

  return (
    <div className="header-container">
      <div className="container mx-auto lg:flex lg:py-32 justify-center items-center">
        <div className="lg:w-1/2 lg:ml-20 p-4 lg:p-0">
          <p className="lg:text-xl text-lg text-white ">
            Easiest way to find a perfect job
          </p>
          <h1 className="lg:text-6xl text-4xl text-white mb-4">
            Find Your Next
            <br />
            Dream Job
          </h1>
          <div>
            <Link to='/application'>
              <button className="btn-1 mr-2 lg:mr-4 mb-2 text-black text-xl bg-white">
                Job Seeker
              </button>
            </Link>
            <Link to='/application'>
              <button className="btn-2 text-xl bg-[#cb67fa] text-white">
                Job poster
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:h-[400px] lg:w-1/2" ref={container}></div>
      </div>
    </div>
  );
};

export default Header;
