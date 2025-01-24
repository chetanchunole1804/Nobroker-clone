import React from "react";

const ProvidingAvailbility = () => {
  return (
    <div>
      <div className="border bg-gray-100 px-2 py-4">
        <div className="flex mt-2">
          <div className="mr-4">
            <p className="font-semibold mb-1">
              Freshly Painted House gets Rented
            </p>
            <p className="font-semibold">out 73% faster</p>
          </div>
          <img
            src="https://assets.nobroker.in/nb-new/public/Home-Services/painting.jpg"
            alt=""
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
            <p>Price Match Guarantee</p>
          </span>
          <span className="flex bg-gray-300 rounded-full px-1 text-[10px] items-center">
            <img
              src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CheckCircleGreen.svg"
              alt=""
              className="w-3"
            />{" "}
            <p>1 Year warranty</p>
          </span>
        </div>
        <p className="mt-2">
          Get Professional Painting Starting at
          <span className="font-semibold">₹ 5/sqft</span>
        </p>
        <div className="flex gap-2  mt-4 justify-center">
          <button className="bg-gray-50 border py-2 px-2 rounded font-semibold">
            Tell me the price{" "}
          </button>
          <span
            className="border py-2 px-2 rounded font-semibold cursor-pointer"
            style={{
              backgroundColor: isPaintingDisabled ? "#009587" : "#f9fafb",
              transition: "color 0.5s",
              color: isPaintingDisabled ? "white" : "black",
            }}
            onClick={handlePaintingChange}
          >
            I don't want Painting{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProvidingAvailbility;
