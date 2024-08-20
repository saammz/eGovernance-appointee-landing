import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export const Details = ({ adviser }) => {
  const { name } = useParams();
  const selectedAdviser = adviser.find((a) => a.name === name);

  const navigate = useNavigate()

  const backToMain = ()=>{
    navigate(`/`);
  }

  if (!selectedAdviser) {
    return <p>No details found for this appointee.</p>;
  }

  return (
    <div className="details-page relative flex justify-center p-24 bg-gray-50 min-h-screen">
      <div className="relative container flex justify-center gap-16">
        <div onClick={backToMain} className="absolute top-0 left-0 -mt-20 rounded-full p-3 border border-green-500 cursor-pointer ">
        <IoArrowBack className="w-8 h-8"/>
        </div>
        <div className="w-[500px] h-[600px] rounded-lg overflow-hidden border-2 border-green-500">
          <img src={selectedAdviser.image} alt={selectedAdviser.name} />
        </div>
        <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center ">
            <h1 className="text-4xl">{selectedAdviser.name}</h1>
            <p > {selectedAdviser.position}</p>
          </div>
          <p className="text-gray-500">{selectedAdviser.office}</p>
        </div>
        <div>
          <h2 className="text-2xl">Biography / Profile</h2>
        </div>

        </div>

      </div>
    </div>
  );
};
