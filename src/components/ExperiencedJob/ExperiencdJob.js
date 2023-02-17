import React from 'react';

const ExperiencdJob = ({job}) => {

  const {logo,companyName,location,positionName} = job;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{positionName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#00D0FF] btn-md">Apply</button>
    </div>
  </div>
</div>
  );
};

export default ExperiencdJob;