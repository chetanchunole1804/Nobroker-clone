import React, { useState } from "react";
import TimeSchedule from "../TimeSchedule";
import { timeEnd } from "console";
import SaveContinueButton from "../SaveContinueButton";

const Schedule = () => {
  const [isPaintingDisabled, setIsPaintingDisabled] = useState(false);
  const [isCleaningDisabled, setIsCleaningDisabled] = useState(false);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [isAutoSet, setIsAutoSet] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handlePaintingChange = () => {
    setIsPaintingDisabled(!isPaintingDisabled);
  };

  const handleCleaningChange = () => {
    setIsCleaningDisabled(!isCleaningDisabled);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    console.log("hjsbdjf", selectedButton);
  };

  const handleCheckboxChange = (time: any) => {
    if (!isAutoSet) {
      // Automatically set default start and end times
      setStartTime((time = "7:00 AM"));
      setEndTime("10:00 PM");
      console.log(startTime, endTime);
    } else {
      // Clear times when unchecked
      setStartTime(null);
      setEndTime(null);
    }
    setIsAutoSet(!isAutoSet);
  };
  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Make house visits hassle-free by providing us your availability
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
      <form action="">
        <div className="mt-10 text-sm flex justify-between mb-10">
          <div className="border bg-gray-100 px-2 py-4">
            <div className="flex mt-2">
              <div className="mr-4">
                <p className="font-semibold mb-1">
                  Freshly Painted House gets Rented
                </p>
                <p className="font-semibold">out 73% faster</p>
              </div>
              <img
                src="https://assets.nobroker.in/nb-new/public/Home-Services/painting.jpg"
                alt=""
                className="w-20 h-16 rounded-md"
              />
            </div>
            <div className="flex gap-2 items-center">
              <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
                <img
                  src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
                  alt=""
                  className="w-3"
                />{" "}
                <p>Price Match Guarantee</p>
              </span>
              <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
                <img
                  src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
                  alt=""
                  className="w-3"
                />{" "}
                <p>1 Year warranty</p>
              </span>
            </div>
            <p className="mt-2">
              Get Professional Painting Starting at
              <span className="font-semibold">₹ 5/sqft</span>
            </p>
            <div className="flex gap-2  mt-4 justify-center">
              <button className="bg-gray-50 border py-2 px-2 rounded font-semibold">
                Tell me the price{" "}
              </button>
              <span
                className="border py-2 px-2 rounded font-semibold cursor-pointer"
                style={{
                  backgroundColor: isPaintingDisabled ? "#009587" : "#f9fafb",
                  transition: "color 0.5s",
                  color: isPaintingDisabled ? "white" : "black",
                }}
                onClick={handlePaintingChange}
              >
                I don't want Painting{" "}
              </span>
            </div>
          </div>
          <div className="border bg-gray-100 px-2 py-4">
            <div className="flex mt-2">
              <div className="mr-4">
                <p className="font-semibold mb-1">
                  Tenants love a Clean and Spotless
                </p>
                <p className="font-semibold"> house!</p>
              </div>
              <img
                src="https://assets.nobroker.in/nb-new/public/Home-Services/cleaning.jpg"
                alt=""
                className="w-20 h-16 rounded-md"
              />
            </div>
            <div className="flex gap-2 items-center">
              <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
                <img
                  src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
                  alt=""
                  className="w-3"
                />{" "}
                <p>Same Day Service</p>
              </span>
              <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
                <img
                  src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
                  alt=""
                  className="w-3"
                />{" "}
                <p>5 Star Rated Partners</p>
              </span>
            </div>
            <p className="mt-2">
              Get Full Home Cleaning
              <span className="font-semibold">Starting from ₹ 1900!</span>
            </p>
            <div className="flex gap-2 mt-4 justify-center">
              <button className="bg-gray-50 border py-2 px-2 rounded font-semibold">
                Tell me the price{" "}
              </button>
              <span
                className="border py-2 px-2 rounded font-semibold cursor-pointer"
                style={{
                  backgroundColor: isCleaningDisabled ? "#009587" : "#f9fafb",
                  transition: "color 0.5s",
                  color: isCleaningDisabled ? "white" : "black",
                }}
                onClick={handleCleaningChange}
              >
                I don't want Cleaning{" "}
              </span>
            </div>
          </div>
        </div>
        <hr />

        <div className="text-sm mt-5 flex gap-[43px] text-[#464646]">
          <div>
            <label htmlFor="" className="font-semibold ">
              Availability
            </label>
            <div className="flex gap-2 mt-3">
              <span
                onClick={() => handleButtonClick("Everyday")}
                style={{
                  transition: "color 0.5s",
                }}
                className={`bg-gray-100 rounded border px-6 py-[3px] cursor-pointer text-center ${
                  selectedButton === "Everyday"
                    ? "bg-teal-600 text-white"
                    : "bg-[#f9fafb] text-black"
                }`}
              >
                Everyday <p className="text-[10px]">Mon-Sun</p>
              </span>
              <span
                onClick={() => handleButtonClick("Weekday")}
                style={{
                  transition: "color 0.5s",
                }}
                className={`bg-gray-100 rounded border px-6 py-[3px] cursor-pointer text-center ${
                  selectedButton === "Weekday"
                    ? "bg-teal-600 text-white"
                    : "bg-[#f9fafb] text-black"
                }`}
              >
                Weekday <p className="text-[10px]">Mon-Fri</p>
              </span>
              <span
                onClick={() => handleButtonClick("Weekend")}
                style={{
                  transition: "color 0.5s",
                }}
                className={`bg-gray-100 rounded border px-6 py-[3px] cursor-pointer text-center ${
                  selectedButton === "Weekend"
                    ? "bg-teal-600 text-white"
                    : "bg-[#f9fafb] text-black"
                }`}
              >
                Weekend <p className="text-[10px]">Sat,Sun</p>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="" className="font-semibold ">
              Select Time Schedule
            </label>
            <div className=" mt-4 flex gap-12">
              <div className="">
                <TimeSchedule
                  label={"Start Time"}
                  onTimeSelect={(time) => {
                    setStartTime(time);
                  }}
                />
                <p className="mt-2">
                  <input
                    type="checkbox"
                    checked={isAutoSet}
                    onChange={handleCheckboxChange}
                  />{" "}
                  <span>Available All Day</span>
                </p>
              </div>
              <div>
                <TimeSchedule
                  label={"End Time"}
                  onTimeSelect={(time) => {
                    setEndTime(time);
                    console.log("End Time:", time);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <SaveContinueButton /> */}
      </form>
    </div>
  );
};

export default Schedule;
