import React from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const ExperiencdJob = ({ job }) => {
  const { logo, companyName, location, positionName } = job;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{positionName}</h2>
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">{companyName}</h4>
          <div className="flex items-center">
            <GoLocation className="mr-2 text-lg" />{" "}
            <p className="text-lg">{location}</p>
          </div>
        </div>
        
        <div className="card-actions justify-center">
          <Link to='/application'>
            <button className="btn btn-sm bg-[#00D0FF] btn-md">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperiencdJob;
