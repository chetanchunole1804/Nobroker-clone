import Image from "next/image";
import React from "react";
// import navbell from "../../../public/nav_bell.svg";

const Nav = () => {
  return (
    <div className="w-full flex justify-between px-5 py-3 nav_box_shadow">
      <div>
        <Image
          src="https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg"
          alt="NoBroker Logo"
          width={150}
          height={50}
          unoptimized
        />
      </div>
      <div className="right_nav flex h-fit text-sm justify-center items-center gap-4">
        <div className="border rounded-sm flex justify-center items-center h-8  px-2 text-center hover:bg-gray-100">
          <p>Pay rent</p>
        </div>
        <div className="rounded-sm text-white bg-[#007A6F] justify-center text-[14px] h-8 items-center flex px-2 hover:bg-[#005f55]">
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

        <div className="flex gap-2 justify-center items-center">
        <Image
      src="https://assets.nobroker.in/nb-new/public/hamburger-menu.svg"
      width={24}
      height={24}
      alt="Hamburger Menu"
    />
<h1>Menu</h1>


</div>

      </div>
    </div>
  );
};

export default Nav;
