import { FC, useState } from "react";

const InfoBox: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="relative p-4 bg-blue-100  rounded-lg sm:w-[55%] mt-2 z-10">
        <div className=" absolute bg-blue-100 rounded-md w-12 h-10 top-9 left-1 -z-10 rotate-45"> "</div>
      <div className="flex items-start">
        <div>
          <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/dirLocationIcon.png" alt="Location" className="bg-white rounded-lg w-8 p-1"/>
        </div>
        <div className="ml-3">
          <h3 className="text-sm  text-[#3f7a95]">
            Don't want calls asking location?
          </h3>
          <p className="text-sm text-[#5f91a8]">
            Add directions to reach using landmarks
          </p>
        </div>
        <button
          onClick={handleClose}
          className="absolute sm:top-4 sm:right-5 top-11 right-1 text-3xl pb-2 px-3 flex items-center justify-center text-center rotate-45 text-[#6b9db4] font-extrabold bg-[#cee1ea] rounded-full"
        >
            <p>+</p>
          
        </button>
      </div>
    </div>
  ) : null;
};

export default InfoBox;
