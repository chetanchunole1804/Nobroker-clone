import React, { useState } from "react";
import TimeSchedule from "../TimeSchedule";
import { timeEnd } from "console";
import SaveContinueButton from "../SaveContinueButton";
import ProvidingAvailbility from "../ProvidingAvailbility";
import { Availability } from "../Availability";

const Schedule = () => {
  const [isPaintingDisabled, setIsPaintingDisabled] = useState(false);
  const [isCleaningDisabled, setIsCleaningDisabled] = useState(false);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [isAutoSet, setIsAutoSet] = useState<boolean>(false);

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };



  const handlePaintingChange = () => {
    setIsPaintingDisabled(!isPaintingDisabled);
  };

  const handleCleaningChange = () => {
    setIsCleaningDisabled(!isCleaningDisabled);
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
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative sm:pb-0 pb-20">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Make house visits hassle-free by providing us your availability
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
      <form action="">
        <div className="mt-10 text-sm flex justify-between mb-10 sm:flex-row flex-col  gap-5">
          <ProvidingAvailbility
            heading="Freshly Painted House gets Rented"
            heading2="out 73% faster"
            image="https://assets.nobroker.in/nb-new/public/Home-Services/painting.jpg"
            guarantee="Price Match Guarantee"
            warranty="1 Year warranty"
            startingAt="Get Professional Painting Starting at"
            rate="₹ 5/sqft"
            tag="I don't want Painting"
          />
          <ProvidingAvailbility
            heading="Tenants love a Clean and Spotless"
            heading2=" house!"
            image="https://assets.nobroker.in/nb-new/public/Home-Services/cleaning.jpg"
            guarantee="Same Day Service"
            warranty="5 Star Rated Partners"
            startingAt="Get Full Home Cleaning"
            rate="Starting from ₹ 1900!"
            tag="I don't want Cleaning"
          />
        </div>
        <hr />
        <div className="text-sm mt-5 gap-[43px] text-[#464646] w-full flex justify-between sm:flex-row flex-col ">
          <div className="">
            <label htmlFor="" className="font-semibold ">
              Availability
            </label>
            <div className=" flex gap-3  mt-3">
              <Availability days="Everyday" tag="Mon-Sun" selectedButton={selectedButton} handleButtonClick={handleButtonClick}/>
              <Availability days="Weekday" tag="Mon-Fri" selectedButton={selectedButton} handleButtonClick={handleButtonClick}/>
              <Availability days="Weekend" tag="Sat,Sun" selectedButton={selectedButton} handleButtonClick={handleButtonClick}/>
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
