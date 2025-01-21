import React,{useState} from 'react'

const HelpInterest = () => {

    const [intrest, setIntrest] = useState(true);

    const handleChange = ()=>{
        setIntrest(false)
    }
  return (
    <div className='w-full bg-[#feebd2] py-2 text-sm flex items-center justify-center rounded-md'>
        {intrest ? <div className='flex gap-4 items-center'>
            <img src="https://www.nobroker.in/nb-new/public/Post-Your-Property/callback.svg" alt="" className='w-5'/>
            <p>Don’t want to fill all the details? Let us help you!</p>
            <button onClick={handleChange} className='text-[#009587] border rounded-sm border-[#009587] py-2 px-4 font-semibold'>I'm Interested</button>
        </div>
            :
         <div className='flex gap-1 items-center'>
            <img src="https://www.nobroker.in/nb-new/public/Post-Your-Property/tick.svg" alt="" className='w-9 mr-5'/>
            {/* <div> */}
            <p>Thank you for the interest.<span className='font-semibold'>Our agent will give you a call shortly.</span></p>
            {/* <p></p> */}
            {/* </div> */}
        </div>}
    </div>
  )
}

export default HelpInterest