import React, { useState } from "react";
import Dropdown from "../Shared/Dropdown";

const PropertyDetails = () => {
  const [apartmentType, setApartmentType] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [floor, setFloor] = useState("");
  const [totalFloor, setTotalFloor] = useState("");
  const [facing, setFacing] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");

  const handleSave = () => {
    console.log({
      apartmentType,
      bhkType,
      floor,
      totalFloor,
      facing,
      builtUpArea,
    });
  };
  return (
    <div className="sm:w-[60%] w-[100%] h-screen bg-white px-12 overflow-hidden relative">
      <h2 className="text-[] text-lg font-semibold py-4">Property Details</h2>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0"></div>


      <div className="mt-6">


        <div className="flex justify-between">
          <Dropdown
            label="Apartment Type*"
            options={["Independent House/Villa", "Flat"]}
            value={apartmentType}
            onChange={setApartmentType}
          />
          <Dropdown
            label="Apartment Name"
            options={["Apartment", "Independent House/Villa", "Gated Community Villa"]}
            value={bhkType}
            onChange={setBhkType}
          />
        </div>


        <div className="flex justify-between">
          <div className="flex flex-col text-sm mb-5">
            <label htmlFor="" className='font-semibold text-[#635b63] mb-1'>Apartment Type*</label>
            <select name="" id="" className='border border-gray-300 w-64 py-2 px-2 text-[#837783]'>
            <option value="Apartment" className="rounded-none">Apartment</option>
            <option value="Independent House/Villa">Independent House/Villa</option>
            <option value="Gated Comunity Villa">Gated Comunity Vill.a</option>
            </select>
          </div>
          <div>
            <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select>
          </div> 
        </div>


        
        <div>
          <label>Built-Up Area</label>
          <input
            type="number"
            value={builtUpArea}
            onChange={(e) => setBuiltUpArea(e.target.value)}
            placeholder="Sq. ft"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
