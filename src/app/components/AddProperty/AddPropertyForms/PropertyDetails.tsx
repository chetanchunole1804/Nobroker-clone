import React, { useState } from "react";
import propertyData from "../AddPropertyData.json";

interface Option {
  [key: string]: string | number;
}

interface PropertyField {
  label: string;
  [key: string]: string | Option[] | undefined;
}

interface PropertyDetailsData {
  id: number;
  name: string;
  icon: string;
  link: string;
  PropertyData: PropertyField[];
}

const PropertyDetails: React.FC = () => {
  // Find the data with id: 1
  const propertyDetailsData = (propertyData as PropertyDetailsData[]).find(
    (item) => item.id === 1
  )?.PropertyData;

  if (!propertyDetailsData) {
    return <p>No data found.</p>;
  }

  const [leftFields, setLeftFields] = useState<PropertyField[]>(
    propertyDetailsData.slice(0, 4)
  );
  const [rightFields, setRightFields] = useState<PropertyField[]>(
    propertyDetailsData.slice(3, 8)
  );

  return (
    <div className="sm:w-[67%] w-[100%] h-screen bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Property Details
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>

      <div className="flex justify-between">
        <div className="w-[48%]">
          {leftFields.map((field, index) => (
            <div key={index} className="flex flex-col text-sm mb-5 mt-5">
              <label className="font-semibold text-[#635b63] mb-1">
                {field.label}
              </label>
              <select className="border border-gray-300 w-full py-2 px-2 text-[#837783]">
                <option value="" disabled selected>Select</option>
                {Object.entries(field)
                  .filter(([key, value]) => Array.isArray(value))
                  .flatMap(([key, optionsArray]) =>
                    (optionsArray as Option[]).flatMap((optionsObj) =>
                      Object.entries(optionsObj).map(([key, option], i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))
                    )
                  )}
              </select>
            </div>
          ))}
          <div>
            <label htmlFor="" className="font-semibold text-[#635b63] mb-1 text-sm ">Built Up Area*</label>
            <div className="flex justify-between items-center border border-gray-300 w-full py-2 px-2 text-sm">
            <input type="text"  placeholder="Built Up Area" className="focus:outline-none w-96"/>
            <span>Sq.ft</span>
            </div>
          </div>
        </div>

        <div className="w-[48%]">
          {rightFields.map((field, index) => (
            <div key={index} className="flex flex-col text-sm mb-5 mt-5">
              <label className="font-semibold text-[#635b63] mb-1">
                {field.label}
              </label>
              <select className="border border-gray-300 w-full py-2 px-2 text-[#837783]">
              <option value="" disabled selected>Select</option>
                {Object.entries(field)
                  .filter(([key, value]) => Array.isArray(value))
                  .flatMap(([key, optionsArray]) =>
                    (optionsArray as Option[]).flatMap((optionsObj) =>
                      Object.entries(optionsObj).map(([key, option], i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))
                    )
                  )}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

