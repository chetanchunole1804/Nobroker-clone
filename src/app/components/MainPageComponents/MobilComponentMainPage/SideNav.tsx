"use Client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {snData} from './Data'


const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};
function SideNav() {
    
    const [shuffledData, setShuffledData] = useState<typeof snData>([]);
    const [progress, setProgress] = useState<number>();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setShuffledData(shuffleArray(snData)); // Shuffle and store data
    }, []);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(percentage);
        }
    };

    return (
        <div className=' md:hidden animate-nb__wWzLw fixed top-0 left-0 h-screen bg-black/70 z-40 w-full'>
            <div className='w-full h-[100%] bg-white  relative  shadow-[1px_2px_0_#000]'>
                {/* header  */}
                <div className=' p-[18px] bg-[#fd3752] '>
                    <div>
                        <div className=' items-center flex relative r-[7px] rounded-[100%] p-[4px]  '>
                            <div className=' bg-[#fff] rounded-full block p-[4px] h-[34px] w-[34px] '>
                                <Image src={"https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"} alt='' width={26} height={26}
                                    className=' align-middle inline-block  '
                                ></Image>
                            </div>
                            <div className=' ml-[7px] text-[#fff] text-[18px] '>Login/SignUp</div>
                            <Image src={"https://assets.nobroker.in/nb-new/public/Home/loginNext.svg"} alt='' width={7} height={12}
                                className='absolute right-[3px] align-middle inline-block max-w-[100%] h-auto '
                            ></Image>
                        </div>

                        <div className="flex items-center bg-white rounded-sm mt-5 p-[5px] pr-2 relative w-[100%]  ">
                            <div>
                                <Image src={"https://assets.nobroker.in/nb-new/public/Home/PYP.svg"} alt='' width={32} height={29} ></Image>
                            </div>
                            <div className=' ml-[7px] text-[14px] font-medium '>Post your property</div>
                            <div className='bg-black rounded-sm text-white text-xs ml-1 px-2' >FREE</div>
                            <Image src={"https://assets.nobroker.in/nb-new/public/Home/Next.svg"} alt='' width={7} height={12}
                                className='absolute right-[16px] align-middle inline-block max-w-[100%] h-auto text-red '
                            ></Image>
                        </div>
                    </div>
                </div>
                {/* body  */}
                <div className=''>
                    <div>
                        {/* 1st part  */}
                        <div className=' border border-gray-300/70 rounded-md m-3 transition-height duration-1000 ease-in-out overflow-auto grow '>
                            <div className='p-2 flex flex-row  '>
                                <div className=' flex items-end justify-end flex-col flex-3 font-normal '>
                                    <div className=' w-full text-[15px] font-normal text-gray-700 '>
                                        Because
                                        <span className=' text-[#53b590] font-medium ' > Your Home</span>
                                    </div>
                                    <div className=' w-full text-[15px] font-normal text-gray-700 leading-5 '>Deserves The Best.</div>
                                </div>
                                <div className=' flex items-end flex-col text-[9px] ml-auto mr-0 '>
                                    <Image src={"https://assets.nobroker.in/nb-new/public/Home/USP_icon.svg"} alt='' width={20} height={20}
                                        className='align-middle inline-block'
                                    ></Image>
                                    <span>
                                        <span className='font-semibold'>3Lacs+ </span>
                                        Services
                                    </span>
                                    <span>
                                        booked in
                                        <span className='font-semibold'> last 3 months</span>
                                    </span>
                                </div>
                            </div>
                            {/* video part  */}
                            <div className=' w-full h-full overflow-hidden relative '>
                                <div className=' w-full h-full whitespace-nowrap transform translate-x-0 transition-all ease-out '>
                                    {shuffledData.map((item, index) => (
                                        <div key={index} className="w-full h-full whitespace-normal inline-block align-top p-2 py-0">
                                            <div className="relative text-center mb-5">
                                                <div className="bg-cover bg-center cursor-pointer bg-no-repeat h-[12rem] w-full rounded-lg">
                                                    <div>
                                                        <video
                                                            className="h-[13.5rem] w-full transition-all duration-500 opacity-100"
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            src={item.image}
                                                            onTimeUpdate={handleTimeUpdate}
                                                            ref={index === 0 ? videoRef : undefined}
                                                        ></video>
                                                        <div className="bg-red-600 rounded-md absolute bottom-11 z-10 h-1" style={{ width: `${progress}%` }}></div>
                                                        <div className="flex justify-center">
                                                            <div className="bg-white rounded-lg h-1 absolute bottom-11 w-full"></div>
                                                        </div>
                                                        <div className="flex right-0 bottom-0 left-0 rounded-b-lg px-2 justify-between absolute items-center h-[43px] opacity-50 bg-black blur-[1px]"></div>
                                                        <div className="flex right-0 bottom-0 left-0 rounded-b-lg px-2 justify-between absolute items-center h-[42px]">
                                                            <div className="text-white text-semibold text-[14px] flex">
                                                                <span>
                                                                    <Image
                                                                        src="https://assets.nobroker.in/nb-new/public/Home/newServicesIcons/hs_pnm_compressed.webp"
                                                                        alt=""
                                                                        width={25}
                                                                        height={50}
                                                                        loading="lazy"
                                                                        className="mr-2 rounded h-[25px] w-[25px]"
                                                                    />
                                                                </span>
                                                                <span className="font-semibold">{item.title}</span>
                                                            </div>
                                                            <button className="flex justify-center w-16 items-center text-white text-[12px] rounded-md font-medium px-2 py-1.5 bg-[#009587]">
                                                                {item.add}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* 3rd part  */}
                            <div className=''>

                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav