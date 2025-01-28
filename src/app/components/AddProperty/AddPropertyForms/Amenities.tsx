import React, { useState } from "react";
import SaveContinueButton from "../SaveContinueButton";
import AmenitiesCheckvox from "../AmenitiesCheckbox";
import countries from "../ContriesList";
import SuggessionBox from "../SuggessionBox";
import { url } from "inspector";
import AvailableAmenities from "../AvailableAmenities";
import ShowCountryDialCode from "../ShowCountryDialCode";
import AvailableAmenitiesData from "../AvailableAmenitiesData";

// interface AmenitiesData {
//   id: number;
//   backgroundImage: string;
//   backgroundPosition: string;
//   label: string;
//   AmenitiesData: AmenitiesField[];
// }

const Amenities = () => {
  const [bedRoom, setBedRoom] = useState<number>(0);
  const [balcony, setBalcony] = useState<number>(0);

  const roomIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBedRoom((room) => room + 1);
  };

  const roomDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBedRoom((room) => (room > 0 ? room - 1 : 0));
  };
  const balconyIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBalcony((room) => room + 1);
  };

  const balconyDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setBalcony((room) => (room > 0 ? room - 1 : 0));
  };

  const [value, setValue] = useState<"yes" | "no" | null>(null);

  const handleChange = (newValue: "yes" | "no") => {
    setValue(newValue);
    console.log(value);
  };

  const leftAmenities = AvailableAmenitiesData.slice(0, 9);
  const rightAmenities = AvailableAmenitiesData.slice(9, 17);
  

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Provide additional details about your property to get maximum visibilty
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>

      <form action="" className="text-sm text-[#837783] mt-4">
        <div className="flex w-full sm:flex-row flex-col sm:justify-between">
          <div>
            <label htmlFor="">Bathroom(s)*</label>
            <div className="w-full border border-gray-300 rounded flex justify-between gap-16 px-1 py-1 mt-2 items-center">
              <button
                type="button"
                onClick={roomDecrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                -
              </button>
              <span>{bedRoom}</span>
              <button
                type="button"
                onClick={roomIncrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="">Balcony</label>
            <div className="w-full border border-gray-300 rounded flex justify-between gap-16 px-1 py-1 mt-2 items-center">
              <button
                type="button"
                onClick={balconyDecrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                -
              </button>
              <span>{balcony}</span>
              <button
                type="button"
                onClick={balconyIncrement}
                className="w-8 rounded-md font-bold text-2xl bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="relative">
            <label htmlFor="" className="font-semibold">
              Water Supply
            </label>
            <div>
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/icon/water.png"
                alt=""
                className=" absolute  top-9 left-2 w-5 "
              />
              <select
                className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 mt-2 pl-8"
                name=""
                id=""
              >
                <option value="Select" disabled>
                  Select
                </option>
                <option value="Corporation">Corporation</option>
                <option value="Boarell">Boarell</option>
                <option value="both">both</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-7 text-xs sm:flex-row flex-col ">
          <div className="flex items-center border border-gray-300 px-1 py-1 sm:w-[33%] gap-2 rounded">
            <img
              src="https://assets.nobroker.in/nb-new/public/Pyp-Form/gym_black_new.svg"
              alt=""
            />
            <p>Gym*</p>
            <AmenitiesCheckvox label="Gym" />
          </div>
          <div className="flex items-center border border-gray-300 px-1 py-1 sm:w-[33%] gap-2 rounded">
            <img
              src="https://assets.nobroker.in/static/img/postYourProperty/icon/nonveg.png"
              alt=""
            />
            <p>Non-Veg Allowed*</p>
            <AmenitiesCheckvox label="non-veg" />
          </div>
          <div className="flex items-center border border-gray-300 px-1 py-1 sm:w-[33%] gap-2 rounded">
            <img
              src="https://assets.nobroker.in/static/img/postYourProperty/icon/security.png"
              alt=""
            />
            <p>Gated Security*</p>
            <AmenitiesCheckvox label="security" />
          </div>
        </div>

        <div className="mt-8 flex gap-4 sm:flex-row flex-col ">
          <div>
            <label htmlFor="" className="font-semibold">
              Who will show the property?*
            </label>
            <div className="relative">
              <img
                src="https://assets.nobroker.in/static/img/postYourProperty/icon/Key.png"
                alt=""
                className=" absolute  top-4 left-2 w-5 "
              />
              <select
                className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 mt-2 pl-8"
                name=""
                id=""
              >
                <option value="Select" disabled>
                  Select
                </option>
                <option value="Need help">Need help</option>
                <option value="I will show">I will show</option>
                <option value="Neighbours">Neighbours</option>
                <option value="Friends/Relative">Friends/Relative</option>
                <option value="Security">Security</option>
                <option value="Tenants">Tenants</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Secondary Number
            </label>
            <div className="flex px-2 py-2 border border-gray-300 w-full mt-2">
              <ShowCountryDialCode />
              <input
                type="phone"
                className=" focus:outline-none pl-2 "
                placeholder="Secondary Number"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row  px-2 py-3 border border-gray-300 sm:w-[75%] items-center mt-4 rounded">
          <p>
            Do you have more similar{" "}
            <span className="font-semibold">units/properties</span> availaible ?
          </p>
          <AmenitiesCheckvox label="similer" />
        </div>

        <div className="mt-4">
          <label className="font-semibold">
            Add Directions Tip for your tenants{" "}
            <sup className="bg-red-500 uppercase rounded-xl text-white px-1">
              New
            </sup>{" "}
          </label>
          <SuggessionBox />
          <textarea
            name=""
            id=""
            className="mt-5 w-full h-24 rounded-e-none outline-none border p-2 mb-6"
            placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..."
          ></textarea>
        </div>
        <hr />
        <div className="mt-5">
          <label htmlFor="" className="font-semibold text-base">
            Select the available amenities
          </label>
          <div className=" mt-8 mb-10">
            <div className="flex justify-between sm:flex-row flex-col">
              <div className="w-full ">
                {leftAmenities.map((item) => (
                  <AvailableAmenities
                  key={item.label}
                  customStyle={{
                      backgroundImage: item.backgroundImage,
                      backgroundPosition: item.backgroundPosition,
                    }}
                    label={item.label}
                    
                  />
                ))}
              </div>
              <div className="w-full">
                {rightAmenities.map((item) => (
                  <AvailableAmenities
                  key={item.label}
                    customStyle={{
                      backgroundImage: item.backgroundImage,
                      backgroundPosition: item.backgroundPosition,
                    }}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* <SaveContinueButton /> */}
    </div>
  );
};

export default Amenities;
