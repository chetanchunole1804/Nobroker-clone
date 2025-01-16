import Image from "next/image";
import React from "react";
import Handlog from "../../../../public/assets/handlogo.png"
import services from "@/app/components/MainPageComponents/Data";

const UseNoBroker = () => {
  return (
    <div>
      {/* Section with Hand Logo */}
      <div className="w-full justify-center items-center p-3 bg-[#384D6C]">
        <div className="flex justify-center items-center gap-2">
          <Image src={Handlog} width={30} height={30} alt="Hand Logo" />
          <p className="text-white text-sm font-thin">
            Do you know how much loan you can get? Get maximum with NoBroker
          </p>
          <span className="bg-white p-1 rounded-lg text-sm">Check Eligibility</span>
        </div>
      </div>

      
      <div>
     
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 rounded-md  bg-white"
          >
            <Image
              src={service.img}
              width={50}
              height={50}
              alt={service.name}
              className="mb-2"
            />
            <p className="text-sm font-medium text-gray-700">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UseNoBroker;
