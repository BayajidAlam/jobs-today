import React, { useEffect, useState } from "react";
import ExperiencdJob from "../ExperiencedJob/ExperiencdJob";

const ExperiencedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-today-server.vercel.app/experiencedJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="bg-base-300">
      <p className="text-center">Job Categories</p>
      <div className="container mx-auto">
        <h1 className="text-center lg:text-3xl text-2xl font-bold mb-4">
          Experienced Jobs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <ExperiencdJob key={job._id} job={job} />
          ))}
        </div>
        <div className="text-center lg:my-4 mt-2">
          <button className="btn mb-4 btn-md bg-[#00D0FF] w-32 mx-auto">
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedJobs;
