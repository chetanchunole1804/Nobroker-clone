"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SideNav from "./MainPageComponents/MobilComponentMainPage/SideNav";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const router = useRouter();

  const handleClick = () => {
    router.push("/AddProperty");
  };

  return (
    <div className="pb-[100px] md:pb-0">
      <div className="w-full flex md:justify-between bg-white shadow-md z-1 fixed items-center gap-2 px-5 py-6 nav_box_shadow flex-wrap">
        <span
          className="flex md:hidden relative gap-2 justify-center items-center cursor-pointer"

        >
          <div className=" absolute bg-black top-0 w-full z-50 h-full opacity-0 "
            onClick={toggleSidebar}></div>
          <Image
            src="https://assets.nobroker.in/nb-new/public/hamburger-menu.svg"
            width={24}
            height={24}
            alt="Hamburger Icon"
            className=" relative"


          />
        </span>
        <div>
          <Image
            src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
            alt="NoBroker Logo"
            width={120}
            height={40}
            unoptimized
          />
        </div>
        <div className="hidden md:flex right_nav h-fit text-sm justify-center items-center gap-4">
          <div className="border rounded-sm flex justify-center items-center h-8 px-2 text-center hover:bg-gray-100">
            <p>Pay rent</p>
          </div>
          <div
            onClick={handleClick}
            className="rounded-sm text-white bg-[#007A6F] justify-center text-[14px] h-8 items-center flex px-2 hover:bg-[#005f55]"
          >
            For Property owners
          </div>
          <div className="flex gap-2 justify-center items-center border-r pr-2">
            <div className="profile w-10 h-10 rounded-full flex justify-center items-center border">
              <div className="w-8 h-8 rounded-full bg-slate-400"></div>
            </div>
            <h1>Sign up</h1>
          </div>
          <div className="border-r pr-4">
            <h1>Log in</h1>
          </div>
        </div>
        {/* Moving Bar - Hidden when Sidebar is Open */}
        {isSidebarOpen || (
          <div className="md:hidden fixed right-0 left-0 top-[33px] flex justify-center z-31 pt-[25px]">
            <div
              className="rounded-[35px] shadow-[inset_-9px_-2px_3px_0px_#0000000D] relative w-[75%] flex items-center justify-center h-[32px] border-[1px] border-solid border-[#d4d2c6] px-[8px] bg-white"
            >
              {/* 1st block */}
              <div
                className="w-[24px] h-[24px] flex-shrink-0"
                style={{
                  backgroundImage:
                    "url('https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/homePageIconSpritenew.svg')",
                  backgroundPositionX: "-80px",
                  backgroundPositionY: "-233px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "307px",
                }}
              ></div>
              {/* 2nd block moving text */}
              <div className="flex flex-grow-1 h-[100%] overflow-hidden mr-[6px] items-center w-[100%] ">
                <div
                  className="flex flex-shrink-0 flex-grow-1 h-[40%] relative top-[1px] justify-center items-center"
                  style={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/nb-new/public/Home/FestiveServiceIcons/marqueediwalinew.svg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat no-repeat",
                    backgroundPosition: "0px 0px",
                    animation: "moveText 375s linear infinite",
                    width: "105%",
                  }}
                ></div>
              </div>
              {/* 3rd block */}
              <div
                className="h-[80%] w-[1px] flex-shrink-0 mr-[4px]"
                style={{
                  background:
                    "linear-gradient(173.49deg, rgba(248, 236, 238, 0) 10.25%, #867F7F 55.86%, rgba(241, 230, 231, 0) 89.19%)",
                }}
              ></div>

              {/* image */}
              <Image
                src={"https://assets.nobroker.in/nob-common/upto60offnew.svg"}
                width={80}
                height={12}
                className="relative top-[2px] flex-shrink-0"
                alt=""
              ></Image>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-full ${isSidebarOpen ? "w-[80%] md:w-[100%]" : "w-0"
          } bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out overflow-hidden`}
      >
        {/* <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-gray-600 hover:text-black"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div> */}
        {/* <ul className="p-4">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">About</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Services</li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Contact</li>
        </ul> */}
        <SideNav></SideNav>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Add CSS for Animation */}
      <style jsx>{`
        @keyframes moveText {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: -10000px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;