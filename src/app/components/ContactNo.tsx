import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import check from "../../../public/assets/checkmark.png";
import ShowCountryDialCode from "@/app/components/AddProperty/ShowCountryDialCode";

const ContactNo = ({ handleClose }: any) => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isOtpBar, setIsOtpBar] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState(33);
  const [canResend, setCanResend] = useState(false);

  const handleChange = ( e: any) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setNumber(value);
      setError(""); // Clear error when input is valid
    } else {
      setError("Only numbers are allowed");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!number) {
      setError("Mobile number is required");
      return;
    }

    if (number.length !== 10) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(number)) {
      setError("Enter a valid mobile number");
      return;
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendOTP = () => {
    setOtp(new Array(6).fill("")); // Clear OTP input
    setTimer(30); // Reset timer to 30 sec
    setCanResend(false); // Disable resend button
    inputRefs.current[0]?.focus(); // Focus first input
  };

  const handleOTP = () => {
    setIsOtpBar(true);
  };

  const handleCheck = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only last entered digit
    setOtp(newOtp);

    // Move to the next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to the previous input on Backspace if the current field is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (!/^\d{6}$/.test(pasteData)) return; // Ensure exactly 6 digits

    setOtp(pasteData.split("")); // Set OTP state
    pasteData.split("").forEach((digit, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i]!.value = digit; // Set value directly
      }
    });

    // Move focus to the last input
    inputRefs.current[5]?.focus();
  };

  return (
    <div className="bg-black/50 w-screen h-screen flex justify-center items-center absolute top-0 left-0 ">
      <div className="w-[50%] h-[90%] flex bg-white relative">
        <span
          className=" absolute top-4 right-4 text-lg font-semibold cursor-pointer"
          onClick={handleClose}
        >
          ✕
        </span>
        <div className="h-full w-[40%] bg-gray-50 pl-8 flex flex-col justify-center text-left ">
          <img
            src="https://assets.nobroker.in/nb-new/public/Signup/signupHome.png"
            alt=""
            className="w-24 mb-2"
          />
          <h1 className="text-lg font-semibold mb-1">Login/Sign up</h1>
          <ul className="checklist text-gray-600 leading-7 text-sm">
            <li className="flex items-center gap-2">
              {" "}
              <Image src={check} alt="" className="w-3 h-3" /> Zero Brokerage.
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <Image src={check} alt="" className="w-3 h-3" /> Thousands of new
              listings daily.
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <Image src={check} alt="" className="w-3 h-3" /> 100 Cr+ Brokerage
              saved monthly.
            </li>
          </ul>
        </div>
        <div className="pt-14 px-8 w-[60%]">
          {!/^[6-9]\d{9}$/.test(number) ? (
            <div>
              <form action="" onSubmit={handleSubmit}>
                <h1 className="text-lg mb-3 font-semibold">
                  Enter phone to continue
                </h1>
                <div className="flex px-2 py-2 border border-gray-300 w-full mt-2 rounded items-center relative">
                  <div className=" absolute top-2">
                    <ShowCountryDialCode />
                  </div>
                  <input
                    type="tel"
                    className="focus:outline-none pl-20 text-sm"
                    placeholder="Enter Mobile Number"
                    value={number}
                    onChange={handleChange}
                    maxLength={10}
                  />
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-[#fd3752] text-base py-2 text-white font-semibold rounded-md mt-8"
                >
                  Continue
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h1 className="text-lg mb-3 font-semibold">
                Enter OTP or Password
              </h1>
              <form action="" onSubmit={handleOTP}>
                <div className=" px-2  border border-gray-300 w-full mt-2 rounded items-center bg-gray-50">
                  <div className="flex justify-between items-center px-2 w-full border-b py-2">
                    <p>{number}</p>
                    <p
                      className="text-teal-700 text-xs underline cursor-pointer"
                      onClick={(e) => setNumber("")}
                    >
                      Change Phone
                    </p>
                  </div>
                  <div className="py-2 flex justify-between items-center  px-2">
                    <p className="flex gap-1 items-center">
                      Get update on{" "}
                      <span>
                        {" "}
                        <img
                          src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png"
                          alt="img"
                          className="w-6"
                        />{" "}
                      </span>
                      WhatsApp
                    </p>
                    <div>
                      <div
                        className={`flex items-center w-7 h-4 rounded-full relative ${
                          isActive ? "bg-gray-400" : "bg-teal-600"
                        }`}
                        onClick={() => setIsActive(!isActive)}
                      >
                        <span
                          className={`cursor-pointer w-3 h-3 rounded-full absolute ${
                            isActive
                              ? "bg-white left-[1px]"
                              : "bg-white right-[1px] border border-teal-700"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <p>Enter OTP here</p>
                  <div className="flex gap-4 mt-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el: any) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCheck(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-11 h-10 text-center border-b border-gray-300  focus:outline-none font-semibold"
                      />
                    ))}
                  </div>
                  {!timer ? (
                    <p className="text-right text-xs cursor-pointer text-teal-600 mt-2" onClick={handleResendOTP}>Resend OTP</p>
                  ) : (
                    <p className="text-right text-xs text-teal-600 mt-2">0.{timer}s</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fd3752] text-base py-2 text-white font-semibold rounded-md mt-8"
                >
                  Continue
                </button>
              </form>
            </div>
          )}
      
      <p className=" fixed bottom-20 pl-9 text-xs">By continuing, you <span className="font-semibold">agree </span>to our <span className="font-semibold cursor-pointer">Terms & Conditions</span> </p>
      {/^[6-9]\d{9}$/.test(number) ?<p className=" fixed bottom-16 pl-9 text-xs">For any issue/query please email <span className="font-semibold cursor-pointer">hello@nobroker.in</span> </p>: null}
        </div>
      </div>
    </div>
  );
};

export default ContactNo;
