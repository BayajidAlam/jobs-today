import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import ExperiencdJob from "../ExperiencedJob/ExperiencdJob";

const ExperiencedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/experiencedJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="lg:pb-12 py-6 bg-base-300">
      <p className="text-center">Job Categories</p>
      <div className="container mx-auto">
        <h1 className="text-center lg:text-3xl text-2xl font-bold mb-4">
          Fresher Jobs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <ExperiencdJob key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencedJobs;
