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

      {isOpen ? (
        <div className="overflow-auto h-screen overflow-y-scroll fixed top-0 left-0 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
          <div className="w-full max-w-[90%] rounded-[20px] bg-white py-12 px-8  md:py-[60px] md:px-[70px]">
            <span className="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>

            {/* Thêm biểu tượng X ở góc phải */}

            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
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

            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;
