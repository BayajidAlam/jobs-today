import React, { useEffect, useState } from "react";

const TopItCompany = () => {
  const [bdTop3, setBdTop3] = useState([]);
  const [worldTop3, setworldTop3] = useState([]);

  // fetch bd top 3 from server
  useEffect(() => {
    fetch("http://localhost:5000/bdTop3")
      .then((res) => res.json())
      .then((data) => setBdTop3(data));
  }, []);

  // fetch world top 3 from server
  useEffect(() => {
    fetch("http://localhost:5000/worldTop3")
      .then((res) => res.json())
      .then((data) => setworldTop3(data));
  }, []);

  console.log(bdTop3, worldTop3);
  return (
    <div>
      <p className="text-center">Top It Company</p>
      <div className="container mx-auto">
        <h1 className="text-center lg:text-3xl text-2xl font-bold mb-4">
          Top 3 company in Bangladesh
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {bdTop3.map((single) => (
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-4">
              <figure>
                <img
                  src={single.logo}
                  className="w-full h-48"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopItCompany;
