import { useState } from "react";

const Popup = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div className="w-32"></div>

          <button
            onClick={togglePopup}
            className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white w-32"
          >
            Add
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-[1000px] bg-white rounded-lg p-8">
            <div className="flex justify-end">
              <button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
