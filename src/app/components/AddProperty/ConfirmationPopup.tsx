import React from "react";

interface ConfirmationPopupProps {
  message: string; // Message to display in the popup
  onConfirm: () => void; // Function to call when "Yes" is clicked
  onCancel: () => void; // Function to call when "No" is clicked
  isVisible: boolean; // Controls the visibility of the popup
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  message,
  onConfirm,
  onCancel,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-around mt-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
          >
            Yes, I am sure
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md"
          >
            No, I am not sure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
