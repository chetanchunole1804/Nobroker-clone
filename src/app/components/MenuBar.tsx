import React,{useState} from "react";
import menuItem from "@/app/components/MenuList.json";
import facebook from '../../../public/faceBook.svg'
import twitter from '../../../public/google.svg'
import google from '../../../public/twitter.svg'
import Image from "next/image";

const MenuBar = () => {
  const [isOpenConact, setIsOpenConact] = useState(false)

  const toggleContact = ()=>{
    setIsOpenConact((prev)=> !prev)
  }
  return (
    <div className="w-60 bg-white shadow h-[90vh] fixed top-12 right-0 z-50 px-5 border pt-1 text-gray-600 text-[13px] overflow-auto">
      <ul>
        {menuItem.map((item) => (
          <li
            key={item.id}
            className="py-3 border-b hover:text-teal-600 cursor-pointer"
          >
            {item.title}
          </li>
        ))}
        <li className="py-3 border-b hover:text-teal-600 cursor-pointer flex justify-between" onClick={toggleContact}>
          <span>Conatct</span>
          <span className="text-gray-700"> {!isOpenConact?"∨":"∧"}</span>
        </li>
        {isOpenConact && 
        <div>
          <p>Email</p>
          <p>hello@nobrober.in</p>
          <div className="flex justify-between gap-2 px-2 py-2">
            <Image src={facebook} alt="Facebook"></Image>
            <Image src={twitter} alt="Twitter"></Image>
            <Image src={google} alt="Google"></Image>
          </div>
          </div>}
      </ul>
    </div>
  );
};

export default MenuBar;
