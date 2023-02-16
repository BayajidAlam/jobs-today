import React, { useEffect, useState } from "react";
import { GoLocation } from 'react-icons/go';
const FresherJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("fresherJob.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="py-12 bg-base-300">
      <p className="text-center">Job Categories</p>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">Fresher Jobs</h1>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div 
            key={job._id}
            className="flex justify-between items-center w-2/3 mx-auto bg-base-100 shadow-xl p-8 rounded-xl">
                <div className="flex w-1/2 justify-between items-center flex-col">
                <h1 className="text-2xl font-semibold">{job.positionName}</h1>
                <div className="flex">
                  <p className="mr-4">{job.companyName}</p>
                  <p className="flex items-center"> <GoLocation/>{job.location}</p>
                </div>
                </div>
                <div>
                      <button className="btn btn-sm bg-[#00D0FF]">Apply</button>
                </div>
          </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default FresherJobs;
