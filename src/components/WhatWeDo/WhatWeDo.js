import React from "react";
import whoWeAre1 from "../../assets/f1.jpg.webp";
import whoWeAre2 from "../../assets/f2.jpg.webp";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
        <div>
          <picture />
          <source
            type="image/webp"
            srcSet="dark@1x.webp 1x, dark@2x.webp 2x"
            media="(prefers-color-scheme: dark)"
          />
          <source
            type="image/webp"
            srcSet="light@1x.webp 1x, light@2x.webp 2x"
          />
          <source
            type="image/jpeg"
            srcSet="dark@1x.jpg 1x, dark@2x.jpg 2x"
            media="(prefers-color-scheme: dark)"
          />
          <source type="image/jpeg" srcSet="light@1x.jpg 1x, light@2x.jpg 2x" />
          <img
            className="w-full h-[340px]"
            src={whoWeAre1}
            alt="describe image content"
            loading="lazy"
          />
          <picture />
        </div>

        <div className="h-[340px]">
          <div className="flex flex-col justify-center items-center w-full h-full gradient_bg">
            <p className="text-base-300">BASIC & COMMON REPAIRS</p>
            <h1 className=" text-5xl py-3 text-white">Who we are</h1>
            <p className="text-base-300 w-3/4 mx-auto">
              Computer users and programmers have become so accustomed to using
              Windows, even for the changing capabilities and the appearances of
              the graphical.
            </p>
          </div>
        </div>

        <div>
          <picture />
          <source
            type="image/webp"
            srcSet="dark@1x.webp 1x, dark@2x.webp 2x"
            media="(prefers-color-scheme: dark)"
          />
          <source
            type="image/webp"
            srcSet="light@1x.webp 1x, light@2x.webp 2x"
          />
          <source
            type="image/jpeg"
            srcSet="dark@1x.jpg 1x, dark@2x.jpg 2x"
            media="(prefers-color-scheme: dark)"
          />
          <source type="image/jpeg" srcSet="light@1x.jpg 1x, light@2x.jpg 2x" />
          <img
            className="w-full h-[340px]"
            src={whoWeAre2}
            alt="describe image content"
            loading="lazy"
          />
          <picture />
        </div>

        <div className="h-[340px]">
          <div className="flex flex-col justify-center items-center w-full h-full gradient_bg">
            <p className="text-base-300">BASIC & COMMON REPAIRS</p>
            <h1 className=" text-5xl py-3 text-white">Who we are</h1>
            <p className="text-base-300 w-3/4 mx-auto">
              Computer users and programmers have become so accustomed to using
              Windows, even for the changing capabilities and the appearances of
              the graphical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
