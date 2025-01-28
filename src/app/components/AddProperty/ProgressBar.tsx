import React from "react";
import propertyData from "./AddPropertyData.json";

interface ProgressBarProps {
  progress: number; // Progress percentage
  activePage:string;
  onBack:() => void; 

}

interface PropertyItem {
  key: string;
}

const propertyDataTyped: PropertyItem[] = propertyData;

const ProgressBar: React.FC<ProgressBarProps> = ({progress,activePage, onBack}) => {
  return (
    //sm:block hidden
    <div className="">
      <div className="sm:hidden block  ">
      {propertyDataTyped
  .map((item, index) => ({ item, index }))
  .filter(({ item }) => activePage === item.key)
  .map(({ item, index }) => ( 
    <div key={index} className="bg-[#fd3751] h-14 flex items-center justify-around text-white w-full sticky top-0">
      <img
        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/ArrowBackIOSWhite.svg"
        alt="back"
        onClick={onBack}
      />
      <div className="flex gap-3 items-center">
        <span className="bg-white text-[#fd3751] rounded-full px-3 py-1 font-mono font-extrabold test-xl">
          {index + 1}
        </span>
        <p className="font-medium text-lg">{item.key}</p>
      </div>
      <div></div>
    </div>
  ))}
      </div>
      <div className="flex justify-between bg-white sm:px-5 sm:py-2">
        <img
          src="https://assets.nobroker.in/nb-new/public/Pyp-Form/resale_logo.png"
          alt="Logo"
          className="sm:block hidden"
        />
        <div className="flex gap-5 items-center relative">
          {/* Static background bar */}
          <div className="relative sm:w-64 w-96 h-1 bg-gray-300 overflow-hidden">
            <div
              style={{ width: `${progress}%`, transition: "width 0.7s" }}
              className="bg-teal-600 h-full"
            ></div>
          </div>
          <span className="text-sm sm:block hidden">{progress}% Done</span>
          <button className="bg-[#fd3751] py-2 px-3 rounded-sm text-sm text-white font-medium sm:block hidden">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
