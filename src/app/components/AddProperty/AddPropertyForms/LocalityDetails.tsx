import React, { useState } from "react";
import localityData from "../AddPropertyData.json";
import Map from '../Map'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, LatLng } from 'leaflet';
import SaveContinueButton from "../SaveContinueButton";
import HelpInterest from "../HelpInterest";

interface Option {
  [key: string]: string | number;
}

interface LocalityField {
  label: string;
  [key: string]: string | Option[] | undefined;
}

interface LocalityDetailsData {
  id: number;
  name: string;
  icon: string;
  link: string;
  localityData: LocalityField[];
}

const LocalityDetails: React.FC = () => {

  
  // Find data for id = 2
  const localityDetailsData = (localityData as LocalityDetailsData[]).find(
    (item) => item.id === 2
  )?.localityData;

  if (!localityDetailsData) {
    return <p>No data found.</p>;
  }

  // Divide fields into left and right sections
  const [leftFields, setLeftFields] = useState<LocalityField[]>(
    localityDetailsData.slice(0, 1)
  );

  const [position, setPosition] = useState<LatLngExpression | null>(null);


  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          // console.log(position)
        },
        (error) => {
          console.error(error);
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Locality Details
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
      <div className="flex justify-between">
        <div className="w-[48%]">
          {leftFields.map((field, index) => (
            <div key={index} className="flex flex-col text-sm mb-10 mt-5">
              <label className="font-semibold text-[#635b63] mb-2">
                {field.label}
              </label>
              <select
                className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 "
                required
              >
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
            <label
              htmlFor=""
              className="font-semibold text-[#635b63] mb-3 text-sm "
            >
              Landmark / Street*
            </label>
            <input
              type="text"
              placeholder="e.g. Evergreen street"
              className="border border-gray-300 w-full py-2 px-2 text-[#837783] text-sm focus:outline outline-1 "
            />
          </div>
        </div>

        <div className="w-[48%] ">
          <div className="flex flex-col text-sm mb-5 mt-5">
            <label
              htmlFor=""
              className="font-semibold text-[#635b63] mb-1 text-sm "
            >
              Built Up Area*
            </label>
            <div className="flex justify-between items-center border border-gray-300 w-full py-2 px-2 text-sm ">
              <span>
                <img
                  src="https://assets.nobroker.in/nb-new/public/MaterialIcons/LocationOn.svg"
                  alt=""
                  className="w-5"
                />{" "}
              </span>
              <input
                type="text"
                placeholder="Enter location / society name"
                className="focus:outline-none w-80 pl-3"
              />
            </div>
            <span className=" cursor-pointer flex gap-2 text-sm pt-2 text-[#009587] font-semibold" onClick={handleUseCurrentLocation}>
              <img
                src="https://assets.nobroker.in/nb-new/public/List-Page/location.svg"
                alt=""
                className="w-5"
              />{" "}
              <p>Use Current Location</p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-6">
        <div className="flex">
          <img src="https://assets.nobroker.in/common/img/location_picker.png" alt="" className="w-8"/>
          <p className=" text-[#635b63]">Mark Locality on Map</p>
        </div>
        <p className=" text-[#948e94] text-sm mb-2 mt-1">Set property location by using search box and move the map</p>
        <div className="w-full h-[270px] overflow-hidden">
          <Map data={position} />
        </div>
      </div>
      <HelpInterest/>
      <SaveContinueButton />
    </div>
  );
};

export default LocalityDetails;
