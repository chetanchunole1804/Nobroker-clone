import React from "react";

// interface ProgressBarProps {
//   progress: number; // Progress percentage
// }
// : React.FC<ProgressBarProps>

const ProgressBar = () => {
    // const [progress, setProgress] = useState();

  // setProgress(50); // Update progress dynamically
  return (
    <div className="sm:block hidden">
      <div className="flex justify-between bg-white px-5 py-2 ">
      <img src="https://assets.nobroker.in/nb-new/public/Pyp-Form/resale_logo.png" alt="Logo" />
      <div className="flex gap-5 items-center" >
        <div
        // style={{ width: `${progress}%` }}
        className="w-80 h-1 bg-slate-100"  
        >
        </div>
        <span className="text-sm">% Done</span>
        <button className="bg-[#fd3751] py-2 px-3 rounded-sm text-sm text-white font-medium">Preview</button>
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;
