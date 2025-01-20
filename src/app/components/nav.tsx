
"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const router = useRouter()

  const handleClick = ()=>{
    router.push("/AddProperty")
  }

  return (
    <div>
      <div className="w-full flex md:justify-between bg-white shadow-md  z-30 fixed items-center gap-2 px-5 py-3 nav_box_shadow flex-wrap">
      <div
          className="flex md:hidden gap-2 justify-center items-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image
            src="https://assets.nobroker.in/nb-new/public/hamburger-menu.svg"
            width={24}
            height={24}
            alt="Hamburger Icon"
          />
        </div>
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
          <div onClick={handleClick} className="rounded-sm text-white bg-[#007A6F] justify-center text-[14px] h-8 items-center flex px-2 hover:bg-[#005f55]">
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
        
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-full ${
          isSidebarOpen ? "w-64 md:w-80" : "w-0"
        } bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-gray-600 hover:text-black"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <ul className="p-4">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Home
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            About
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Services
          </li>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Nav;
