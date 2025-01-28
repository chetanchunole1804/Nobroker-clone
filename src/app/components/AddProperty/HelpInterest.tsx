import React,{useState} from 'react'

const HelpInterest = ({handleIntrest}:any) => {

    const [intrest, setIntrest] = useState(true);

    // const handleChange = ()=>{
    //     setIntrest(false)
    // }
  return (
    <div className='w-full bg-[#feebd2] py-2 text-sm flex  items-center justify-center rounded-md'>
        {intrest ? <div className='flex gap-4 items-center sm:px-0 px-2'>
            <img src="https://www.nobroker.in/nb-new/public/Post-Your-Property/callback.svg" alt="" className='sm:w-5 w-10'/>
            <p>Don’t want to fill all the details? Let us help you!</p>
            <button onClick={handleIntrest} className='text-[#009587] border sm:rounded-sm rounded-md border-[#009587] sm:py-2 sm:px-4 px-2 font-semibold'>I'm Interested</button>
        </div>
            :
         <div className='flex gap-1 items-center'>
            <img src="https://www.nobroker.in/nb-new/public/Post-Your-Property/tick.svg" alt="" className='w-9 mr-5'/>
            <p>Thank you for the interest.<span className='font-semibold'>Our agent will give you a call shortly.</span></p>
        </div>}
    </div>
  )
}

export default HelpInterest