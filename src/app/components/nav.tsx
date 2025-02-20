"use client"
import { divIcon } from "leaflet";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ContactNo from "./ContactNo";
import MenuBar from "./MenuBar";
import SideNav from "./MainPageComponents/MobilComponentMainPage/SideNav";

const Nav: React.FocusEventHandler = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [menuItem, setMenuItem] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const router = useRouter();

  const handleClick = () => {
    router.push("/AddProperty");
  };

  const handleSignUp = () => {
    setIsFormOpen(!isFormOpen);
  };

  const showMenuItem = () => {
    setMenuItem((prev) => !prev);
  };

  return (
    <div >
      <style jsx>{`
        @keyframes moveText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="w-full flex md:justify-between bg-white shadow-md  z-1 fixed items-center gap-2 px-5 py-5 nav_box_shadow flex-wrap text-gray-500">
        <div
          className="flex md:hidden gap-2 justify-center items-center cursor-pointer"
          
        >
          <div className="bg-black w-[24px] h-[24px] absolute opacity-0 z-10 " onClick={toggleSidebar}></div>
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
          <div className="border flex justify-center items-center h-8 px-2 text-center hover:bg-gray-100 rounded-[2px]">
            <p className="flex items-center gap-2"><img src="https://assets.nobroker.in/nb-new/public/payrent.png" alt="" /><span>| Pay rent</span></p>
          </div>
          <div
            onClick={handleClick}
            className="rounded-[2px] text-white bg-teal-600 justify-center text-[14px] h-8 items-center flex px-2 hover:bg-[#005f55]"
          >
            For Property owners
          </div>
          <div className="flex gap-2 justify-center items-center ">
            {/* profile data will show */}
            {user ? (
              <div className="flex items-center gap-2 ">
                <div className="profile w-9 h-9 rounded-full flex justify-center items-center border border-gray-400">
                  <img
                    src="https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <span className="text-gray-400 border-r pr-2">
                  Chetan Chunole
                </span>
                <img
                  src="https://assets.nobroker.in/nb-new/public/shortlistNotification.svg"
                  alt=""
                  className="border-r pr-2"
                />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="w-6 opacity-60 border-r pr-2"
                />
              </div>
            ) : (
              <h1
                onClick={handleSignUp}
                className=" cursor-pointer border-r pr-2"
              >
                Sign up
              </h1>
            )}
          </div>
          {isFormOpen && <ContactNo handleClose={handleSignUp} />}

          <div className="border-r pr-4">
            <h1 onClick={handleSignUp} className=" cursor-pointer">
              Log in
            </h1>
          </div>
          <div>
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={showMenuItem}
              
            >
              <img
                src="https://img.icons8.com/?size=50&id=3096&format=png"
                alt="menu"
                className="w-4 h-4"
              />
              <p>Menu</p>
            </div>
          </div>
        </div>

        {/* Modified marquee text section - only visible when sidebar is closed */}
        {!isSidebarOpen && (
          <div className="md:hidden fixed right-0 left-0 top-[30px] flex justify-center z-31 pt-[25px]">
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
              {/* 2nd block moving text - fixed animation */}
              <div className="flex flex-grow-1 h-[100%] overflow-hidden mr-[6px] items-center w-[100%]">
                <div
                  className="flex flex-shrink-0 flex-grow-1 h-[40%] relative top-[1px] justify-center items-center"
                  style={{
                    backgroundImage:
                      "url('https://assets.nobroker.in/nb-new/public/Home/FestiveServiceIcons/marqueediwalinew.svg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat no-repeat",
                    backgroundPosition: "0px 0px",
                    animation: "moveText 15s linear infinite",
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
        className={`fixed z-20 top-0 left-0 h-full ${
          isSidebarOpen ? "w-[80%] h-[100%] md:w-[80%]" : "w-0"
        } bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-auto`}
      >
        <SideNav></SideNav>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
      {menuItem && <MenuBar />}
    </div>
  );
};

export default Nav;