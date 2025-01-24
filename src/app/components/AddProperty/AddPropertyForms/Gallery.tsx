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

  const toggleMessage = () => {
    setShow(true);
    setChangeBg(!changeBg);
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
      <div className="sm:w-[67%] w-[100%] h-auto bg-white px-12 overflow-hidden relative text-sm z-100 ">
        <div className="flex justify-between items-center">
          <h1 className="text-[#009587] text-lg font-semibold py-4">
            Upload photos & videos
          </h1>
          <button
            className="flex py-1 h-10  rounded-md px-2 items-center text-white gap-2 font-semibold"
            onClick={toggleMessage}
            style={{
              backgroundColor: changeBg ? "rgb(204,204,204)" : "rgb(0,122,111)",
            }}
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
          <button className="py-1 px-4 bg-[#009587] rounded-md text-white text-base mt-4">
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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUAAAD///++vr6WlpbW1tYtLS3i4uKioqLz8/ODg4Pp6elhYWHe3t78/PzT09Pb29tLS0uqqqpXV1fNzc0yMjJ0dHQbGxu4uLiMjIw6OjojIyNQUFCysrIUFBRcXFxpaWlERESgHmC2AAAES0lEQVRoge2Z27qiMAyFERQKWAQRERH1/Z9yNmF2aZY9KPLN1eTOHn5pm66kbbBxW1zlu8Bou7yKPZ0Dd3V7MpMnO7XfwCMXerRoOTz0sYMgXAqXVz/8KhfCk2li08Ro6bQcyUJ4Sr23tuotVacL4Y+x82N5vQue9R5/IF/qs0Vw8R5cvAPPYrCipDnF4tloTcoCi7MXuLh0fr97z7qL4PDsuBZ6tGOmw2WzJjsIGqnB43XZQRBr8HpteK3B31CozyzU4Ie14QcNLlZ1lh93EborrjzpNd9EtTOefWanGre/aKOVrFVq4wnQ39l/uA8u4+0KFksjXDTX3dd2bYT5y1fR3cb85ZvLGvCLec7/JkFfWmKBV2vAKwv8hg3LWzXov7uq4mE8akvsc7PAW2iX/5TtNVr5s1ZSo51G1c6hU2uBhwNvV4yF6fw7gYWhNLHgfYbQAq8hZSa4lv9TPy0iRgb4tbbA96DpBXwpwhMD/LS3wDNIugpYZYTfDPAus8AlLH0NMITTbwiQpbTANxCmb9AZ4TWMbLTjxga/84Y0p1rWgfADrMlodysclItkIrPDaXpBkBorPDU0lHa4NHxQaoXDmTafWljhVA07NLLCQblKKpy3LcAHqgYPq6xwyEc7Kpy3LcCvVA17I7TCIR89Q2+AT/995n0OVrjgDQMYN8BLWBIyYYVjSyqbVwzguN5zl/fhs68BvPkQDoJOY5ydH+CpYSYHB/zJm9KxaXZ+gJNLw1Ht6YCDctGFxez8ACeX3vIeRwf8wZsCzf2T7OGAgwpBNAAaxpLRLg447P+EzyrAaUVAcSsHHAYZ+eGgdaEDDjEr9cNBpev34bRNMuX8HD5QrAA5d8ELvoto7TN13crhO4Jz/xoKB3zL06IJrmSRwzsD/Lp1wGOuzhRtp6uuV/h0ucUDURc74FnP2vZjlBSqP4fnI1zyPQ1XdRwu+IeUY3+h1ozD6fAjeJTLhQMOx6LnOEqpvI3D03FY2ZN1aKQDDm7bUdBSmsDhtNMPPHeFu1eAc3HZ8TyXw6cclz8LXJxwvpunZFsJDoeTjEBKHznhXIemY4ILDoeRxAkHBQ1ZGYff2C+tzAqHxnR6UucwDud1WgsrHM4JNzZ0Bh/4qCYrnPCYz+GU/v8mVQx+NqT+Q+yES56d0aIpd2PwyU156DpLJ3xjcC21URicTrjouhs3HHYcbfHOBCfFlXxHnzzwJ2tNWiF+yxj8SaIIWuSBc1m8k8r1Jng//hD8iJZ74PxTSHNVHsY8m3IrUNzGA4dUYfQtdWonzfudZTqHQ6aILzMIh7Qo32/2KkwOrRCt2giP/eYAB9fKA8dr+lOv+c9QloNehc+w+MSI8K+u6Q8eeOZH2A1f0v4pXPR+hs1enuleLoq9z852e3kjfIHXZz/FbOfaC1/+6a+Pm4b787ufY7L7K8kAl8mCmTknhmd0483/Pso/4p/zaG/i/AE1DTTDYpG0pgAAAABJRU5ErkJggg=="
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
        <div className="flex justify-around mt-8 ">
          <div className="border px-3 py-3 w-56 flex">
            <img
              src="data:image/png;base64,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"
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
          <button className="py-1 px-4 bg-[#009587] rounded-md text-white text-base mt-4">
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
