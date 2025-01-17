"use client";
import UseNoBroker from "@/app/components/MainPageComponents/UseNoBrokerBuy";
import Image from "next/image";
import { useState } from "react";
import Handlog from "../../../../public/assets/building.png";
import RentServices from "@/app/components/MainPageComponents/UseNoBrokerRent";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MainPageBottom from "@/app/components/MainPageBottom";
import Mobile_assets from "../../../../public/assets/mobile_assets.svg"


const Page = () => {
  const [activeOption, setActiveOption] = useState("Buy");
  const options = ["Buy", "Rent", "Commercial"];

  const router = useRouter()

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 ml-0">
        <div className="flex flex-col justify-center items-center p-4">
          <div className="w-full max-w-4xl flex flex-col justify-center items-center md:mt-14">
            {/* Header Section */}
            <div>
              {/* Visible on Desktop */}
              <h1 className="text-3xl hidden md:block text-[#787676] text-center">
                World's Largest No Brokerage Property Site
              </h1>

              {/* Visible on Mobile */}
              <h2 className="block md:hidden text-base text-[#787676] text-center">
                100% Owner Properties | Zero Brokerage
              </h2>
            </div>

            {/* Guarantee Section */}
            <div className="bg-[#FEF0DA] hidden md:block rounded-sm p-3 mt-5">
              <div className="flex justify-center gap-2 items-center">
                <Image
                  src="https://assets.nobroker.in/nob-common/HomeInteriorHome.svg"
                  width={30}
                  height={30}
                  alt="Home Interiors"
                />
                <h1 className="text-sm">Home Interiors</h1>
                <span>|</span>
                <Image
                  src="https://assets.nobroker.in/nob-common/HomeInteriorDeliveryHome.svg"
                  width={25}
                  height={25}
                  alt="45-Days Guarantee"
                />
                <h1 className="text-sm">45-Days Guarantee</h1>
              </div>
            </div>

            {/* Search Section */}
            <div className="search text-xl flex flex-col justify-center w-full items-center mt-6">
              <div className="flex md:border">
                {options.map((item) => (
                  <div
                    key={item}
                    className={`relative md:border px-10 md:px-10 text-base md:text-lg py-2 cursor-pointer ${
                      activeOption === item
                        ? "text-[#FD3752] font-bold"
                        : "text-[#AFAAAA]"
                    }`}
                    onClick={() => setActiveOption(item)}
                  >
                    {item}
                
                    {activeOption === item && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FD3752]"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="border rounded-xl md:rounded-sm flex w-full  flex-col mt-4 md:mt-0">
                <div className="flex px-2 md:p-0 md:flex-row">
                  <select className="p-2 text-sm hidden md:block w-[15%] border">
                    <option className="text-xs" value="">
                      No brokerage
                    </option>
                    <option value="pune">Pune</option>
                  </select>
                  <input
                    className="md:border p-2 text-sm md:text-lg w-full  md:w-[70%] mt-2 md:mt-0"
                    type="text"
                    placeholder="Search up to 3 localities or landmarks"
                  />
                  <button className="bg-[#FD3752] rounded-xl md:rounded-none w-[15%] text-white  px-4 flex justify-center items-center mt-2 md:mt-0">
                    <Image
                      src="https://assets.nobroker.in/nb-new/public/Home/searchIcon.svg"
                      width={20}
                      height={20}
                      alt="Search"
                      className=""
                    />
                    <span className="hidden md:inline ml-2">Search</span>
                  </button>
                </div>
                {/* Filters */}
                <div className="border bg-[#F8F8F8] md:bg-white rounded-lg md:rounded-none  flex flex-wrap justify-around items-center gap-2 mt-3 md:mt-0">
                  <div className="flex justify-between block md:hidden items-center  w-full  p-2">
                    <div className=" flex gap-2">
                      <Image src={Handlog} width={40} height={20} alt="" />
                      <div className="">
                        <h2 className="text-xs">Continue Last Search</h2>
                        <h1 className="text-sm">Kharadi,Pune</h1>
                      </div>
                    </div>
                    <div className="w-2 h-2">
                      <Image width={20} height={20} src="" alt="" />
                    </div>
                  </div>

                  <div className="flex gap-2 w-[20%]">
                    {["Full House", "Land/Plot"].map((item) => (
                      <label className="text-sm md:flex hidden " key={item}>
                        <input
                          className="p-2 hidden md:block text-sm"
                          name="radio"
                          type="radio"
                        />
                        &nbsp; {item}
                      </label>
                    ))}
                  </div>

                  <div className="flex w-[70%]  gap-2">
                    {Array(2)
                      .fill("BHK Type")
                      .map((item, idx) => (
                        <select
                          key={idx}
                          className="pr-10 w-[30%] hidden md:block py-2 2 border text-sm"
                          name={item}
                        >
                          <option
                            className="bg-[#AFAAAA] hidden md:block"
                            value=""
                          >
                            {item}
                          </option>
                        </select>
                      ))}
                    <div className="flex gap-2 hidden md:block items-center border px-3 py-2">
                      <input type="checkbox" id="newProjects" />
                      <label className="text-sm" htmlFor="newProjects">
                        New Builder Projects
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
          <div className="mt-12  hidden md:block flex flex-col items-center">
            <div className="flex justify-center items-center gap-2">
              <div className="w-20 h-[2px] bg-gray-200"></div>
              <h1>Are you a Property Owner?</h1>
              <div className="w-20 h-[2px] bg-gray-200"></div>
            </div>
            <Link href="/AddProperty">
            <button className="text-white text-center w-fit text-base py-2 rounded-sm mt-4 bg-[#007A6F] px-5">
              Post Free Property Ad
            </button>
            </Link>
          </div>

<div className="w-full rounded-xl bg-[#4F3B2D] flex justify-between p-4 mt text-white  ">
  <div className="">
   <h1 className=" font-semibold">Looking for Tenats/ Buyers ?</h1>
   <h3 className="text-sm">🗲 Faster & Verified Tenants/Buyers</h3>
   <h3 className="text-sm">🗲 Pay Zero brokerage</h3>
   <div className="px-3 py-2 mt-3 rounded-lg text-white font-semibold w-fit bg-[#FD3752]">Post FREE Property Ad</div>
  </div>
  <div className="w-[50px] overflow-hidden  object-cover">
  <Image src={Mobile_assets} className=" " alt="" />
  </div>
</div>


        </div>

      
        {activeOption === "Rent" && <RentServices />}
        {(activeOption === "Buy" || activeOption === "Commercial") && <UseNoBroker />}

        <MainPageBottom/>
      </div>
      
    </div>
  );
};

export default Page;
