import React from "react";

// interface SaveContinueButtonProps {
//   onClick: () => void;
// }
// : React.FC<SaveContinueButtonProps>

const SaveContinueButton = () => {
  return (
    <div className="w-screen h-[60px] bg-white shadow-[0px_5px_10px_0px_gray] flex gap-5 items-center justify-center fixed bottom-0 left-0 z-2000">
      <button className="px-5 py-2 bg-[#787676] font-semibold rounded-sm text-white">Back</button>
      <button className="bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm" type="submit">Save & Continue</button>
    </div>
  );
};

export default SaveContinueButton;
