import React,{useState} from 'react'

interface AvailabilityProps{
    days:string,
    tag:string,
    selectedButton: string | null;
  handleButtonClick: (buttonName: string) => void;
}

export const Availability:React.FC<AvailabilityProps> = ({days, tag,selectedButton,
    handleButtonClick,}) => {
    
  return (
    <div>
        {
            <div
            onClick={() => handleButtonClick(days)}
            style={{
              transition: "color 0.5s",
            }}
            className={`bg-gray-100 rounded py-[2px] px-4 border-[1px] border-gray-300 cursor-pointer text-[#464646] text-sm text-center ${
              selectedButton === days
                ? "bg-teal-600 text-white"
                : "bg-[#f9fafb] text-black"
            }`}
          >
            {days} <p className="text-[10px]">{tag}</p>
          </div>
        }
    </div>
  )
}
