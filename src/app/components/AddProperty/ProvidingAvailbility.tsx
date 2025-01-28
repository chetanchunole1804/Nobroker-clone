import React,{useState} from "react";

interface ProvidingAvailbilityProps{
  heading:string,
  image:string,
  heading2:string,
  guarantee:string,
  warranty:string,
  startingAt:string,
  rate:string,
  tag:string,
}

const ProvidingAvailbility:React.FC<ProvidingAvailbilityProps> = ({heading,image,heading2, guarantee, warranty, startingAt,rate,tag }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleChange = () => {
    setIsDisabled(!isDisabled);
    console.log(isDisabled)    
  };
  return (
    <div>
      {
        <div className="border bg-gray-100 px-2 py-4">
        <div className="flex mt-2">
          <div className="mr-4">
            <p className="font-semibold mb-1">
              {heading}
            </p>
            <p className="font-semibold">{heading2}</p>
          </div>
          <img
            src={image}
            alt={heading}
            className="w-20 h-16 rounded-md"
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
            <img
              src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
              alt=""
              className="w-3"
            />{" "}
            <p>{guarantee}</p>
          </span>
          <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
            <img
              src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
              alt=""
              className="w-3"
            />{" "}
            <p>{warranty}</p>
          </span>
        </div>
        <p className="mt-2">
          {startingAt}
          <span className="font-semibold">{rate}</span>
        </p>
        <div className="flex gap-2  mt-4 justify-center">
          <button className="bg-gray-50 border py-2 px-2 rounded font-semibold">
            Tell me the price{" "}
          </button>
          <span
            className={`border py-2 px-2 rounded font-semibold cursor-pointer transition-colors duration-500 ${
              !isDisabled ? 'bg-[#009587] text-white' : 'bg-[#f9fafb] text-black'
            }`}
            onClick={handleChange}
          >
            {tag}
          </span>
        </div>
      </div>
      }
    </div>
  );
};

export default ProvidingAvailbility;
