import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const container = useRef(null);

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
        <div className="lg:w-1/2 lg:ml-20 p-4">
          <p className="text-lg text-white mb-4 sm:p-4">Easiest way to find a perfect job</p>
          <h1 className="lg:text-6xl text-white mb-4">
            Find Your Next
            <br />
            Dream Job
          </h1>

        </div>
        <div className="lg:h-[400px] lg:w-1/2" ref={container}></div>
      </div>
    </div>
  );
};

export default Header;