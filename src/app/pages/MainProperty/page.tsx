import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center w-[100vw] items-center">
      <div className=" w-[65%] flex flex-col justify-center items-center mt-14 ">
        <h1 className="text-3xl text-[#787676]">
          World's Largest NoBrokeerage Property Site
        </h1>

        <div className="bg-[#FEF0DA] rounded-sm  p-3 mt-5">
          <div className="flex justify-center gap-2 items-center ">
            <Image
              src="https://assets.nobroker.in/nob-common/HomeInteriorHome.svg"
              width={30}
              height={30}
            />
            <h1 className="text-sm">Home Interiors </h1>
            |
            <Image
              src="https://assets.nobroker.in/nob-common/HomeInteriorDeliveryHome.svg"
              width={25}
              height={25}
            />
            <h1 className="text-sm">45-Days Guarantee</h1>
          </div>
        </div>

        <div className="search text-xl flex flex-col justify-center w-fit items-center  mt-6">
          <div className="flex border ">
            <div className="border px-10 text-lg  text-[#AFAAAA]  py-2">
              Buy
            </div>
            <div className="border px-10 text-lg  text-[#AFAAAA] py-2">
              Rent
            </div>
            <div className="border px-10 text-lg  text-[#AFAAAA] py-2">
              Commercial
            </div>
          </div>
          <div className="border flex flex-col">
            <div className=" flex">
              <select className=" p-4 border ">
                No brokeerage
                <option className="text-sm" value="">
                  pune
                </option>
                <option value="">No brokeerage</option>
              </select>
              <input
                className="border p-3 text-lg w-[40vw]"
                type="text"
                placeholder="Search upto 3 localities or landmarks"
              />
              <div className="bg-red-600 text-white w-fit px-4 flex justify-center items-center ">
                {" "}
                <Image
                  src="https://assets.nobroker.in/nb-new/public/Home/searchIcon.svg"
                  width={20}
                  height={20}
                />{" "}
                Search
              </div>
            </div>

            <div className="border flex justify-around items-center gap-2 ">
              <label className="text-sm" htmlFor="">
                {" "}
                <input className="p-2 text-sm" name="radio" type="radio" />
                &nbsp; Full House
              </label>
              <label className="text-sm" htmlFor="">
                {" "}
                <input className="p-2 " name="radio" type="radio" />
                &nbsp; Land/Plot
              </label>
              <div className="">
                <div className=" flex gap-2 p-3">
                  <select
                    className="pr-28 py-2 border text-sm "
                    name="BHK Type"
                    id=""
                  >
                    <option className="bg-[#AFAAAA]" value="">
                      BHk type
                    </option>
                    <option value="">BHk TYPe</option>
                  </select>
                  <select
                    className="pr-28 py-2 border text-sm "
                    name="BHK Type "
                    id=""
                  >
                    <option className="bg-[#AFAAAA]" value="">
                      BHk type
                    </option>
                    <option value="">BHk TYPe</option>
                  </select>
                  <div className="flex gap-2 items-center border px-3 py-2">
                    <input type="checkbox" id="myCheckbox" />
                    <label className="text-sm" for="myCheckbox">
                      New Builder Projects
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center flex-col items-center">
        <div className="flex justify-center items-center gap-2 ">
          
          <div className="w-20 h-[2px] bg-gray-200"></div>


          <h1>Are you a Property Owner?</h1>
        
        <div className="w-20 h-[2px] bg-gray-200"></div>
        </div>
        <div className="text-white text-center w-fit text-base py-2 rounded-sm mt-4 bg-[#007A6F] px-5 ">
          Post Free Property Ad
        </div>
      </div>
    </div>
  );
};

export default page;
