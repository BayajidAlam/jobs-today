import React, { useEffect, useState } from "react";

const TopItCompany = () => {
  const [bdTop3, setBdTop3] = useState([]);
  const [worldTop3, setworldTop3] = useState([]);

  // fetch bd top 3 from server
  useEffect(() => {
    fetch("https://job-today-server.vercel.app/bdTop3")
      .then((res) => res.json())
      .then((data) => setBdTop3(data));
  }, []);

  // fetch world top 3 from server
  useEffect(() => {
    fetch("https://job-today-server.vercel.app/worldTop3")
      .then((res) => res.json())
      .then((data) => setworldTop3(data));
  }, []);

  console.log(bdTop3, worldTop3);
  return (
    <div>
      <p className="text-center">Top It Company</p>
      <div className="container mx-auto">
        {/* top 3 company in bd section  */}
        <h1 className="text-center lg:text-3xl text-2xl font-bold mb-4">
          Top 3 company in Bangladesh
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {bdTop3.map((single) => (
            <div className="card card-compact lg:w-96 bg-base-100 w-full shadow-xl mx-auto lg:my-4 md:mb-2">
              <figure>
                <img src={single.logo} className="w-full h-48" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{single.companyName}</h2>

                <div className="card-actions justify-center">
                  <button className="btn bg-[#00D0FF] btn-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* top 3 company in the world section  */}

        <h1 className="text-center lg:text-3xl text-2xl font-bold my-4">
          Top 3 company in the world
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-4">
          {worldTop3.map((single) => (
            <div className="card card-compact lg:w-96 w-full bg-base-100 shadow-xl mx-auto lg:my-4">
              <figure className="w-full h-48">
                <img src={single.logo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{single.companyName}</h2>
                <div className="card-actions justify-center">
                  <button className="btn bg-[#00D0FF] btn-md">
                    View Details
                  </button>
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
