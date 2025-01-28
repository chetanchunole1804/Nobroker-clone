import React, { useState, useRef } from "react";
import SaveContinueButton from "../SaveContinueButton";
import MessageReceived from "../MessageReceived";
import whatsApp from "../../../../../public/Whatsapp.svg";
import Message from "../../../../../public/Message.svg";

interface UploadedImage {
  id: number;
  src: string;
  pictureType: string;
}

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleMessage = () => {
    setShow(true);
    // setChangeBg(changeBg);
    setIsDisabled(true);
    
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the hidden file input click
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const newImage: UploadedImage = {
            id: Date.now(),
            src: e.target.result as string,
            pictureType: "Picture Type",
          };
          setImages((prevImages) => [...prevImages, newImage]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id: number) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  const handleDropdownChange = (id: number, value: string) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, pictureType: value } : image
      )
    );
  };
  return (
    <>
      {show ? <MessageReceived /> : null}
      <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 pb-20 sm:pb-0 overflow-hidden relative text-sm z-100 ">
        <div className="flex justify-between items-center sm:flex-row flex-col ">
          <h1 className="text-[#009587] text-lg font-semibold py-4">
            Upload photos & videos
          </h1>
          <button
            className={`flex py-1 h-10 rounded-md px-2 items-center gap-2 font-semibold text-white ${
              isDisabled ? "cursor-not-allowed bg-[rgb(204,204,204)] " : "cursor-pointer bg-teal-600 "
            }`}
            onClick={toggleMessage}
            disabled={isDisabled}
            // style={{
            //   backgroundColor: !changeBg  ? "rgb(0,122,111)" :  "rgb(204,204,204)", bg-teal-600
            // }}
          >
            <img
              src="https://assets.nobroker.in/nb-new/public/Pyp-Form/upload.svg"
              alt=""
            />
            <span>Upload through phone</span>
          </button>
        </div>
        <div className="h-[1px] w-screen bg-gray-200 absolute right-0 mt-[5px]"></div>
        <div
          className="border w-full h-48 mt-6 bg-[#f8f8f8] text-center pt-5 cursor-pointer text-base"
          onClick={handleClick}
        >
          <img
            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/CameraAlt.png"
            alt=""
            className="mx-auto"
          />
          <p className="font-semibold mt-5 text-[#464646] ">
            Add photos to get 5X more responses.
          </p>
          <p className="mt-1 text-[#464646]">
            90% tenants contact on properties with photos.
          </p>
          <button className="py-1 px-4 bg-[#009587] rounded-md text-white text-base sm:mt-4 mt-2">
            Add Photos
          </button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <div className="flex gap-3 mt-3">
          {images.map((image) => (
            <div key={image.id} className="image-preview">
              <img src={image.src} alt="Uploaded Preview" className="w-32 h-36" />

              <div className="options flex justify-center border ">
                <select
                  value={image.pictureType}
                  onChange={(e) =>
                    handleDropdownChange(image.id, e.target.value)
                  }
                >
                  <option value="Picture Type" disabled>
                    Picture Type
                  </option>
                  <option value="Living Room">Living Room</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Kitchen">Kitchen</option>
                </select>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(image.id)}
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/048/116/449/non_2x/whatsapp-popular-social-media-button-icon-instant-messenger-logo-of-whatsapp-free-png.png"
                    alt=""
                    className="w-5"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[1px]  bg-gray-300 right-0 relative mt-10">
          {" "}
          <span className=" uppercase p-1 rounded-full bg-gray-500 text-white text-xs absolute left-80 -top-3">
            or
          </span>
        </div>
        <p className="text-center font-semibold text-[#464646] text-base mt-8">
          We can upload photos on your behalf
        </p>
        <div className="flex justify-around mt-8 sm:flex-row flex-col  items-center sm:items-start">
          <div className="border px-3 py-3 w-56 flex">
            <img
              src="https://i.pinimg.com/474x/f7/1f/fb/f71ffb7ad7db43ccc7b1466de418f254.jpg"
              alt="whatsApp"
              className="w-6 h-6 mr-3"
            />
            <div className="text-[#464646]">
              <p className="text-base">Whatsapp us on</p>
              <hr />
              <p className="font-bold pt-2">0-9241-700-000</p>
            </div>
          </div>
          <div className="border flex px-3 py-2 w-56 ">
            <img
              src="https://img.favpng.com/11/8/1/message-logo-png-favpng-wKZbhL1gD5p3MnDA8hbFtegsc.jpg"
              alt="Message"
              className="w-8 h-6 mr-3"
            />
            <div className="text-[#464646]">
              <p className="text-base">Email to</p>
              <hr />
              <p className="font-bold pt-2">photos@nobroker.in</p>
            </div>
          </div>
        </div>
        <div
          className="border w-full h-48 mt-6 bg-[#f8f8f8] text-center pt-5 cursor-pointer text-base"
          onClick={handleClick}
        >
          <img
            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Videocam.png"
            alt=""
            className="mx-auto"
          />
          <p className="font-semibold mt-5 text-[#464646] ">
            Add Videos to get 5X more responses.
          </p>
          <p className="mt-1 text-[#464646]">
            90% tenants contact on properties with videos.
          </p>
          <button className="py-1 px-4 bg-[#009587] rounded-md text-white text-base sm:mt-4 mt-2">
            Add Videos
          </button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        {/* <SaveContinueButton /> */}
      </div>
    </>
  );
};

export default Gallery;
