import { useState } from "react";
import Snowfall from "react-snowfall";
const Popup = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50">
      {isOpen && (
        <div className="bg-black bg-opacity-50 z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className=" p-8 rounded ">
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-10 rounded"
                onClick={togglePopup}
              >
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
      {isOpen && (
        <Snowfall
          color="#fff"
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
          }}
        />
      )}
    </div>
  );
};

export default Popup;
