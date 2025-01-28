

// import React from "react";

// interface SaveAndContinueButtonProps {
//   currentPageIndex: number;
//   totalPages: number;
//   onNext: () => void;
//   onBack: () => void;
//   onComplete: () => void;
// }

// const SaveContinueButton: React.FC<SaveAndContinueButtonProps> = ({
//   currentPageIndex,
//   totalPages,
//   onNext,
//   onBack,
//   onComplete,
// }) => {
//   return (
//     <div className="w-screen h-[60px] sm:bg-white bg-teal-600 sm:text-sm text-lg shadow-[0px_5px_10px_0px_gray] flex gap-5 items-center justify-center fixed bottom-0 left-0 z-30">
//       {/* Back Button */}
//       <button
//         className={`px-5 py-2 font-semibold rounded-sm text-white sm:block hidden ${
//           currentPageIndex === 0
//             ? "hidden"
//             : "bg-[#787676] hover:bg-[#5f5d5d]"
//         }`}
//         onClick={onBack}
//         disabled={currentPageIndex === 0}
//       >
//         Back
//       </button>
      
//       {/* Save and Continue Button */}
//       {currentPageIndex < totalPages - 1 ? (
//         <button
//           className="sm:bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm" 
//           type="submit"
//           onClick={onNext}
//         >
//           Save and Continue
//         </button>
//       ) : (
//         <button
//           className="sm:bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm"
//           onClick={onComplete}
//         >
//           Finish posting
//         </button>
//       )}
//     </div>
//   );
// };

// export default SaveContinueButton;


import React, { useState } from "react";
import ConfirmationPopup from "./ConfirmationPopup"; // Adjust the path as needed

interface SaveAndContinueButtonProps {
  currentPageIndex: number;
  totalPages: number;
  onNext: () => void;
  onBack: () => void;
  onComplete: () => void;
}

const SaveContinueButton: React.FC<SaveAndContinueButtonProps> = ({
  currentPageIndex,
  totalPages,
  onNext,
  onBack,
  onComplete,
}) => {
  const [isPopupVisible, setPopupVisible] = useState(false); // Manage popup visibility

  const handleSaveAndContinue = () => {
    setPopupVisible(true); // Show the confirmation popup
  };

  const handleConfirm = () => {
    setPopupVisible(false); // Close the popup
    onNext(); // Proceed to the next page
  };

  const handleCancel = () => {
    setPopupVisible(false); // Close the popup and stay on the current page
  };

  return (
    <div className="w-screen h-[60px] sm:bg-white bg-teal-600 sm:text-sm text-lg shadow-[0px_5px_10px_0px_gray] flex gap-5 items-center justify-center fixed bottom-0 left-0 z-30">
      {/* Back Button */}
      <button
        className={`px-5 py-2 font-semibold rounded-sm text-white sm:block hidden ${
          currentPageIndex === 0
            ? "hidden"
            : "bg-[#787676] hover:bg-[#5f5d5d]"
        }`}
        onClick={onBack}
        disabled={currentPageIndex === 0}
      >
        Back
      </button>

      {/* Save and Continue Button */}
      {currentPageIndex < totalPages - 1 ? (
        <button
          className="sm:bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm"
          type="submit"
          onClick={handleSaveAndContinue}
        >
          Save and Continue
        </button>
      ) : (
        <button
          className="sm:bg-[#fd3752] px-5 py-2 text-white font-semibold rounded-sm"
          onClick={onComplete}
        >
          Finish posting
        </button>
      )}

      {/* Confirmation Popup */}
      <ConfirmationPopup
        message="Are you sure? Data will be submitted, and you will proceed to the next step."
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isVisible={isPopupVisible}
      />
    </div>
  );
};

export default SaveContinueButton;

