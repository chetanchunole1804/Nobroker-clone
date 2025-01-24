import React, { useState } from "react";
import SaveContinueButton from "../SaveContinueButton";

interface Option {
  [key: string]: string | number;
}

interface RentalField {
  label: string;
  [key: string]: string | Option[] | undefined;
}

interface RentalDetailsData {
  id: number;
  name: string;
  icon: string;
  link: string;
  RentalField: RentalField[];
}

const RentalDetails = () => {
  const [rentType, setRentType] = useState("amount");
  const [maintenance, setMaintenance] = useState(false);

  const handleRentTypeChange = (value: string) => {
    setRentType(value);
  };

  // const rentalDetailsData = (rentalData as RentalDetailsData[]).find(
  //   (item) => item.id === 3
  // )?.RentalData;

  // if (!rentalDetailsData) {
  //   return <p>No data found.</p>;
  // }

  // const [leftFields, setLeftFields] = useState<RentalField>(
  //     // RentalDetailsData.slice(0, 1)
  //   );
  //   const [rightFields, setRightFields] = useState(
  //     // RentalDetailsData.slice(3, 8)
  //   );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedReantType = event?.target.value;
    setMaintenance(selectedReantType === "Maintenance Extra");
  };

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    selectAll: false, // Special checkbox
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === "selectAll") {
      // Select/deselect all checkboxes
      setCheckboxes({
        checkbox1: checked,
        checkbox2: checked,
        checkbox3: checked,
        checkbox4: checked,
        selectAll: checked,
      });
    } else {
      // Update individual checkboxes
      setCheckboxes((prevState) => ({
        ...prevState,
        [name]: checked,
        // Uncheck "selectAll" if any individual checkbox is unchecked
        selectAll:
          name !== "selectAll" && prevState.selectAll && !checked
            ? false
            : prevState.selectAll,
      }));
    }
  };

  return (
    <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative">
      <h1 className="text-[#009587] text-lg font-semibold py-4">
        Provide rental details about your property
      </h1>
      <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>

      <form action="" className="text-sm text-[#837783] mt-5">
        <div>
          <label htmlFor="" className="font-semibold  mb-1">
            Property available for
          </label>
          <div className="flex gap-2 mt-3 ">
            <label className="flex items-center cursor-pointer mr-3">
              <input
                type="radio"
                name="property-availability"
                value="only-rent"
                onChange={() => handleRentTypeChange("only-rent")}
                className="hidden peer"
              />
              <span className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2 flex items-center justify-center peer-checked:border-[#009587] peer-checked:ring-[] peer-checked:bg-[#009587]">
                <span className="w-2 h-2 peer-checked:bg-red-500 rounded-full"></span>
              </span>
              <span>Only rent</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="property-availability"
                value="Only-lease"
                onChange={() => handleRentTypeChange("only-lease")}
                className="hidden peer "
              />
              <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center mr-2 justify-center peer-checked:border-[#009587] peer-checked:ring-[] peer-checked:bg-[#009587]">
                <span className="w-2 h-2 peer-checked:bg-red-500 rounded-full"></span>
              </span>
              <span>Only lease</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[45%]">
            <label htmlFor="" className="font-semibold  mb-1">
              {" "}
              {rentType === "only-rent"
                ? "Expected Rent*"
                : rentType === "only-lease"
                ? "Expected Lease Amount*"
                : "Expected Amount*"}
            </label>
            <div className="flex gap-2 items-center border border-gray-300 w-full px-2 py-1 text-sm text-[#837783] mt-2 focus:outline outline-1">
              <span className="text-xl font-semibold ">₹</span>
              <input
                type="text"
                placeholder="Enter Amount"
                className=" outline-none text-sm"
              ></input>
              {rentType === "only-rent" ? <span>/month</span> : <span></span>}
            </div>
          </div>
          <div className="w-[45%]">
            {rentType === "only-rent" ? (
              <div>
                <label htmlFor="" className="font-semibold  mb-1">
                  Expected Deposit*
                </label>
                <div className="flex gap-2 items-center border border-gray-300 w-full px-2 py-1 text-sm text-[#837783] mt-2">
                  <span className="text-xl font-semibold ">₹</span>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className=" outline-none text-sm"
                  ></input>
                  <span>/month</span>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="w-[45%]">
            <label htmlFor="" className="font-semibold  mb-1">
              Monthly Maintenance
            </label>
            <select
              name=""
              id=""
              className="flex gap-2 items-center border border-gray-300 w-full px-2 py-2 text-sm text-[#837783] mt-2 focus:outline outline-1"
              onChange={handleSelectChange}
            >
              <option value="Select" selected disabled>
                Select
              </option>
              <option value="Maintenance Included">
                {" "}
                Maintenance Included
              </option>
              <option value="Maintenance Extra">Maintenance Extra</option>
            </select>
          </div>
          <div className="w-[45%]">
            {maintenance ? (
              <div>
                <label htmlFor="" className="font-semibold  mb-1">
                  Maintenance Amount*
                </label>
                <div className="flex gap-2 items-center border border-gray-300 w-full px-2 py-1 text-sm text-[#837783] mt-2">
                  <span className="text-xl font-semibold ">₹</span>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className=" outline-none text-sm"
                  ></input>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="mt-3 w-[45%]">
          <label htmlFor="" className="font-semibold">
            Available From*
          </label>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="border border-gray-300 w-full py-2 px-2 focus:outline outline-1 mt-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Preferred Tenants*
          </label>
          <div className="flex gap-8  items-center mt-2">
            {" "}
            <span className="flex gap-2">
              <input type="checkbox" value="Anyone" />
              Anyone
            </span>
            <span className="flex gap-2">
              <input type="checkbox" value="Family" />
              Family
            </span>
            <span className="flex gap-2 ">
              <input type="checkbox" value="Bachelor Female" />
              Bachelor Female
            </span>{" "}
            <span className="flex gap-2">
              <input type="checkbox" value="Bachelor Male" />
              Bachelor Male
            </span>
            <span className="flex gap-2">
              <input type="checkbox" value="Company" />
              Company
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-[45%] relative ">
            <label htmlFor="" className="font-semibold">
              Furnishing*
            </label>
            <img
              src="https://www.nobroker.in/static/img/postYourProperty/icon/furnishing.png"
              alt=""
              className=" absolute  top-9 left-2 w-5 "
            />
            <select
              className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 mt-2 pl-8"
              name=""
              id=""
            >
              <option value="Select" selected disabled>
                Select
              </option>
              <option value="Fully furnished">Fully furnished</option>
              <option value="semi-furnished">semi-furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </div>
          <div className="w-[45%] relative ">
            <label htmlFor="" className="font-semibold">
              Furnishing*
            </label>
            <img
              src="https://www.nobroker.in/static/img/parking.png"
              alt=""
              className=" absolute  top-9 left-2 w-5 "
            />
            <select
              className="border border-gray-300 w-full py-2 px-2 text-[#837783] focus:outline outline-1 mt-2 pl-8"
              name=""
              id=""
            >
              <option value="Select" selected disabled>
                Select
              </option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="both">Both</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="font-semibold">
            Preferred Tenants*
          </label>
          <textarea
            name=""
            id=""
            className="w-full border row-start-2 p-2 outline-none mt-2 h-50"
            placeholder="Write few lines about your property somthing which is special and make your property stand out. Please do no mention your contact details in any format."
          ></textarea>
        </div>
        {/* <SaveContinueButton/> */}
      </form>
    </div>
  );
};

export default RentalDetails;
